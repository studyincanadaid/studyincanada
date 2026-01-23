"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

const termMap: { [key: string]: { name: string; id: string } } = {
  "academic-year": { name: "Academic Year", id: "1695" },
  "fall-semester": { name: "Fall Semester", id: "1696" },
  "spring-semester": { name: "Spring Semester", id: "1697" },
  "summer-break": { name: "Summer Break", id: "1698" },
  "winter-break": { name: "Winter Break", id: "1699" }
}

export default function TermPage() {
  const router = useRouter()
  const params = useParams()
  const term = params?.term as string

  useEffect(() => {
    if (term) {
      const termData = termMap[term.toLowerCase()]
      if (termData) {
        // Redirect to search page with filter
        router.replace(`/search?filter-term=${termData.id}`)
      } else {
        // If term not found, redirect to search page
        router.replace('/search')
      }
    }
  }, [term, router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  )
}

