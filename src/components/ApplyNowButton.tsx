"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { useEffect, useState } from "react"

interface ApplyNowButtonProps {
  href?: string
  className?: string
  children?: React.ReactNode
  variant?: "link" | "button"
}

export default function ApplyNowButton({ 
  href = "/apply", 
  className = "",
  children = "Take the First Step – Apply Now",
  variant = "link"
}: ApplyNowButtonProps) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (!isClient) return

    // Check if user is authenticated
    if (auth.isAuthenticated()) {
      // User is logged in, proceed to apply page
      router.push(href)
    } else {
      // User is not logged in, redirect to login with return URL
      const returnUrl = encodeURIComponent(href)
      router.push(`/login?redirect=${returnUrl}`)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  )
}

