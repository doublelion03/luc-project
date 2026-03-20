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
      const response = await apiClient.get('/university/analytics')
      return response
    } catch (error) {
      console.error('Get analytics error:', error)
      throw error
    }
  }

  // Get student performance
  async getStudentPerformance(studentId) {
    try {
      const response = await apiClient.get(`/university/students/${studentId}/performance`)
      return response
    } catch (error) {
      console.error('Get student performance error:', error)
      throw error
    }
  }

  // Export student data
  async exportStudentData(format = 'csv') {
    try {
      const response = await apiClient.get('/university/students/export', { format })
      return response
    } catch (error) {
      console.error('Export student data error:', error)
      throw error
    }
  }

  // Send notifications
  async sendNotification(notificationData) {
    try {
      const response = await apiClient.post('/university/notifications', notificationData)
      return response
    } catch (error) {
      console.error('Send notification error:', error)
      throw error
    }
  }

  // Get university profile
  async getProfile() {
    try {
      const response = await apiClient.get('/university/profile')
      return response
    } catch (error) {
      console.error('Get university profile error:', error)
      throw error
    }
  }

  // Update university profile
  async updateProfile(profileData) {
    try {
      const response = await apiClient.put('/university/profile', profileData)
      return response
    } catch (error) {
      console.error('Update university profile error:', error)
      throw error
    }
  }
}

// Create singleton instance
export const universityService = new UniversityService()
export default universityService
