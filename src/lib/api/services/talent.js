import { apiClient } from '../client.js'
import { API_CONFIG } from '../config.js'

export class TalentService {
  // Get talent dashboard data
  async getDashboard() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.DASHBOARD)
      return response
    } catch (error) {
      console.error('Talent dashboard error:', error)
      throw error
    }
  }

  // Get talent skills
  async getSkills() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.SKILLS)
      return response
    } catch (error) {
      console.error('Get skills error:', error)
      throw error
    }
  }

  // Add/update skills
  async updateSkills(skills) {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.TALENT.SKILLS, { skills })
      return response
    } catch (error) {
      console.error('Update skills error:', error)
      throw error
    }
  }

  // Get portfolio
  async getPortfolio() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.PORTFOLIO)
      return response
    } catch (error) {
      console.error('Get portfolio error:', error)
      throw error
    }
  }

  // Add portfolio item
  async addPortfolioItem(portfolioData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.TALENT.PORTFOLIO, portfolioData)
      return response
    } catch (error) {
      console.error('Add portfolio item error:', error)
      throw error
    }
  }

  // Update portfolio item
  async updatePortfolioItem(itemId, portfolioData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.TALENT.PORTFOLIO}/${itemId}`, portfolioData)
      return response
    } catch (error) {
      console.error('Update portfolio item error:', error)
      throw error
    }
  }

  // Delete portfolio item
  async deletePortfolioItem(itemId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.TALENT.PORTFOLIO}/${itemId}`)
      return response
    } catch (error) {
      console.error('Delete portfolio item error:', error)
      throw error
    }
  }

  // Upload portfolio media
  async uploadPortfolioMedia(file, onProgress) {
    const formData = new FormData()
    formData.append('file', file)
    
    try {
      const response = await apiClient.upload('/talent/portfolio/upload', formData, onProgress)
      return response
    } catch (error) {
      console.error('Upload portfolio media error:', error)
      throw error
    }
  }

  // Get job applications
  async getApplications() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.APPLICATIONS)
      return response
    } catch (error) {
      console.error('Get applications error:', error)
      throw error
    }
  }

  // Apply for job
  async applyForJob(jobId, applicationData) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.TALENT.APPLICATIONS}/${jobId}`, applicationData)
      return response
    } catch (error) {
      console.error('Apply for job error:', error)
      throw error
    }
  }

  // Get available jobs
  async getJobs(filters = {}) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.JOBS, filters)
      return response
    } catch (error) {
      console.error('Get jobs error:', error)
      throw error
    }
  }

  // Save job
  async saveJob(jobId) {
    try {
      const response = await apiClient.post(`/talent/jobs/${jobId}/save`)
      return response
    } catch (error) {
      console.error('Save job error:', error)
      throw error
    }
  }

  // Unsave job
  async unsaveJob(jobId) {
    try {
      const response = await apiClient.delete(`/talent/jobs/${jobId}/save`)
      return response
    } catch (error) {
      console.error('Unsave job error:', error)
      throw error
    }
  }

  // Get saved jobs
  async getSavedJobs() {
    try {
      const response = await apiClient.get('/talent/jobs/saved')
      return response
    } catch (error) {
      console.error('Get saved jobs error:', error)
      throw error
    }
  }

  // Get job recommendations
  async getJobRecommendations() {
    try {
      const response = await apiClient.get('/talent/jobs/recommendations')
      return response
    } catch (error) {
      console.error('Get job recommendations error:', error)
      throw error
    }
  }

  // Get reviews
  async getReviews() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.REVIEWS)
      return response
    } catch (error) {
      console.error('Get reviews error:', error)
      throw error
    }
  }

  // Add review
  async addReview(reviewData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.TALENT.REVIEWS, reviewData)
      return response
    } catch (error) {
      console.error('Add review error:', error)
      throw error
    }
  }

  // Get messages
  async getMessages() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.MESSAGES)
      return response
    } catch (error) {
      console.error('Get messages error:', error)
      throw error
    }
  }

  // Send message
  async sendMessage(messageData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.TALENT.MESSAGES, messageData)
      return response
    } catch (error) {
      console.error('Send message error:', error)
      throw error
    }
  }

  // Get notifications
  async getNotifications() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.NOTIFICATIONS)
      return response
    } catch (error) {
      console.error('Get notifications error:', error)
      throw error
    }
  }

  // Mark notification as read
  async markNotificationRead(notificationId) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.TALENT.NOTIFICATIONS}/${notificationId}/read`)
      return response
    } catch (error) {
      console.error('Mark notification read error:', error)
      throw error
    }
  }

  // Get recommendations
  async getRecommendations() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.RECOMMENDATIONS)
      return response
    } catch (error) {
      console.error('Get recommendations error:', error)
      throw error
    }
  }

  // Get analytics data
  async getAnalytics() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.ANALYTICS)
      return response
    } catch (error) {
      console.error('Get analytics error:', error)
      throw error
    }
  }

  // Update availability status
  async updateAvailability(availability) {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.TALENT.AVAILABILITY, { availability })
      return response
    } catch (error) {
      console.error('Update availability error:', error)
      throw error
    }
  }

  // Get profile views
  async getProfileViews() {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.TALENT.ANALYTICS}/profile-views`)
      return response
    } catch (error) {
      console.error('Get profile views error:', error)
      throw error
    }
  }

  // Get earnings data
  async getEarnings() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.TALENT.EARNINGS)
      return response
    } catch (error) {
      console.error('Get earnings error:', error)
      throw error
    }
  }

  // Withdraw earnings
  async withdrawEarnings(amount) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.TALENT.EARNINGS}/withdraw`, { amount })
      return response
    } catch (error) {
      console.error('Withdraw earnings error:', error)
      throw error
    }
  }

  // Get earnings history
  async getEarningsHistory() {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.TALENT.EARNINGS}/history`)
      return response
    } catch (error) {
      console.error('Get earnings history error:', error)
      throw error
    }
  }

  // Update profile visibility
  async updateProfileVisibility(visibility) {
    try {
      const response = await apiClient.put('/talent/profile/visibility', { visibility })
      return response
    } catch (error) {
      console.error('Update profile visibility error:', error)
      throw error
    }
  }

  // Get skill recommendations
  async getSkillRecommendations() {
    try {
      const response = await apiClient.get('/talent/skills/recommendations')
      return response
    } catch (error) {
      console.error('Get skill recommendations error:', error)
      throw error
    }
  }

  // Verify skill
  async verifySkill(skillId) {
    try {
      const response = await apiClient.post(`/talent/skills/${skillId}/verify`)
      return response
    } catch (error) {
      console.error('Verify skill error:', error)
      throw error
    }
  }
}

// Create singleton instance
export const talentService = new TalentService()
export default talentService
