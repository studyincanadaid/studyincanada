"use client"

import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

export default function ScholarshipsPage() {
  const scholarships = [
    { emoji: "🏛", title: "Study a Master's in Europe Scholarship 2026", amount: "€5,000" },
    { emoji: "🗽", title: "Study a Bachelor's in the USA Scholarship 2026", amount: "$5,000" },
    { emoji: "🧑", title: "Adult Learners Scholarship 2026", amount: "$4,000" },
    { emoji: "💃", title: "Women's Scholarship for International Students 2026", amount: "$5,000" }
  ]

  return (
    <div className="w-full min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Scholarships</span>
        </div>

        {/* Header Section */}
        <div className="space-y-4 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#424242]">
            Study Abroad Scholarships
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Do you dream of studying abroad? Our scholarships can help make your study abroad dream come true.
          </p>
        </div>

        {/* Scholarships List */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-6">
          bideshstudy.com scholarships
          </h2>
          
          <div className="space-y-4">
            {scholarships.map((scholarship, index) => {
              const getScholarshipUrl = (title: string) => {
                if (title.includes("Adult Learners")) {
                  return "/scholarships/adult-learners-scholarship"
                } else if (title.includes("Master's in Europe")) {
                  return "/scholarships/masters-europe-scholarship"
                } else if (title.includes("Bachelor's in the USA")) {
                  return "/scholarships/bachelors-usa-scholarship"
                } else if (title.includes("Women's Scholarship")) {
                  return "/scholarships/womens-scholarship"
                }
                return "#"
              }
              
              return (
                <Link
                  key={index}
                  href={getScholarshipUrl(scholarship.title)}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg bg-background hover:shadow-md transition-shadow block"
                >
                  <span className="text-3xl flex-shrink-0">{scholarship.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#424242]">
                      {scholarship.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#424242]">
                      {scholarship.amount}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

