import { apiClient } from './client.js'
import { API_CONFIG } from './config.js'

export class AuthService {
  // Login for different user types
  async login(credentials, userType = 'talent') {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, {
        ...credentials,
        userType
      })
      
      if (response.accessToken && response.refreshToken) {
        apiClient.setTokens(response.accessToken, response.refreshToken)
        
        // Store user info
        localStorage.setItem('user', JSON.stringify(response.user))
        localStorage.setItem('userType', userType)
      }
      
      return response
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  // Register new user
  async register(userData, userType = 'talent') {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.REGISTER, {
        ...userData,
        userType
      })
      
      return response
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  // Logout user
  async logout() {
    try {
      await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Always clear local tokens and user data
      apiClient.clearTokens()
      localStorage.removeItem('user')
      localStorage.removeItem('userType')
    }
  }

  // Get current user
  getCurrentUser() {
    try {
      const user = localStorage.getItem('user')
      const userType = localStorage.getItem('userType')
      
      if (user && userType) {
        return {
          user: JSON.parse(user),
          userType
        }
      }
      
      return null
    } catch (error) {
      console.error('Error getting current user:', error)
      return null
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    const accessToken = apiClient.getAccessToken()
    const currentUser = this.getCurrentUser()
    
    return !!(accessToken && currentUser)
  }

  // Update user profile
  async updateProfile(profileData) {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.USERS.UPDATE_PROFILE, profileData)
      
      // Update stored user info
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user))
      }
      
      return response
    } catch (error) {
      console.error('Profile update error:', error)
      throw error
    }
  }

  // Forgot password
  async forgotPassword(email) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.FORGOT_PASSWORD, { email })
      return response
    } catch (error) {
      console.error('Forgot password error:', error)
      throw error
    }
  }

  // Reset password
  async resetPassword(token, newPassword) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.RESET_PASSWORD, {
        token,
        newPassword
      })
      return response
    } catch (error) {
      console.error('Reset password error:', error)
      throw error
    }
  }

  // Verify email
  async verifyEmail(token) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.VERIFY_EMAIL, { token })
      return response
    } catch (error) {
      console.error('Email verification error:', error)
      throw error
    }
  }

  // Resend verification email
  async resendVerification(email) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.RESEND_VERIFICATION, { email })
      return response
    } catch (error) {
      console.error('Resend verification error:', error)
      throw error
    }
  }

  // Change password
  async changePassword(currentPassword, newPassword) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.CHANGE_PASSWORD, {
        currentPassword,
        newPassword
      })
      return response
    } catch (error) {
      console.error('Change password error:', error)
      throw error
    }
  }

  // Delete account
  async deleteAccount(password) {
    try {
      const response = await apiClient.delete(API_CONFIG.ENDPOINTS.USERS.DELETE_ACCOUNT, {
        body: JSON.stringify({ password })
      })
      
      // Clear all local data
      await this.logout()
      
      return response
    } catch (error) {
      console.error('Account deletion error:', error)
      throw error
    }
  }

  // Update user settings
  async updateSettings(settings) {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.USERS.SETTINGS, settings)
      return response
    } catch (error) {
      console.error('Update settings error:', error)
      throw error
    }
  }

  // Get user settings
  async getSettings() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.USERS.SETTINGS)
      return response
    } catch (error) {
      console.error('Get settings error:', error)
      throw error
    }
  }

  // Get user notifications
  async getUserNotifications() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.USERS.NOTIFICATIONS)
      return response
    } catch (error) {
      console.error('Get user notifications error:', error)
      throw error
    }
  }

  // Mark notification as read
  async markUserNotificationRead(notificationId) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.USERS.NOTIFICATIONS}/${notificationId}/read`)
      return response
    } catch (error) {
      console.error('Mark notification read error:', error)
      throw error
    }
  }

  // Get user activity
  async getUserActivity() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.USERS.ACTIVITY)
      return response
    } catch (error) {
      console.error('Get user activity error:', error)
      throw error
    }
  }

  // Search users
  async searchUsers(query) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.USERS.SEARCH, { query })
      return response
    } catch (error) {
      console.error('Search users error:', error)
      throw error
    }
  }

  // Enable two-factor authentication
  async enableTwoFactor() {
    try {
      const response = await apiClient.post('/auth/2fa/enable')
      return response
    } catch (error) {
      console.error('Enable 2FA error:', error)
      throw error
    }
  }

  // Verify two-factor authentication
  async verifyTwoFactor(code) {
    try {
      const response = await apiClient.post('/auth/2fa/verify', { code })
      return response
    } catch (error) {
      console.error('Verify 2FA error:', error)
      throw error
    }
  }

  // Disable two-factor authentication
  async disableTwoFactor(code) {
    try {
      const response = await apiClient.post('/auth/2fa/disable', { code })
      return response
    } catch (error) {
      console.error('Disable 2FA error:', error)
      throw error
    }
  }

  // Refresh user session
  async refreshSession() {
    try {
      const success = await apiClient.refreshToken()
      return success
    } catch (error) {
      console.error('Session refresh error:', error)
      throw error
    }
  }

  // Check if session is valid
  async isSessionValid() {
    try {
      const response = await apiClient.get('/auth/validate')
      return response.valid
    } catch (error) {
      console.error('Session validation error:', error)
      return false
    }
  }
}

// Create singleton instance
export const authService = new AuthService()
export default authService
