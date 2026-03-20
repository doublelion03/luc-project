# LUC API Integration

This document outlines the API integration for the LUC platform with the backend API at `https://luc-m8t9.onrender.com`.

##  API Structure

### Core Files
- `src/lib/api/config.js` - API configuration and endpoint definitions
- `src/lib/api/client.js` - HTTP client with authentication and token management
- `src/lib/api/auth.js` - Authentication service
- `src/lib/api/index.js` - Main API exports

### Service Modules
- `src/lib/api/services/talent.js` - Talent-specific API operations
- `src/lib/api/services/university.js` - University-specific API operations
- `src/lib/api/services/client.js` - Client-specific API operations
- `src/lib/api/services/admin.js` - Admin-specific API operations
- `src/lib/api/services/index.js` - Service exports

### React Hooks
- `src/hooks/useAuth.js` - Authentication context and hooks
- `src/hooks/useApi.js` - Generic API hooks (useApi, useMutation, usePagination, etc.)
- `src/hooks/index.js` - Hook exports

##  Usage Examples

### Authentication
```jsx
import { useAuth } from '@/hooks'

function LoginComponent() {
  const { login, loading, error } = useAuth()
  
  const handleLogin = async (credentials) => {
    try {
      await login(credentials, 'talent')
      // Navigate to dashboard
    } catch (error) {
      // Handle error
    }
  }
}
```

### API Calls
```jsx
import { useApi, useMutation } from '@/hooks'
import { talentService } from '@/lib/api'

function TalentDashboard() {
  const { data: dashboard, loading, error } = useApi(() => talentService.getDashboard())
  
  const { mutate: updateSkills, loading: updating } = useMutation(talentService.updateSkills)
  
  const handleUpdateSkills = async (skills) => {
    await updateSkills(skills)
  }
}
```

### Direct API Usage
```jsx
import { apiClient, authService } from '@/lib/api'

// Direct API call
const userData = await apiClient.get('/users/profile')

// Auth service
await authService.login({ email, password }, 'talent')
```

##  Configuration

### Base URL
The API base URL is configured in `src/lib/api/config.js`:
```javascript
export const API_CONFIG = {
  BASE_URL: 'https://luc-m8t9.onrender.com',
  // ...
}
```

### Authentication
- JWT tokens are stored in localStorage
- Automatic token refresh on 401 errors
- Token management handled by the API client

##  Available Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Token refresh
- `POST /auth/forgot-password` - Forgot password
- `POST /auth/reset-password` - Reset password

### Talent Endpoints
- `GET /talent/dashboard` - Talent dashboard
- `GET /talent/skills` - Get skills
- `PUT /talent/skills` - Update skills
- `GET /talent/portfolio` - Get portfolio
- `POST /talent/portfolio` - Add portfolio item
- `GET /talent/jobs` - Get available jobs
- `POST /talent/applications/{jobId}` - Apply for job

### University Endpoints
- `GET /university/dashboard` - University dashboard
- `GET /university/students` - Get students
- `POST /university/students` - Add student
- `GET /university/programs` - Get programs
- `GET /university/events` - Get events

### Client Endpoints
- `GET /client/dashboard` - Client dashboard
- `GET /client/projects` - Get projects
- `POST /client/projects` - Create project
- `GET /client/postings` - Get job postings
- `POST /client/postings` - Create job posting
- `GET /client/applications` - Get applications

### Admin Endpoints
- `GET /admin/dashboard` - Admin dashboard
- `GET /admin/users` - Get all users
- `GET /admin/system` - System statistics
- `GET /admin/reports` - Get reports

##  Token Management

The API client automatically handles:
- Adding Authorization headers to requests
- Token refresh on 401 errors
- Clearing tokens on logout
- Redirecting to login on session expiry

##  Error Handling

All API calls include built-in error handling:
- Network errors are caught and logged
- API errors are thrown with status and message
- Loading states are managed by hooks
- Error states are available for UI feedback

##  File Uploads

For file uploads, use the dedicated upload method:
```jsx
const uploadPortfolioMedia = async (file, onProgress) => {
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await apiClient.upload('/talent/portfolio/upload', formData, onProgress)
  return response
}
```

##  Security Features

- JWT token authentication
- Automatic token refresh
- Secure token storage
- Request/response interceptors
- CORS support

##  Pagination

Use the `usePagination` hook for paginated data:
```jsx
const {
  data,
  loading,
  error,
  hasMore,
  loadMore,
  refresh
} = usePagination(talentService.getJobs, { limit: 10 })
```

##  Next Steps

1. **Update API Endpoints**: Verify and update the actual API endpoints in `config.js` based on the Swagger documentation
2. **Add Error Boundaries**: Implement error boundaries for better error handling
3. **Add Loading States**: Implement loading skeletons and states
4. **Add Caching**: Implement response caching for better performance
5. **Add Testing**: Write unit tests for API services and hooks

##  Support

For API-related issues:
1. Check the browser console for error messages
2. Verify the API endpoints match the backend documentation
3. Ensure the backend API is running and accessible
4. Check network connectivity and CORS settings
