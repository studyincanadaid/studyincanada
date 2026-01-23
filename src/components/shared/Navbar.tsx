"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X, Facebook, Youtube, Instagram, Mail, Globe, BookOpen, Calendar, Settings, Info, FileText, ChevronDown, ChevronUp, LogIn, User, LogOut } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import imageUniOne from "@/assests/Image/imageUniOne.jpg"
import imageUniTwo from "@/assests/Image/imageUniTwo.jpg"
import imageUniThree from "@/assests/Image/imageUniThree.jpg"
import subjectImageOne from "@/assests/Image/subjectImageOne.jpg"
import worksImageOne from "@/assests/Image/worksImageOne.jpg"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const router = useRouter()
  const { user, token, logout } = useAuth()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(0)
  const destinationImages = [imageUniOne, imageUniTwo, imageUniThree]

  // Get auth state - prioritize localStorage (updated immediately) then context
  const getAuthState = () => {
    // First check localStorage (updated immediately on login/signup)
    if (typeof window !== "undefined") {
      try {
        const savedUser = localStorage.getItem("bideshstudy_user")
        const savedToken = localStorage.getItem("bideshstudy_token")
        
        if (savedToken && savedUser && savedUser !== "undefined" && savedUser !== "null") {
          try {
            const parsedUser = JSON.parse(savedUser)
            if (parsedUser && typeof parsedUser === "object") {
              return { isAuthenticated: true, currentUser: parsedUser }
            }
          } catch (e) {
            // Parsing failed
          }
        }
      } catch (error) {
        // Error reading from localStorage
      }
    }
    
    // Fallback to context (may be slower to update)
    if (user && token) {
      return { isAuthenticated: true, currentUser: user }
    }
    
    return { isAuthenticated: false, currentUser: null }
  }

  // Store auth state in state to force re-renders
  const [authState, setAuthState] = useState(() => getAuthState())

  // Force re-render on auth changes
  useEffect(() => {
    const updateAuthState = () => {
      // Get fresh state - this will check both localStorage and context
      const newState = getAuthState()
      setAuthState(newState)
      setUpdateTrigger(prev => prev + 1)
    }

    const handleAuthChange = () => {
      updateAuthState()
    }
    
    window.addEventListener("authStateChanged", handleAuthChange)
    
    // Listen for storage changes (cross-tab sync)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "bideshstudy_token" || e.key === "bideshstudy_user" || e.key === "bideshstudy_auth") {
        updateAuthState()
      }
    }
    
    // Listen for same-tab localStorage changes via custom event
    const handleLocalStorageChange = () => {
      updateAuthState()
    }
    
    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("localStorageChange", handleLocalStorageChange)
    
    // Check frequently to catch updates (fallback - ensures we catch localStorage changes in same tab)
    const interval = setInterval(() => {
      updateAuthState()
    }, 100)
    
    // Initial update
    updateAuthState()
    
    return () => {
      window.removeEventListener("authStateChanged", handleAuthChange)
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("localStorageChange", handleLocalStorageChange)
      clearInterval(interval)
    }
  }, [user, token])

  // Also update authState when user/token changes from context (separate effect for immediate updates)
  useEffect(() => {
    const newState = getAuthState()
    setAuthState(newState)
  }, [user, token])

  // Force update on mount and when page becomes visible (handles page refresh/navigation)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setAuthState(getAuthState())
      }
    }
    
    const handleFocus = () => {
      setAuthState(getAuthState())
    }
    
    window.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('focus', handleFocus)
    
    // Initial check
    setAuthState(getAuthState())
    
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  // Get current auth state - check directly in render for immediate updates (prioritize localStorage check)
  // Always prefer direct check from getAuthState() which reads from localStorage first
  const authStateResult = getAuthState()
  const { isAuthenticated, currentUser } = authStateResult
  
  // Determine if user is authenticated - check both localStorage and context
  // More lenient check - if we have token OR user from either source, consider authenticated
  const checkAuth = () => {
    // Check localStorage directly (most reliable)
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("bideshstudy_token")
      const savedUser = localStorage.getItem("bideshstudy_user")
      if (savedToken && savedUser && savedUser !== "undefined" && savedUser !== "null") {
        return true
      }
    }
    // Check context
    if ((isAuthenticated && currentUser) || (user && token)) {
      return true
    }
    return false
  }
  const isUserAuthenticated = checkAuth()
  
  // Debug: Log auth state for troubleshooting
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("bideshstudy_user")
      const savedToken = localStorage.getItem("bideshstudy_token")
      console.log("Navbar Auth Debug:", {
        isAuthenticated,
        currentUser: currentUser ? { email: currentUser.email, name: currentUser.name } : null,
        hasLocalStorageUser: !!savedUser,
        hasLocalStorageToken: !!savedToken,
        contextUser: user ? { email: user.email, name: user.name } : null,
        contextToken: !!token,
        isUserAuthenticated
      })
    }
  }, [isAuthenticated, currentUser, user, token, isUserAuthenticated])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isHovering) {
      interval = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % destinationImages.length)
          setIsTransitioning(false)
        }, 500)
      }, 2000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isHovering, destinationImages.length])

  // Handle page shift when mobile menu is open (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const mainContent = document.querySelector('main')
    const footer = document.querySelector('footer')
    const navbar = document.querySelector('nav')

    // Always set transition for smooth animation
    if (mainContent) {
      mainContent.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      mainContent.style.willChange = 'transform'
    }
    if (footer) {
      footer.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      footer.style.willChange = 'transform'
    }
    if (navbar) {
      navbar.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      navbar.style.willChange = 'transform'
    }

    if (isMobileMenuOpen) {
      if (mainContent) {
        mainContent.style.transform = 'translateX(80%)'
      }
      if (footer) {
        footer.style.transform = 'translateX(80%)'
      }
      if (navbar) {
        navbar.style.transform = 'translateX(80%)'
      }
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
      document.body.style.overflowX = 'hidden'
    } else {
      if (mainContent) {
        mainContent.style.transform = 'translateX(0)'
      }
      if (footer) {
        footer.style.transform = 'translateX(0)'
      }
      if (navbar) {
        navbar.style.transform = 'translateX(0)'
      }
      document.documentElement.style.overflow = ''
      document.documentElement.style.overflowX = ''
      document.body.style.overflowX = ''
    }
    return () => {
      if (mainContent) {
        mainContent.style.transform = ''
        mainContent.style.transition = ''
        mainContent.style.willChange = ''
      }
      if (footer) {
        footer.style.transform = ''
        footer.style.transition = ''
        footer.style.willChange = ''
      }
      if (navbar) {
        navbar.style.transform = ''
        navbar.style.transition = ''
        navbar.style.willChange = ''
      }
      document.documentElement.style.overflow = ''
      document.documentElement.style.overflowX = ''
      document.body.style.overflowX = ''
    }
  }, [isMobileMenuOpen])

  // Reset submenu when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setOpenMobileSubmenu(null)
    }
  }, [isMobileMenuOpen])

  // Handle scroll to add shadow when scrolled
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-[80%] bg-[#0D9488] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{ willChange: 'transform' }}
      >
        <div className="h-full flex flex-col">
          {/* Mobile Navigation Menu */}
          <div className="flex-1 overflow-y-auto py-4 pt-[100px]">
            {/* DESTINATIONS - Expandable */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('destinations')}
                className="w-full flex items-center justify-between gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              >
                <div className="flex items-center gap-3">
              <Globe className="h-5 w-5" />
              DESTINATIONS
                </div>
                {openMobileSubmenu === 'destinations' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {openMobileSubmenu === 'destinations' && (
                <div className="bg-teal-700/30 border-b border-teal-600/50">
                  {/* ASIA */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">ASIA</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/destinations/japan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Japan
            </Link>
                      <Link href="/destinations/china" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        China
                      </Link>
                      <Link href="/destinations/south-korea" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        South Korea
                      </Link>
                    </div>
                  </div>
                  {/* EUROPE */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">EUROPE</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/destinations/united-kingdom" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        United Kingdom
                      </Link>
                      <Link href="/destinations/france" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        France
                      </Link>
                      <Link href="/destinations/germany" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Germany
                      </Link>
                      <Link href="/destinations/italy" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Italy
                      </Link>
                    </div>
                  </div>
                  {/* NORTH AMERICA */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">NORTH AMERICA</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/destinations/united-states" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        United States
                      </Link>
                      <Link href="/destinations/canada" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Canada
                      </Link>
                      <Link href="/destinations/mexico" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Mexico
                      </Link>
                      <Link href="/destinations/costa-rica" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Costa Rica
                      </Link>
                    </div>
                  </div>
                  {/* SOUTH AMERICA */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">SOUTH AMERICA</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/destinations/argentina" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Argentina
                      </Link>
                      <Link href="/destinations/brazil" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Brazil
                      </Link>
                      <Link href="/destinations/chile" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Chile
                      </Link>
                      <Link href="/destinations/colombia" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Colombia
                      </Link>
                    </div>
                  </div>
                  {/* OCEANIA */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">OCEANIA</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/destinations/australia" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Australia
                      </Link>
                      <Link href="/destinations/new-zealand" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        New Zealand
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SUBJECTS - Expandable */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('subjects')}
                className="w-full flex items-center justify-between gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              >
                <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5" />
              SUBJECTS
                </div>
                {openMobileSubmenu === 'subjects' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {openMobileSubmenu === 'subjects' && (
                <div className="bg-teal-700/30 border-b border-teal-600/50">
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">ENGINEERING</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/subjects/art-design" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Art & Design
            </Link>
                      <Link href="/subjects/business-economics" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Business & Economics
                      </Link>
                      <Link href="/subjects/communications" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Communications
                      </Link>
                      <Link href="/subjects/education" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Education
                      </Link>
                      <Link href="/subjects/engineering" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Engineering
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">SCIENCES</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/subjects/health" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Health
                      </Link>
                      <Link href="/subjects/humanities" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Humanities
                      </Link>
                      <Link href="/subjects/international-studies" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        International Studies
                      </Link>
                      <Link href="/subjects/math" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Math
                      </Link>
                      <Link href="/subjects/natural-applied-sciences" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Natural & Applied Sciences
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">SOCIAL & CULTURAL</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/subjects/social-sciences" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Social Sciences
                      </Link>
                      <Link href="/subjects/tourism-hospitality" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Tourism and Hospitality
                      </Link>
                      <Link href="/subjects/visual-performing-arts" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Visual and Performing Arts
                      </Link>
                      <Link href="/subjects/world-languages" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        World Languages
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            

            {/* TERMS - Expandable */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('terms')}
                className="w-full flex items-center justify-between gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              >
                <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5" />
              TERMS
                </div>
                {openMobileSubmenu === 'terms' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {openMobileSubmenu === 'terms' && (
                <div className="bg-teal-700/30 border-b border-teal-600/50">
                  <div className="space-y-1 pl-4 py-2">
                    <Link href="/terms/academic-year" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Academic Year
            </Link>
                    <Link href="/terms/fall-semester" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Fall Semester
                    </Link>
                    <Link href="/terms/spring-semester" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Spring Semester
                    </Link>
                    <Link href="/terms/summer-break" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Summer Break
                    </Link>
                    <Link href="/terms/winter-break" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Winter Break
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* HOW IT WORKS - Expandable */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('how-it-works')}
                className="w-full flex items-center justify-between gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              >
                <div className="flex items-center gap-3">
              <Settings className="h-5 w-5" />
              HOW IT WORKS
                </div>
                {openMobileSubmenu === 'how-it-works' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {openMobileSubmenu === 'how-it-works' && (
                <div className="bg-teal-700/30 border-b border-teal-600/50">
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">HOW IT WORKS</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/how-it-works/pick-program" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        How to Pick a Program
            </Link>
                      <Link href="/how-it-works/apply" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        How to Apply
                      </Link>
                      <Link href="/how-it-works/costs-deadlines" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Costs and Deadlines
                      </Link>
                      <Link href="/how-it-works/online-application" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Online Application
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">AFTER APPLYING</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/how-it-works/what-to-expect" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        What to Expect After Applying
                      </Link>
                      <Link href="/how-it-works/what-you-get" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        What You Get
                      </Link>
                      <Link href="/how-it-works/what-youll-need" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        What You'll Need
                      </Link>
                      <Link href="/how-it-works/cancellation-policy" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Cancellation Policy
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">THINGS YOU'LL NEED</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/how-it-works/pre-departure-checklist" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Pre-Departure Checklist
                      </Link>
                      <Link href="/how-it-works/passport" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        How to Get a Passport
                      </Link>
                      <Link href="/how-it-works/visa" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Visa Information
                      </Link>
                      <Link href="/how-it-works/flights" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Booking Flights
                      </Link>
                      <Link href="/how-it-works/travel-insurance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Travel Insurance
                      </Link>
                      <Link href="/how-it-works/traveler-guide" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Traveler Guide
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="text-xs font-bold text-white/80 uppercase mb-2">FUNDING YOUR PROGRAM</div>
                    <div className="space-y-1 pl-4">
                      <Link href="/how-it-works/what-youre-paying-for" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        What You're Paying For
                      </Link>
                      <Link href="/how-it-works/how-to-pay" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        How to Pay for Study abroad
                      </Link>
                      <Link href="/how-it-works/scholarships" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Scholarships
                      </Link>
                      <Link href="/how-it-works/grants" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Grants
                      </Link>
                      <Link href="/how-it-works/financial-aid" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Paying with Financial Aid
                      </Link>
                      <Link href="/how-it-works/crowdfunding" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                        Crowdfunding Guide
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT - Expandable */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('about')}
                className="w-full flex items-center justify-between gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              >
                <div className="flex items-center gap-3">
              <Info className="h-5 w-5" />
              ABOUT
                </div>
                {openMobileSubmenu === 'about' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {openMobileSubmenu === 'about' && (
                <div className="bg-teal-700/30 border-b border-teal-600/50">
                  <div className="space-y-1 pl-4 py-2">
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      About goStudy
            </Link>
                    <Link href="/about/reviews" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Study Abroad Reviews
                    </Link>
                    <Link href="/about/health-safety" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Health & Safety Abroad
                    </Link>
                    <Link href="/about/blogs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Blogs and Resources
                    </Link>
                    <Link href="/about/faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      FAQs
                    </Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/90 hover:text-white hover:bg-teal-600/30 px-2 rounded">
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links */}
              {isUserAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BookOpen className="h-5 w-5" />
                  DASHBOARD
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  PROFILE
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors w-full text-left"
                >
                  <LogOut className="h-5 w-5" />
                  LOGOUT
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 bg-[#1BB685] hover:bg-[#1BB685]/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                LOGIN
              </Link>
            )}
          </div>

          {/* Social Media Icons */}
          <div className="py-6 px-4 border-t border-teal-600/50">
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5 text-[#0D9488] group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="mailto:info@gostudy.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay - Click to close menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ left: '80%' }}
        />
      )}

      {/* Desktop Navbar */}
      <nav className={`w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left side - Brand name with Logo and Profile (if logged in) */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="/logo.svg"
                    alt="BideshStudy Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">BideshStudy</h1>
              </Link>
              
              {/* Profile button on left side (desktop only) */}
              {isUserAuthenticated && (
                <div className="hidden md:block relative">
                  <Link href="/profile">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="text-xs sm:text-sm flex items-center gap-1"
                      onMouseEnter={() => setIsProfileDropdownOpen(true)}
                      onMouseLeave={() => setIsProfileDropdownOpen(false)}
                    >
                      <User className="h-3 w-3 sm:h-4 sm:w-4" />
                      PROFILE
                      <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                  {isProfileDropdownOpen && (
                    <div 
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                      onMouseEnter={() => setIsProfileDropdownOpen(true)}
                      onMouseLeave={() => setIsProfileDropdownOpen(false)}
                    >
                      <div className="py-1">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-[#424242]">
                            {currentUser?.name || currentUser?.email || user?.name || user?.email}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {currentUser?.email || user?.email}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            handleLogout()
                            setIsProfileDropdownOpen(false)
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                        >
                          <LogOut className="h-4 w-4" />
                          LOGOUT
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Middle - Navigation items (hidden on mobile) */}
            <NavigationMenu viewport={false} className="hidden md:flex w-full ">
              <NavigationMenuList className="flex-1">
                {/* Destinations */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:font-bold">DESTINATIONS</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="group-data-[viewport=false]/navigation-menu:!w-11/12 group-data-[viewport=false]/navigation-menu:!left-1/2 group-data-[viewport=false]/navigation-menu:!-translate-x-1/2 group-data-[viewport=false]/navigation-menu:!fixed group-data-[viewport=false]/navigation-menu:!top-14.5"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="w-full">
                      <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex gap-4">
                          {/* Left side - Image (1/4 width) */}
                          <div className="w-1/4 relative min-h-[200px] overflow-hidden rounded">
                            <div className="relative w-full h-full">
                              {destinationImages.map((image, index) => {
                                const isActive = index === currentImageIndex
                                const isNext = index === (currentImageIndex + 1) % destinationImages.length
                                const isPrev = index === (currentImageIndex - 1 + destinationImages.length) % destinationImages.length

                                let translateX = '100%'
                                if (isActive) {
                                  translateX = isTransitioning ? '-100%' : '0%'
                                } else if (isNext && isTransitioning) {
                                  translateX = '0%'
                                } else if (isPrev && !isTransitioning) {
                                  translateX = '-100%'
                                }

                                return (
                                  <Image
                                    key={index}
                                    src={image}
                                    alt={`Study Abroad Destinations ${index + 1}`}
                                    fill
                                    className={`object-cover absolute inset-0 transition-transform duration-500 ease-in-out ${isActive || (isNext && isTransitioning) ? 'z-10' : 'z-0'
                                      }`}
                                    style={{
                                      transform: `translateX(${translateX})`,
                                    }}
                                    sizes="25vw"
                                  />
                                )
                              })}
                            </div>
                          </div>
                          {/* Right side - Continents (3/4 width) */}
                          <div className="w-3/4 mt-4">
                            <div className="grid grid-cols-5 gap-4">
                              {/* Asia */}
                              <div className="space-y-2 group">
                                <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                                  <span>ASIA</span>
                                </div>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/japan" className="block text-xs sm:text-sm hover:text-primary py-1  ">
                                    Japan
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/china" className="block text-sm hover:text-primary py-1 ">
                                    China
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/south-korea" className="block text-sm hover:text-primary py-1 ">
                                    South Korea
                                  </Link>
                                </NavigationMenuLink>
                              </div>

                              {/* Europe */}
                              <div className="space-y-2 group">
                                <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                                  <span>EUROPE</span>
                                </div>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/united-kingdom" className="block text-sm hover:text-primary py-1 ">
                                    United Kingdom
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/france" className="block text-sm hover:text-primary py-1 ">
                                    France
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/germany" className="block text-sm hover:text-primary py-1 ">
                                    Germany
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/italy" className="block text-sm hover:text-primary py-1 ">
                                    Italy
                                  </Link>
                                </NavigationMenuLink>
                              </div>

                              {/* North America */}
                              <div className="space-y-2 group">
                                <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                                  <span>NORTH AMERICA</span>
                                </div>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/united-states" className="block text-sm hover:text-primary py-1 ">
                                    United States
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/canada" className="block text-sm hover:text-primary py-1 ">
                                    Canada
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/mexico" className="block text-sm hover:text-primary py-1 ">
                                    Mexico
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/costa-rica" className="block text-sm hover:text-primary py-1 ">
                                    Costa Rica
                                  </Link>
                                </NavigationMenuLink>
                              </div>

                              {/* South America */}
                              <div className="space-y-2 group">
                                <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                                  <span>SOUTH AMERICA</span>
                                </div>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/argentina" className="block text-sm hover:text-primary py-1 ">
                                    Argentina
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/brazil" className="block text-sm hover:text-primary py-1 ">
                                    Brazil
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/chile" className="block text-sm hover:text-primary py-1 ">
                                    Chile
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/colombia" className="block text-sm hover:text-primary py-1 ">
                                    Colombia
                                  </Link>
                                </NavigationMenuLink>
                              </div>

                              {/* Oceania */}
                              <div className="space-y-2 group">
                                <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                                  <span>OCEANIA</span>
                                </div>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/australia" className="block text-sm hover:text-primary py-1 ">
                                    Australia
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <Link href="/destinations/new-zealand" className="block text-sm hover:text-primary py-1 ">
                                    New Zealand
                                  </Link>
                                </NavigationMenuLink>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Subjects */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:font-bold">SUBJECTS</NavigationMenuTrigger>
                  <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:!w-11/12 group-data-[viewport=false]/navigation-menu:!left-1/2 group-data-[viewport=false]/navigation-menu:!-translate-x-1/2 group-data-[viewport=false]/navigation-menu:!fixed group-data-[viewport=false]/navigation-menu:!top-14.5">
                    <div className="max-w-7xl mx-auto px-4 ">
                      <div className="flex gap-4 ">
                        {/* Left side - Image (1/4 width) */}
                        <div className="w-1/4 relative min-h-[200px]">
                          <Image
                            src={subjectImageOne}
                            alt="Study Subjects"
                            fill
                            className="object-cover rounded-md"
                            sizes="25vw"
                          />
                        </div>
                        {/* Right side - Subjects (3/4 width) */}
                        <div className="w-3/4">
                          <div className="grid grid-cols-3 gap-4 py-4">
                            {/* Column 1 */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-xs sm:text-sm mb-2">ENGINEERING</h4>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/art-design" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Art & Design
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/business-economics" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Business & Economics
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/communications" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Communications
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/education" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Education
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/engineering" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Engineering
                                </Link>
                              </NavigationMenuLink>
                            </div>
                            {/* Column 2 */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-xs sm:text-sm mb-2">SCIENCES</h4>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/health" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Health
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/humanities" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Humanities
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/international-studies" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  International Studies
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/math" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Math
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/natural-applied-sciences" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Natural & Applied Sciences
                                </Link>
                              </NavigationMenuLink>
                            </div>
                            {/* Column 3 */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-xs sm:text-sm mb-2">SOCIAL & CULTURAL</h4>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/social-sciences" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Social Sciences
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/tourism-hospitality" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Tourism and Hospitality
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/visual-performing-arts" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Visual and Performing Arts
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/subjects/world-languages" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  World Languages
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Terms */}
                <NavigationMenuItem>
                <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:font-bold">TERMS</NavigationMenuTrigger>
                <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:!top-11">
                  <div className="w-[200px]  ">
                    <div className="space-y-2">
                      <NavigationMenuLink asChild>
                        <Link href="/terms/academic-year" className="block text-xs sm:text-sm hover:text-primary">
                          Academic Year
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/fall-semester" className="block text-sm hover:text-primary">
                          Fall Semester
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/spring-semester" className="block text-sm hover:text-primary">
                          Spring Semester
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/summer-break" className="block text-sm hover:text-primary">
                          Summer Break
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/winter-break" className="block text-sm hover:text-primary">
                          Winter Break
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

                 {/* How It Works */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:font-bold">HOW IT WORKS</NavigationMenuTrigger>
                  <NavigationMenuContent  className="group-data-[viewport=false]/navigation-menu:!w-11/12 group-data-[viewport=false]/navigation-menu:!left-1/2 group-data-[viewport=false]/navigation-menu:!-translate-x-1/2 group-data-[viewport=false]/navigation-menu:!fixed group-data-[viewport=false]/navigation-menu:!top-14.5">
                    <div className="max-w-7xl mx-auto px-4">
                      <div className="flex gap-4">
                        {/* Left side - Image (1/4 width) */}
                        <div className="w-1/4 relative min-h-[300px]">
                          <Image
                            src={worksImageOne}
                            alt="How It Works"
                            fill
                            className="object-cover rounded-md"
                            sizes="25vw"
                          />
                        </div>
                        {/* Right side - Content (3/4 width) */}
                        <div className="w-3/4">
                          <div className="grid grid-cols-4 gap-4 py-4">
                            {/* Column 1 - HOW IT WORKS */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-xs sm:text-sm mb-2">HOW IT WORKS</h4>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/pick-program" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  How to Pick a Program
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/apply" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  How to Apply
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/costs-deadlines" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Costs and Deadlines
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/online-application" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Online Application
                                </Link>
                              </NavigationMenuLink>
                            </div>
                            {/* Column 2 - AFTER APPLYING */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-xs sm:text-sm mb-2">AFTER APPLYING</h4>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/what-to-expect" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  What to Expect After Applying
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/what-you-get" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  What You Get
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/what-youll-need" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  What You&apos;ll Need
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/cancellation-policy" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Cancellation Policy
                                </Link>
                              </NavigationMenuLink>
                            </div>
                            {/* Column 3 - THINGS YOU'LL NEED */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-xs sm:text-sm mb-2">THINGS YOU&apos;LL NEED</h4>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/pre-departure-checklist" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Pre-Departure Checklist
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/passport" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  How to Get a Passport
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/visa" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Visa Information
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/flights" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Booking Flights
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/travel-insurance" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Travel Insurance
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/traveler-guide" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Traveler Guide
                                </Link>
                              </NavigationMenuLink>
                            </div>
                            {/* Column 4 - FUNDING YOUR PROGRAM */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-xs sm:text-sm mb-2">FUNDING YOUR PROGRAM</h4>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/what-youre-paying-for" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  What You&apos;re Paying For
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/how-to-pay" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  How to Pay for Study abroad
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/scholarships" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Scholarships
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/grants" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Grants
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/financial-aid" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Paying with Financial Aid
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="/how-it-works/crowdfunding" className="block text-xs sm:text-sm hover:text-primary py-1">
                                  Crowdfunding Guide
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                
              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:font-bold">ABOUT</NavigationMenuTrigger>
                <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:!top-11">
                  <div className="w-[200px] p-4">
                    <div className="space-y-2">
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block text-xs sm:text-sm hover:text-primary">
                          About goStudy
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/reviews" className="block text-xs sm:text-sm hover:text-primary">
                          Study Abroad Reviews
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/health-safety" className="block text-xs sm:text-sm hover:text-primary">
                          Health & Safety Abroad
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/blogs" className="block text-xs sm:text-sm hover:text-primary">
                          Blogs and Resources
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/faq" className="block text-xs sm:text-sm hover:text-primary">
                          FAQs
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/contact" className="block text-xs sm:text-sm hover:text-primary">
                          Contact Us
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

               {/* PROFILE */}
               {isUserAuthenticated && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:font-bold">
                    PROFILE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:!top-11">
                    <div className="w-[200px] p-4">
                      <div className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link href="/profile" className="block text-xs sm:text-sm hover:text-primary">
                            My Profile
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/profile/settings" className="block text-xs sm:text-sm hover:text-primary">
                            Settings
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/profile/applications" className="block text-xs sm:text-sm hover:text-primary">
                            My Applications
                          </Link>
                        </NavigationMenuLink>
                        <div className="pt-2 border-t border-gray-200">
                          <button
                            onClick={() => {
                              handleLogout()
                            }}
                            className="w-full text-left text-xs sm:text-sm text-red-600 hover:text-red-700 flex items-center gap-2"
                          >
                            <LogOut className="h-4 w-4" />
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}



            </NavigationMenuList>
            
           
          </NavigationMenu>

            {/* Right side - Dashboard, Profile and Login buttons (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Dashboard button - show if authenticated */}
              {isUserAuthenticated && (
                <Link href="/dashboard">
                  <Button variant="default" size="sm" className="text-xs sm:text-sm">
                    DASHBOARD
                  </Button>
                </Link>
              )}
              {/* Profile button - show if authenticated */}
              {isUserAuthenticated && (
                <Link href="/profile">
                  <Button variant="default" size="sm" className="text-xs sm:text-sm">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    PROFILE
                  </Button>
                </Link>
              )}
              {/* Login button - show if not authenticated */}
              {!isUserAuthenticated && (
                <Link href="/login">
                  <Button variant="default" size="sm" className="text-xs sm:text-sm bg-[#1BB685] hover:bg-[#1BB685]/90 text-white">
                    <LogIn className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    LOGIN
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar