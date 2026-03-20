import { apiClient } from '../client.js'
import { API_CONFIG } from '../config.js'

export class AdminService {
  // Get admin dashboard
  async getDashboard() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.ADMIN.DASHBOARD)
      return response
    } catch (error) {
      console.error('Admin dashboard error:', error)
      throw error
    }
  }

  // Get all users
  async getUsers(filters = {}) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.ADMIN.USERS, filters)
      return response
    } catch (error) {
      console.error('Get users error:', error)
      throw error
    }
  }

  // Get user details
  async getUser(userId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.ADMIN.USERS}/${userId}`)
      return response
    } catch (error) {
      console.error('Get user details error:', error)
      throw error
    }
  }

  // Update user
  async updateUser(userId, userData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.ADMIN.USERS}/${userId}`, userData)
      return response
    } catch (error) {
      console.error('Update user error:', error)
      throw error
    }
  }

  // Delete user
  async deleteUser(userId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.ADMIN.USERS}/${userId}`)
      return response
    } catch (error) {
      console.error('Delete user error:', error)
      throw error
    }
  }

  // Suspend user
  async suspendUser(userId, reason) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.ADMIN.USERS}/${userId}/suspend`, { reason })
      return response
    } catch (error) {
      console.error('Suspend user error:', error)
      throw error
    }
  }

  // Unsuspend user
  async unsuspendUser(userId) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.ADMIN.USERS}/${userId}/unsuspend`)
      return response
    } catch (error) {
      console.error('Unsuspend user error:', error)
      throw error
    }
  }

  // Get system statistics
  async getSystemStats() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.ADMIN.SYSTEM)
      return response
    } catch (error) {
      console.error('Get system stats error:', error)
      throw error
    }
  }

  // Get system logs
  async getSystemLogs(filters = {}) {
    try {
      const response = await apiClient.get('/admin/system/logs', filters)
      return response
    } catch (error) {
      console.error('Get system logs error:', error)
      throw error
    }
  }

  // Get reports
  async getReports(filters = {}) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.ADMIN.REPORTS, filters)
      return response
    } catch (error) {
      console.error('Get reports error:', error)
      throw error
    }
  }

  // Get report details
  async getReport(reportId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.ADMIN.REPORTS}/${reportId}`)
      return response
    } catch (error) {
      console.error('Get report details error:', error)
      throw error
    }
  }

  // Resolve report
  async resolveReport(reportId, resolution) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.ADMIN.REPORTS}/${reportId}/resolve`, { resolution })
      return response
    } catch (error) {
      console.error('Resolve report error:', error)
      throw error
    }
  }

  // Get all jobs
  async getJobs(filters = {}) {
    try {
      const response = await apiClient.get('/admin/jobs', filters)
      return response
    } catch (error) {
      console.error('Get jobs error:', error)
      throw error
    }
  }

  // Approve job
  async approveJob(jobId) {
    try {
      const response = await apiClient.post(`/admin/jobs/${jobId}/approve`)
      return response
    } catch (error) {
      console.error('Approve job error:', error)
      throw error
    }
  }

  // Reject job
  async rejectJob(jobId, reason) {
    try {
      const response = await apiClient.post(`/admin/jobs/${jobId}/reject`, { reason })
      return response
    } catch (error) {
      console.error('Reject job error:', error)
      throw error
    }
  }

  // Get all applications
  async getApplications(filters = {}) {
    try {
      const response = await apiClient.get('/admin/applications', filters)
      return response
    } catch (error) {
      console.error('Get applications error:', error)
      throw error
    }
  }

  // Get financial data
  async getFinancialData(period = 'monthly') {
    try {
      const response = await apiClient.get('/admin/financial', { period })
      return response
    } catch (error) {
      console.error('Get financial data error:', error)
      throw error
    }
  }

  // Get analytics
  async getAnalytics() {
    try {
      const response = await apiClient.get('/admin/analytics')
      return response
    } catch (error) {
      console.error('Get analytics error:', error)
      throw error
    }
  }

  // Send system notification
  async sendNotification(notificationData) {
    try {
      const response = await apiClient.post('/admin/notifications', notificationData)
      return response
    } catch (error) {
      console.error('Send notification error:', error)
      throw error
    }
  }

  // Get system settings
  async getSystemSettings() {
    try {
      const response = await apiClient.get('/admin/settings')
      return response
    } catch (error) {
      console.error('Get system settings error:', error)
      throw error
    }
  }

  // Update system settings
  async updateSystemSettings(settings) {
    try {
      const response = await apiClient.put('/admin/settings', settings)
      return response
    } catch (error) {
      console.error('Update system settings error:', error)
      throw error
    }
  }

  // Export data
  async exportData(dataType, format = 'csv') {
    try {
      const response = await apiClient.get('/admin/export', { dataType, format })
      return response
    } catch (error) {
      console.error('Export data error:', error)
      throw error
    }
  }

  // Get audit logs
  async getAuditLogs(filters = {}) {
    try {
      const response = await apiClient.get('/admin/audit', filters)
      return response
    } catch (error) {
      console.error('Get audit logs error:', error)
      throw error
    }
  }

  // Backup system
  async backupSystem() {
    try {
      const response = await apiClient.post('/admin/system/backup')
      return response
    } catch (error) {
      console.error('Backup system error:', error)
      throw error
    }
  }

  // Get backup history
  async getBackupHistory() {
    try {
      const response = await apiClient.get('/admin/system/backups')
      return response
    } catch (error) {
      console.error('Get backup history error:', error)
      throw error
    }
  }

  // Restore backup
  async restoreBackup(backupId) {
    try {
      const response = await apiClient.post(`/admin/system/backups/${backupId}/restore`)
      return response
    } catch (error) {
      console.error('Restore backup error:', error)
      throw error
    }
  }
}

// Create singleton instance
export const adminService = new AdminService()
export default adminService
