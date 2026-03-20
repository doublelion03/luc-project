import { useState, useEffect, useContext, createContext } from 'react'
import { authService } from '../lib/api/auth.js'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication status on mount
    const initAuth = () => {
      try {
        const currentUser = authService.getCurrentUser()
        if (currentUser) {
          setUser(currentUser.user)
          setUserType(currentUser.userType)
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
      } finally {
        setLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (credentials, userType) => {
    setLoading(true)
    try {
      const response = await authService.login(credentials, userType)
      setUser(response.user)
      setUserType(userType)
      setIsAuthenticated(true)
      return response
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData, userType) => {
    setLoading(true)
    try {
      const response = await authService.register(userData, userType)
      return response
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await authService.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setUser(null)
      setUserType(null)
      setIsAuthenticated(false)
      setLoading(false)
    }
  }

  const updateProfile = async (profileData) => {
    setLoading(true)
    try {
      const response = await authService.updateProfile(profileData)
      setUser(response.user)
      return response
    } catch (error) {
      console.error('Profile update error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const forgotPassword = async (email) => {
    try {
      const response = await authService.forgotPassword(email)
      return response
    } catch (error) {
      console.error('Forgot password error:', error)
      throw error
    }
  }

  const resetPassword = async (token, newPassword) => {
    try {
      const response = await authService.resetPassword(token, newPassword)
      return response
    } catch (error) {
      console.error('Reset password error:', error)
      throw error
    }
  }

  const verifyEmail = async (token) => {
    try {
      const response = await authService.verifyEmail(token)
      return response
    } catch (error) {
      console.error('Email verification error:', error)
      throw error
    }
  }

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const response = await authService.changePassword(currentPassword, newPassword)
      return response
    } catch (error) {
      console.error('Change password error:', error)
      throw error
    }
  }

  const deleteAccount = async (password) => {
    setLoading(true)
    try {
      const response = await authService.deleteAccount(password)
      return response
    } catch (error) {
      console.error('Account deletion error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    userType,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    forgotPassword,
    resetPassword,
    verifyEmail,
    changePassword,
    deleteAccount
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
