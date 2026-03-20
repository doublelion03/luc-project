export const API_CONFIG = {
  BASE_URL: 'https://luc-m8t9.onrender.com',
  VERSION: '/api/v1',
  ENDPOINTS: {
    // Authentication endpoints
    AUTH: {
      LOGIN: '/api/v1/auth/login',
      REGISTER: '/api/v1/auth/register',
      LOGOUT: '/api/v1/auth/logout',
      REFRESH: '/api/v1/auth/refresh',
      VERIFY_EMAIL: '/api/v1/auth/verify-email',
      FORGOT_PASSWORD: '/api/v1/auth/forgot-password',
      RESET_PASSWORD: '/api/v1/auth/reset-password',
      CHANGE_PASSWORD: '/api/v1/auth/change-password',
      RESEND_VERIFICATION: '/api/v1/auth/resend-verification'
    },
    
    // User endpoints
    USERS: {
      PROFILE: '/api/v1/users/profile',
      UPDATE_PROFILE: '/api/v1/users/profile',
      DELETE_ACCOUNT: '/api/v1/users/delete',
      SEARCH: '/api/v1/users/search',
      SETTINGS: '/api/v1/users/settings',
      NOTIFICATIONS: '/api/v1/users/notifications',
      ACTIVITY: '/api/v1/users/activity'
    },
    
    // Talent endpoints
    TALENT: {
      DASHBOARD: '/api/v1/talent/dashboard',
      SKILLS: '/api/v1/talent/skills',
      PORTFOLIO: '/api/v1/talent/portfolio',
      APPLICATIONS: '/api/v1/talent/applications',
      JOBS: '/api/v1/talent/jobs',
      AVAILABILITY: '/api/v1/talent/availability',
      ANALYTICS: '/api/v1/talent/analytics',
      EARNINGS: '/api/v1/talent/earnings',
      REVIEWS: '/api/v1/talent/reviews',
      MESSAGES: '/api/v1/talent/messages',
      NOTIFICATIONS: '/api/v1/talent/notifications',
      RECOMMENDATIONS: '/api/v1/talent/recommendations'
    },
    
    // University endpoints
    UNIVERSITY: {
      DASHBOARD: '/api/v1/university/dashboard',
      STUDENTS: '/api/v1/university/students',
      PROGRAMS: '/api/v1/university/programs',
      EVENTS: '/api/v1/university/events',
      ANALYTICS: '/api/v1/university/analytics',
      PROFILE: '/api/v1/university/profile',
      NOTIFICATIONS: '/api/v1/university/notifications',
      REPORTS: '/api/v1/university/reports',
      PARTNERSHIPS: '/api/v1/university/partnerships'
    },
    
    // Client endpoints
    CLIENT: {
      DASHBOARD: '/api/v1/client/dashboard',
      PROJECTS: '/api/v1/client/projects',
      POSTINGS: '/api/v1/client/postings',
      APPLICATIONS: '/api/v1/client/applications',
      TALENT_SEARCH: '/api/v1/client/talent/search',
      ANALYTICS: '/api/v1/client/analytics',
      BILLING: '/api/v1/client/billing',
      INVOICES: '/api/v1/client/invoices',
      TEAM: '/api/v1/client/team',
      NOTIFICATIONS: '/api/v1/client/notifications',
      RECOMMENDATIONS: '/api/v1/client/recommendations'
    },
    
    // Super Admin endpoints
    ADMIN: {
      DASHBOARD: '/api/v1/admin/dashboard',
      USERS: '/api/v1/admin/users',
      SYSTEM: '/api/v1/admin/system',
      REPORTS: '/api/v1/admin/reports',
      JOBS: '/api/v1/admin/jobs',
      APPLICATIONS: '/api/v1/admin/applications',
      FINANCIAL: '/api/v1/admin/financial',
      ANALYTICS: '/api/v1/admin/analytics',
      NOTIFICATIONS: '/api/v1/admin/notifications',
      SETTINGS: '/api/v1/admin/settings',
      AUDIT: '/api/v1/admin/audit',
      BACKUPS: '/api/v1/admin/backups',
      EXPORT: '/api/v1/admin/export'
    },
    
    // General endpoints
    GENERAL: {
      HEALTH: '/api/v1/health',
      VERSION: '/api/v1/version',
      CATEGORIES: '/api/v1/categories',
      SKILLS: '/api/v1/skills',
      LOCATIONS: '/api/v1/locations',
  UPLOADS: '/api/v1/uploads'
    }
  }
}

export const API_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading'
}
