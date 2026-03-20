// Main API export file
export { apiClient } from './client.js'
export { authService } from './auth.js'
export { API_CONFIG, API_STATUS } from './config.js'

// Export all services
export { 
  talentService, 
  universityService, 
  clientService, 
  adminService,
  generalService
} from './services/index.js'
