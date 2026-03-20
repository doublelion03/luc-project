import { apiClient } from '../client.js'
import { API_CONFIG } from '../config.js'

export class UniversityService {
  // Get university dashboard
  async getDashboard() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.DASHBOARD)
      return response
    } catch (error) {
      console.error('University dashboard error:', error)
      throw error
    }
  }

  // Get students
  async getStudents(filters = {}) {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.STUDENTS, filters)
      return response
    } catch (error) {
      console.error('Get students error:', error)
      throw error
    }
  }

  // Get student details
  async getStudent(studentId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.UNIVERSITY.STUDENTS}/${studentId}`)
      return response
    } catch (error) {
      console.error('Get student details error:', error)
      throw error
    }
  }

  // Add student
  async addStudent(studentData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.UNIVERSITY.STUDENTS, studentData)
      return response
    } catch (error) {
      console.error('Add student error:', error)
      throw error
    }
  }

  // Update student
  async updateStudent(studentId, studentData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.UNIVERSITY.STUDENTS}/${studentId}`, studentData)
      return response
    } catch (error) {
      console.error('Update student error:', error)
      throw error
    }
  }

  // Delete student
  async deleteStudent(studentId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.UNIVERSITY.STUDENTS}/${studentId}`)
      return response
    } catch (error) {
      console.error('Delete student error:', error)
      throw error
    }
  }

  // Get programs
  async getPrograms() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.PROGRAMS)
      return response
    } catch (error) {
      console.error('Get programs error:', error)
      throw error
    }
  }

  // Add program
  async addProgram(programData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.UNIVERSITY.PROGRAMS, programData)
      return response
    } catch (error) {
      console.error('Add program error:', error)
      throw error
    }
  }

  // Update program
  async updateProgram(programId, programData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.UNIVERSITY.PROGRAMS}/${programId}`, programData)
      return response
    } catch (error) {
      console.error('Update program error:', error)
      throw error
    }
  }

  // Delete program
  async deleteProgram(programId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.UNIVERSITY.PROGRAMS}/${programId}`)
      return response
    } catch (error) {
      console.error('Delete program error:', error)
      throw error
    }
  }

  // Get events
  async getEvents() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.EVENTS)
      return response
    } catch (error) {
      console.error('Get events error:', error)
      throw error
    }
  }

  // Add event
  async addEvent(eventData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.UNIVERSITY.EVENTS, eventData)
      return response
    } catch (error) {
      console.error('Add event error:', error)
      throw error
    }
  }

  // Update event
  async updateEvent(eventId, eventData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.UNIVERSITY.EVENTS}/${eventId}`, eventData)
      return response
    } catch (error) {
      console.error('Update event error:', error)
      throw error
    }
  }

  // Delete event
  async deleteEvent(eventId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.UNIVERSITY.EVENTS}/${eventId}`)
      return response
    } catch (error) {
      console.error('Delete event error:', error)
      throw error
    }
  }

  // Get analytics
  async getAnalytics() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.ANALYTICS)
      return response
    } catch (error) {
      console.error('Get analytics error:', error)
      throw error
    }
  }

  // Get university profile
  async getProfile() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.PROFILE)
      return response
    } catch (error) {
      console.error('Get university profile error:', error)
      throw error
    }
  }

  // Update university profile
  async updateProfile(profileData) {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.UNIVERSITY.PROFILE, profileData)
      return response
    } catch (error) {
      console.error('Update university profile error:', error)
      throw error
    }
  }

  // Get notifications
  async getNotifications() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.NOTIFICATIONS)
      return response
    } catch (error) {
      console.error('Get notifications error:', error)
      throw error
    }
  }

  // Send notification
  async sendNotification(notificationData) {
    try {
      const response = await apiClient.post('/university/notifications/send', notificationData)
      return response
    } catch (error) {
      console.error('Send notification error:', error)
      throw error
    }
  }

  // Get reports
  async getReports() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.REPORTS)
      return response
    } catch (error) {
      console.error('Get reports error:', error)
      throw error
    }
  }

  // Generate report
  async generateReport(reportData) {
    try {
      const response = await apiClient.post(`${API_CONFIG.ENDPOINTS.UNIVERSITY.REPORTS}/generate`, reportData)
      return response
    } catch (error) {
      console.error('Generate report error:', error)
      throw error
    }
  }

  // Get partnerships
  async getPartnerships() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.UNIVERSITY.PARTNERSHIPS)
      return response
    } catch (error) {
      console.error('Get partnerships error:', error)
      throw error
    }
  }

  // Add partnership
  async addPartnership(partnershipData) {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.UNIVERSITY.PARTNERSHIPS, partnershipData)
      return response
    } catch (error) {
      console.error('Add partnership error:', error)
      throw error
    }
  }

  // Update partnership
  async updatePartnership(partnershipId, partnershipData) {
    try {
      const response = await apiClient.put(`${API_CONFIG.ENDPOINTS.UNIVERSITY.PARTNERSHIPS}/${partnershipId}`, partnershipData)
      return response
    } catch (error) {
      console.error('Update partnership error:', error)
      throw error
    }
  }

  // Delete partnership
  async deletePartnership(partnershipId) {
    try {
      const response = await apiClient.delete(`${API_CONFIG.ENDPOINTS.UNIVERSITY.PARTNERSHIPS}/${partnershipId}`)
      return response
    } catch (error) {
      console.error('Delete partnership error:', error)
      throw error
    }
  }

  // Get student metrics
  async getStudentMetrics() {
    try {
      const response = await apiClient.get('/university/students/metrics')
      return response
    } catch (error) {
      console.error('Get student metrics error:', error)
      throw error
    }
  }

  // Get program statistics
  async getProgramStatistics() {
    try {
      const response = await apiClient.get('/university/programs/statistics')
      return response
    } catch (error) {
      console.error('Get program statistics error:', error)
      throw error
    }
  }

  // Get event attendance
  async getEventAttendance(eventId) {
    try {
      const response = await apiClient.get(`/university/events/${eventId}/attendance`)
      return response
    } catch (error) {
      console.error('Get event attendance error:', error)
      throw error
    }
  }

  // Register student for event
  async registerStudentForEvent(eventId, studentId) {
    try {
      const response = await apiClient.post(`/university/events/${eventId}/register`, { studentId })
      return response
    } catch (error) {
      console.error('Register student for event error:', error)
      throw error
    }
  }

  // Get student performance
  async getStudentPerformance(studentId) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.UNIVERSITY.STUDENTS}/${studentId}/performance`)
      return response
    } catch (error) {
      console.error('Get student performance error:', error)
      throw error
    }
  }

  // Export student data
  async exportStudentData(format = 'csv') {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.UNIVERSITY.STUDENTS}/export`, { format })
      return response
    } catch (error) {
      console.error('Export student data error:', error)
      throw error
    }
  }

  // Send notifications (legacy method)
  async sendNotificationLegacy(notificationData) {
    try {
      const response = await apiClient.post('/university/notifications', notificationData)
      return response
    } catch (error) {
      console.error('Send notification error:', error)
      throw error
    }
  }

}

// Create singleton instance
export const universityService = new UniversityService()
export default universityService
