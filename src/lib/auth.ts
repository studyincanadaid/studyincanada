// Authentication utility with backend API integration

const AUTH_KEY = "bideshstudy_auth"
const AUTH_USER_KEY = "bideshstudy_user"
const AUTH_TOKEN_KEY = "bideshstudy_token"
// Use Next.js API routes as proxy to avoid CORS issues
const API_BASE_URL = typeof window !== "undefined" ? window.location.origin : ""

export interface User {
  email: string
  name?: string
  id?: string
}

export interface LoginResponse {
  success: boolean
  message?: string
  user?: User
  token?: string
}

export interface RegisterResponse {
  success: boolean
  message?: string
  user?: User
  token?: string
}

export const auth = {
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === "undefined") return false
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    const authFlag = localStorage.getItem(AUTH_KEY)
    // Check both token and auth flag for reliability
    return !!(token && authFlag === "true")
  },

  // Get current user
  getUser: (): User | null => {
    if (typeof window === "undefined") return null
    const userData = localStorage.getItem(AUTH_USER_KEY)
    if (!userData) return null
    try {
      return JSON.parse(userData)
    } catch {
      return null
    }
  },

  // Get auth token
  getToken: (): string | null => {
    if (typeof window === "undefined") return null
    return localStorage.getItem(AUTH_TOKEN_KEY)
  },

  // Login user via API
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      // Check if response is ok before trying to parse JSON
      let data
      try {
        data = await response.json()
      } catch (parseError) {
        console.error("Failed to parse response:", parseError)
        return {
          success: false,
          message: "Invalid response from server. Please try again.",
        }
      }

      if (!response.ok) {
        // Check for specific error messages and provide user-friendly alternatives
        let errorMessage = data.message || `Login failed (${response.status}). Please check your credentials.`
        
        // Provide more user-friendly messages for common backend errors
        if (errorMessage.toLowerCase().includes("database")) {
          errorMessage = "The service is temporarily unavailable due to a database issue. Please try again in a few moments."
        }
        
        return {
          success: false,
          message: errorMessage,
        }
      }

      if (data.success && data.user) {
        // Store authentication data
        if (typeof window !== "undefined") {
          localStorage.setItem(AUTH_KEY, "true")
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user))
          if (data.token) {
            localStorage.setItem(AUTH_TOKEN_KEY, data.token)
          }
        }
      }

      return {
        success: data.success || false,
        message: data.message,
        user: data.user,
        token: data.token,
      }
    } catch (error) {
      console.error("Login error:", error)
      
      // Provide more specific error messages
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        return {
          success: false,
          message: "Unable to connect to server. Please check your internet connection or try again later.",
        }
      }
      
      return {
        success: false,
        message: error instanceof Error ? error.message : "Network error. Please try again later.",
      }
    }
  },

  // Register user via API
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<RegisterResponse> => {
    try {
      const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
      const response = await fetch(`${baseUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })

      // Check if response is ok before trying to parse JSON
      let data
      try {
        data = await response.json()
      } catch (parseError) {
        console.error("Failed to parse response:", parseError)
        return {
          success: false,
          message: "Invalid response from server. Please try again.",
        }
      }

      if (!response.ok) {
        // Check for specific error messages and provide user-friendly alternatives
        let errorMessage = data.message || `Registration failed (${response.status}). Please try again.`
        
        // Provide more user-friendly messages for common backend errors
        if (errorMessage.toLowerCase().includes("database")) {
          errorMessage = "The service is temporarily unavailable due to a database issue. Please try again in a few moments."
        }
        
        return {
          success: false,
          message: errorMessage,
        }
      }

      if (data.success && data.user) {
        // Store authentication data
        if (typeof window !== "undefined") {
          localStorage.setItem(AUTH_KEY, "true")
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user))
          if (data.token) {
            localStorage.setItem(AUTH_TOKEN_KEY, data.token)
          }
        }
      }

      return {
        success: data.success || false,
        message: data.message,
        user: data.user,
        token: data.token,
      }
    } catch (error) {
      console.error("Registration error:", error)
      
      // Provide more specific error messages
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        return {
          success: false,
          message: "Unable to connect to server. Please check your internet connection or try again later.",
        }
      }
      
      return {
        success: false,
        message: error instanceof Error ? error.message : "Network error. Please try again later.",
      }
    }
  },

  // Get current user from API
  getMe: async (): Promise<User | null> => {
    try {
      const token = auth.getToken()
      if (!token) return null

      const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
      const response = await fetch(`${baseUrl}/api/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        // Token might be invalid, clear auth
        auth.logout()
        return null
      }

      const data = await response.json()
      if (data.success && data.user) {
        // Update stored user data
        if (typeof window !== "undefined") {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user))
        }
        return data.user
      }

      return null
    } catch (error) {
      console.error("Get me error:", error)
      return null
    }
  },

  // Logout user
  logout: (): void => {
    if (typeof window === "undefined") return
    localStorage.removeItem(AUTH_KEY)
    localStorage.removeItem(AUTH_USER_KEY)
    localStorage.removeItem(AUTH_TOKEN_KEY)
  },
}

