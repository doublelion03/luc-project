export const API_CONFIG = {
  BASE_URL: 'https://luc-m8t9.onrender.com',
  ENDPOINTS: {
    // Authentication endpoints
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      REFRESH: '/auth/refresh',
      VERIFY_EMAIL: '/auth/verify-email',
      FORGOT_PASSWORD: '/auth/forgot-password',
      RESET_PASSWORD: '/auth/reset-password'
    },
    
    // User endpoints
    USERS: {
      PROFILE: '/users/profile',
      UPDATE_PROFILE: '/users/profile',
      DELETE_ACCOUNT: '/users/delete'
    },
    
    // Talent endpoints
    TALENT: {
      DASHBOARD: '/talent/dashboard',
      SKILLS: '/talent/skills',
      PORTFOLIO: '/talent/portfolio',
      APPLICATIONS: '/talent/applications',
      JOBS: '/talent/jobs'
    },
    
    // University endpoints
    UNIVERSITY: {
      DASHBOARD: '/university/dashboard',
      STUDENTS: '/university/students',
      PROGRAMS: '/university/programs',
      EVENTS: '/university/events'
    },
    
    // Client endpoints
    CLIENT: {
      DASHBOARD: '/client/dashboard',
      PROJECTS: '/client/projects',
      POSTINGS: '/client/postings',
      APPLICATIONS: '/client/applications'
    },
    
    // Super Admin endpoints
    ADMIN: {
      DASHBOARD: '/admin/dashboard',
      USERS: '/admin/users',
      SYSTEM: '/admin/system',
      REPORTS: '/admin/reports'
    }
  }
}

export const API_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading'
}
