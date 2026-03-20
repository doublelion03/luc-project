import { API_CONFIG } from './config.js'

class ApiClient {
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL
    this.getAccessToken = () => localStorage.getItem('accessToken')
    this.getRefreshToken = () => localStorage.getItem('refreshToken')
    this.setTokens = (accessToken, refreshToken) => {
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
    }
    this.clearTokens = () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const accessToken = this.getAccessToken()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...options.headers
      },
      ...options
    }

    try {
      const response = await fetch(url, config)
      
      // Handle 401 Unauthorized - try to refresh token
      if (response.status === 401 && this.getRefreshToken()) {
        const refreshSuccess = await this.refreshToken()
        if (refreshSuccess) {
          // Retry the original request with new token
          const newAccessToken = this.getAccessToken()
          config.headers.Authorization = `Bearer ${newAccessToken}`
          const retryResponse = await fetch(url, config)
          return this.handleResponse(retryResponse)
        } else {
          // Refresh failed, clear tokens and redirect to login
          this.clearTokens()
          window.location.href = '/talent-sign-in'
          throw new Error('Session expired. Please login again.')
        }
      }

      return this.handleResponse(response)
    } catch (error) {
      console.error('API Request Error:', error)
      throw error
    }
  }

  async handleResponse(response) {
    const data = await response.json()
    
    if (!response.ok) {
      const error = new Error(data.message || 'API request failed')
      error.status = response.status
      error.data = data
      throw error
    }
    
    return data
  }

  async refreshToken() {
    try {
      const refreshToken = this.getRefreshToken()
      if (!refreshToken) return false

      const response = await fetch(`${this.baseURL}${API_CONFIG.ENDPOINTS.AUTH.REFRESH}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
      })

      if (response.ok) {
        const data = await response.json()
        this.setTokens(data.accessToken, data.refreshToken)
        return true
      }
      
      return false
    } catch (error) {
      console.error('Token refresh failed:', error)
      this.clearTokens()
      return false
    }
  }

  // HTTP methods
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString()
    const url = queryString ? `${endpoint}?${queryString}` : endpoint
    return this.request(url, { method: 'GET' })
  }

  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  async patch(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data)
    })
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }

  // File upload
  async upload(endpoint, formData, onProgress) {
    const accessToken = this.getAccessToken()
    const url = `${this.baseURL}${endpoint}`

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      
      if (onProgress) {
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const progress = (event.loaded / event.total) * 100
            onProgress(progress)
          }
        })
      }

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText)
            resolve(data)
          } catch (error) {
            reject(new Error('Invalid response format'))
          }
        } else {
          try {
            const errorData = JSON.parse(xhr.responseText)
            const error = new Error(errorData.message || 'Upload failed')
            error.status = xhr.status
            error.data = errorData
            reject(error)
          } catch {
            const error = new Error('Upload failed')
            error.status = xhr.status
            reject(error)
          }
        }
      })

      xhr.addEventListener('error', () => {
        reject(new Error('Network error during upload'))
      })

      xhr.open('POST', url)
      xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`)
      xhr.send(formData)
    })
  }
}

// Create singleton instance
export const apiClient = new ApiClient()
export default apiClient
