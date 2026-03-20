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

  // Update availability status
  async updateAvailability(availability) {
    try {
      const response = await apiClient.put('/talent/availability', { availability })
      return response
    } catch (error) {
      console.error('Update availability error:', error)
      throw error
    }
  }

  // Get profile views
  async getProfileViews() {
    try {
      const response = await apiClient.get('/talent/analytics/profile-views')
      return response
    } catch (error) {
      console.error('Get profile views error:', error)
      throw error
    }
  }

  // Get earnings data
  async getEarnings() {
    try {
      const response = await apiClient.get('/talent/earnings')
      return response
    } catch (error) {
      console.error('Get earnings error:', error)
      throw error
    }
  }
}

// Create singleton instance
export const talentService = new TalentService()
export default talentService
