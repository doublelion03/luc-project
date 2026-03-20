import { apiClient } from '../client.js'
import { API_CONFIG } from '../config.js'

export class GeneralService {
  // Get API health status
  async getHealth() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.GENERAL.HEALTH)
      return response
    } catch (error) {
      console.error('Get health status error:', error)
      throw error
    }
  }

  // Get API version
  async getVersion() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.GENERAL.VERSION)
      return response
    } catch (error) {
      console.error('Get version error:', error)
      throw error
    }
  }

  // Get categories
  async getCategories() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.GENERAL.CATEGORIES)
      return response
    } catch (error) {
      console.error('Get categories error:', error)
      throw error
    }
  }

  // Get skills
  async getSkills() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.GENERAL.SKILLS)
      return response
    } catch (error) {
      console.error('Get skills error:', error)
      throw error
    }
  }

  // Get locations
  async getLocations() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.GENERAL.LOCATIONS)
      return response
    } catch (error) {
      console.error('Get locations error:', error)
      throw error
    }
  }

  // Upload file
  async uploadFile(file, onProgress) {
    const formData = new FormData()
    formData.append('file', file)
    
    try {
      const response = await apiClient.upload(API_CONFIG.ENDPOINTS.GENERAL.UPLOADS, formData, onProgress)
      return response
    } catch (error) {
      console.error('Upload file error:', error)
      throw error
    }
  }

  // Upload multiple files
  async uploadMultipleFiles(files, onProgress) {
    const formData = new FormData()
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file)
    })
    
    try {
      const response = await apiClient.upload(`${API_CONFIG.ENDPOINTS.GENERAL.UPLOADS}/multiple`, formData, onProgress)
      return response
    } catch (error) {
      console.error('Upload multiple files error:', error)
      throw error
    }
  }

  // Get upload status
  async getUploadStatus(uploadId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.GENERAL.UPLOADS}/${uploadId}/status`)
      return response
    } catch (error) {
      console.error('Get upload status error:', error)
      throw error
    }
  }

  // Delete uploaded file
  async deleteUploadedFile(fileId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.GENERAL.UPLOADS}/${fileId}`)
      return response
    } catch (error) {
      console.error('Delete uploaded file error:', error)
      throw error
    }
  }

  // Search globally
  async globalSearch(query, filters = {}) {
    try {
      const response = await apiClient.get('/search', { query, ...filters })
      return response
    } catch (error) {
      console.error('Global search error:', error)
      throw error
    }
  }

  // Get system announcements
  async getAnnouncements() {
    try {
      const response = await apiClient.get('/announcements')
      return response
    } catch (error) {
      console.error('Get announcements error:', error)
      throw error
    }
  }

  // Get help documentation
  async getHelpDocumentation(topic) {
    try {
      const response = await apiClient.get('/help', { topic })
      return response
    } catch (error) {
      console.error('Get help documentation error:', error)
      throw error
    }
  }

  // Submit feedback
  async submitFeedback(feedbackData) {
    try {
      const response = await apiClient.post('/feedback', feedbackData)
      return response
    } catch (error) {
      console.error('Submit feedback error:', error)
      throw error
    }
  }

  // Report issue
  async reportIssue(issueData) {
    try {
      const response = await apiClient.post('/issues', issueData)
      return response
    } catch (error) {
      console.error('Report issue error:', error)
      throw error
    }
  }

  // Contact support
  async contactSupport(messageData) {
    try {
      const response = await apiClient.post('/support', messageData)
      return response
    } catch (error) {
      console.error('Contact support error:', error)
      throw error
    }
  }
}

// Create singleton instance
export const generalService = new GeneralService()
export default generalService
