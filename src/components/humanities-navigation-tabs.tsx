"use client"

import { useRef, useState, useEffect } from "react"

export function HumanitiesNavigationTabs() {
  const navRef = useRef<HTMLUListElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const nav = navRef.current
    if (nav) {
      nav.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
      return () => {
        nav.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-[#1BB685] border-b border-border sticky top-16 z-20" style={{ backgroundColor: "#1BB685", color: "#ffffff" }}>
      <div className="max-w-6xl mx-auto relative">
        <div className="container">
          <div className="page-submenu-inner relative">
            {/* Controls */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center z-10 pointer-events-none">
              {showLeftArrow && (
                <button
                  onClick={scrollLeft}
                  className="pointer-events-auto control control-prev ml-2"
                  aria-label="Scroll left"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" transform="rotate(-180 7.5 7.5)" fill="white"></circle>
                    <path d="M8.25 11.25L5.25 7.5L8.25 3.75" stroke="#60A39A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              )}
            </div>
            <div className="absolute right-0 top-0 bottom-0 flex items-center z-10 pointer-events-none">
              {showRightArrow && (
                <button
                  onClick={scrollRight}
                  className="pointer-events-auto control control-next mr-2"
                  aria-label="Scroll right"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="white"></circle>
                    <path d="M6.75 3.75L9.75 7.5L6.75 11.25" stroke="#60A39A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              )}
            </div>

            {/* Navigation List */}
            <nav className="overflow-x-auto scrollbar-hide">
              <ul 
                ref={navRef}
                className="flex"
                style={{ backgroundColor: "#1BB685", color: "#ffffff" }}
              >
                <li>
                  <a 
                    href="#overview" 
                    className="px-3 py-2 text-xs md:text-sm font-medium text-white hover:text-white/80 border-b-2 border-transparent hover:border-white whitespace-nowrap block"
                  >
                    OVERVIEW
                  </a>
                </li>
                <li>
                  <a 
                    href="#reviews" 
                    className="px-3 py-2 text-xs md:text-sm font-medium text-white hover:text-white/80 border-b-2 border-transparent hover:border-white whitespace-nowrap block"
                  >
                    REVIEWS
                  </a>
                </li>
                <li>
                  <a 
                    href="#programs" 
                    className="px-3 py-2 text-xs md:text-sm font-medium text-white hover:text-white/80 border-b-2 border-transparent hover:border-white whitespace-nowrap block"
                  >
                    PROGRAMS
                  </a>
                </li>
                <li>
                  <a 
                    href="#activities" 
                    className="px-3 py-2 text-xs md:text-sm font-medium text-white hover:text-white/80 border-b-2 border-transparent hover:border-white whitespace-nowrap block"
                  >
                    ACTIVITIES
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-to-apply" 
                    className="px-3 py-2 text-xs md:text-sm font-medium text-white hover:text-white/80 border-b-2 border-transparent hover:border-white whitespace-nowrap block"
                  >
                    HOW TO APPLY
                  </a>
                </li>
                <li>
                  <a 
                    href="#faqs" 
                    className="px-3 py-2 text-xs md:text-sm font-medium text-white hover:text-white/80 border-b-2 border-transparent hover:border-white whitespace-nowrap block"
                  >
                    FAQS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

