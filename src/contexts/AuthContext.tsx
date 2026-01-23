"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  id?: string
  name?: string
  email: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  // Load user on mount and listen for storage changes
  useEffect(() => {
    const loadUser = () => {
      if (typeof window !== "undefined") {
        const savedToken = localStorage.getItem("bideshstudy_token")
        const savedUser = localStorage.getItem("bideshstudy_user")
        if (savedToken && savedUser && savedUser !== "undefined" && savedUser !== "null") {
          try {
            const parsedUser = JSON.parse(savedUser)
            if (parsedUser && typeof parsedUser === "object") {
              setToken(savedToken)
              setUser(parsedUser)
            } else {
              setToken(null)
              setUser(null)
            }
          } catch (error) {
            console.error("Error parsing saved user:", error)
            // Clear invalid data
            localStorage.removeItem("bideshstudy_token")
            localStorage.removeItem("bideshstudy_user")
            localStorage.removeItem("bideshstudy_auth")
            setToken(null)
            setUser(null)
          }
        } else {
          setToken(null)
          setUser(null)
        }
      }
    }

    // Load immediately
    loadUser()

    // Listen for storage changes (for cross-tab sync and immediate updates)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "bideshstudy_token" || e.key === "bideshstudy_user" || e.key === "bideshstudy_auth") {
        loadUser()
      }
    }

    // Listen for custom auth events (for same-tab updates)
    const handleAuthEvent = () => {
      loadUser()
    }

    // Listen for localStorage change events (for same-tab updates)
    const handleLocalStorageChange = () => {
      loadUser()
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("authStateChanged", handleAuthEvent)
    window.addEventListener("localStorageChange", handleLocalStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("authStateChanged", handleAuthEvent)
      window.removeEventListener("localStorageChange", handleLocalStorageChange)
    }
  }, [])

  const login = async (email: string, password: string) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (data.success) {
      // Update state first - use functional updates to ensure state is set
      setUser(data.user)
      setToken(data.token)
      if (typeof window !== "undefined") {
        localStorage.setItem("bideshstudy_token", data.token)
        localStorage.setItem("bideshstudy_user", JSON.stringify(data.user))
        localStorage.setItem("bideshstudy_auth", "true")
        // Dispatch multiple events to ensure all components catch it
        window.dispatchEvent(new Event("authStateChanged"))
        window.dispatchEvent(new Event("localStorageChange"))
        setTimeout(() => {
          window.dispatchEvent(new Event("authStateChanged"))
          window.dispatchEvent(new Event("localStorageChange"))
        }, 50)
        setTimeout(() => {
          window.dispatchEvent(new Event("authStateChanged"))
          window.dispatchEvent(new Event("localStorageChange"))
        }, 100)
        setTimeout(() => {
          window.dispatchEvent(new Event("authStateChanged"))
          window.dispatchEvent(new Event("localStorageChange"))
        }, 200)
      }
      // Small delay to ensure state propagates before redirect
      setTimeout(() => {
        router.push("/")
        router.refresh()
      }, 250)
    } else {
      throw new Error(data.message || "Login failed")
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
    const res = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })

    const data = await res.json()

    if (data.success) {
      // Update state first - use functional updates to ensure state is set
      setUser(data.user)
      setToken(data.token)
      if (typeof window !== "undefined") {
        localStorage.setItem("bideshstudy_token", data.token)
        localStorage.setItem("bideshstudy_user", JSON.stringify(data.user))
        localStorage.setItem("bideshstudy_auth", "true")
        // Dispatch multiple events to ensure all components catch it
        window.dispatchEvent(new Event("authStateChanged"))
        window.dispatchEvent(new Event("localStorageChange"))
        setTimeout(() => {
          window.dispatchEvent(new Event("authStateChanged"))
          window.dispatchEvent(new Event("localStorageChange"))
        }, 50)
        setTimeout(() => {
          window.dispatchEvent(new Event("authStateChanged"))
          window.dispatchEvent(new Event("localStorageChange"))
        }, 100)
        setTimeout(() => {
          window.dispatchEvent(new Event("authStateChanged"))
          window.dispatchEvent(new Event("localStorageChange"))
        }, 200)
      }
      // Small delay to ensure state propagates before redirect
      setTimeout(() => {
        router.push("/")
        router.refresh()
      }, 250)
    } else {
      throw new Error(data.message || "Registration failed")
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("bideshstudy_token")
      localStorage.removeItem("bideshstudy_user")
      localStorage.removeItem("bideshstudy_auth")
      // Dispatch events to notify all components of logout
      window.dispatchEvent(new Event("authStateChanged"))
      window.dispatchEvent(new Event("localStorageChange"))
    }
    router.push("/")
    router.refresh()
  }

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

