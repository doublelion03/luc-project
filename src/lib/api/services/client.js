import { apiClient } from '../client.js'
import { API_CONFIG } from '../config.js'

export class ClientService {
  // Get client dashboard
  async getDashboard() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.CLIENT.DASHBOARD)
      return response
    } catch (error) {
      console.error('Client dashboard error:', error)
      throw error
    }
  }

  // Get projects
  async getProjects(filters = {}) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.CLIENT.PROJECTS, filters)
      return response
    } catch (error) {
      console.error('Get projects error:', error)
      throw error
    }
  }

  // Get project details
  async getProject(projectId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.CLIENT.PROJECTS}/${projectId}`)
      return response
    } catch (error) {
      console.error('Get project details error:', error)
      throw error
    }
  }

  // Create project
  async createProject(projectData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.CLIENT.PROJECTS, projectData)
      return response
    } catch (error) {
      console.error('Create project error:', error)
      throw error
    }
  }

  // Update project
  async updateProject(projectId, projectData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.CLIENT.PROJECTS}/${projectId}`, projectData)
      return response
    } catch (error) {
      console.error('Update project error:', error)
      throw error
    }
  }

  // Delete project
  async deleteProject(projectId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.CLIENT.PROJECTS}/${projectId}`)
      return response
    } catch (error) {
      console.error('Delete project error:', error)
      throw error
    }
  }

  // Get job postings
  async getPostings(filters = {}) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.CLIENT.POSTINGS, filters)
      return response
    } catch (error) {
      console.error('Get postings error:', error)
      throw error
    }
  }

  // Get posting details
  async getPosting(postingId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.CLIENT.POSTINGS}/${postingId}`)
      return response
    } catch (error) {
      console.error('Get posting details error:', error)
      throw error
    }
  }

  // Create job posting
  async createPosting(postingData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.CLIENT.POSTINGS, postingData)
      return response
    } catch (error) {
      console.error('Create posting error:', error)
      throw error
    }
  }

  // Update job posting
  async updatePosting(postingId, postingData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.CLIENT.POSTINGS}/${postingId}`, postingData)
      return response
    } catch (error) {
      console.error('Update posting error:', error)
      throw error
    }
  }

  // Delete job posting
  async deletePosting(postingId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.CLIENT.POSTINGS}/${postingId}`)
      return response
    } catch (error) {
      console.error('Delete posting error:', error)
      throw error
    }
  }

  // Get applications for postings
  async getApplications(filters = {}) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.CLIENT.APPLICATIONS, filters)
      return response
    } catch (error) {
      console.error('Get applications error:', error)
      throw error
    }
  }

  // Get application details
  async getApplication(applicationId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.CLIENT.APPLICATIONS}/${applicationId}`)
      return response
    } catch (error) {
      console.error('Get application details error:', error)
      throw error
    }
  }

  // Accept application
  async acceptApplication(applicationId) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.CLIENT.APPLICATIONS}/${applicationId}/accept`)
      return response
    } catch (error) {
      console.error('Accept application error:', error)
      throw error
    }
  }

  // Reject application
  async rejectApplication(applicationId, reason) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.CLIENT.APPLICATIONS}/${applicationId}/reject`, { reason })
      return response
    } catch (error) {
      console.error('Reject application error:', error)
      throw error
    }
  }

  // Shortlist application
  async shortlistApplication(applicationId) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.CLIENT.APPLICATIONS}/${applicationId}/shortlist`)
      return response
    } catch (error) {
      console.error('Shortlist application error:', error)
      throw error
    }
  }

  // Get talent recommendations
  async getTalentRecommendations(postingId) {
    try {
      const response = await apiClient.get(`/client/postings/${postingId}/recommendations`)
      return response
    } catch (error) {
      console.error('Get talent recommendations error:', error)
      throw error
    }
  }

  // Search talent
  async searchTalent(criteria) {
    try {
      const response = await apiClient.post('/client/talent/search', criteria)
      return response
    } catch (error) {
      console.error('Search talent error:', error)
      throw error
    }
  }

  // Invite talent
  async inviteTalent(talentId, message) {
    try {
      const response = await apiClient.post(`/client/talent/${talentId}/invite`, { message })
      return response
    } catch (error) {
      console.error('Invite talent error:', error)
      throw error
    }
  }

  // Get analytics
  async getAnalytics() {
    try {
      const response = await apiClient.get('/client/analytics')
      return response
    } catch (error) {
      console.error('Get analytics error:', error)
      throw error
    }
  }

  // Get billing information
  async getBilling() {
    try {
      const response = await apiClient.get('/client/billing')
      return response
    } catch (error) {
      console.error('Get billing error:', error)
      throw error
    }
  }

  // Update billing information
  async updateBilling(billingData) {
    try {
      const response = await apiClient.put('/client/billing', billingData)
      return response
    } catch (error) {
      console.error('Update billing error:', error)
      throw error
    }
  }

  // Get invoices
  async getInvoices() {
    try {
      const response = await apiClient.get('/client/invoices')
      return response
    } catch (error) {
      console.error('Get invoices error:', error)
      throw error
    }
  }

  // Get team members
  async getTeamMembers() {
    try {
      const response = await apiClient.get('/client/team')
      return response
    } catch (error) {
      console.error('Get team members error:', error)
      throw error
    }
  }

  // Invite team member
  async inviteTeamMember(email, role) {
    try {
      const response = await apiClient.post('/client/team/invite', { email, role })
      return response
    } catch (error) {
      console.error('Invite team member error:', error)
      throw error
    }
  }

  // Remove team member
  async removeTeamMember(memberId) {
    try {
      const response = await apiClient.delete(`/client/team/${memberId}`)
      return response
    } catch (error) {
      console.error('Remove team member error:', error)
      throw error
    }
  }
}

// Create singleton instance
export const clientService = new ClientService()
export default clientService
