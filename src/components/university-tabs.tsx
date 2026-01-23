"use client"

import { useState } from "react"
import { BookMarked, GraduationCap, FileCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type ProgramData = {
  id: string
  title: string
  university: string
  image: any
  description: string
  fee: string
  slug: string
  location?: string
  duration?: string
  language?: string
}

type UniversityTabsProps = {
  activeTab: string
  onTabChange: (tab: string) => void
  universityPrograms: ProgramData[]
  currentProgram: ProgramData
  overviewContent: React.ReactNode
  admissionsContent?: React.ReactNode
}

export function UniversityTabs({ 
  activeTab, 
  onTabChange, 
  universityPrograms,
  currentProgram,
  overviewContent,
  admissionsContent 
}: UniversityTabsProps) {
  return (
    <>
      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <button 
            onClick={() => onTabChange("overview")}
            className={`flex items-center flex-shrink-0 px-3 py-2 md:px-5 md:py-3 space-x-1 md:space-x-2 transition-colors ${
              activeTab === "overview" 
                ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900 text-gray-900 bg-white" 
                : "border-b dark:border-gray-600 dark:text-gray-600 text-gray-600"
            }`}
          >
            <BookMarked className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-sm md:text-base">Overview</span>
          </button>
          <button 
            onClick={() => onTabChange("programs")}
            className={`flex items-center flex-shrink-0 px-3 py-2 md:px-5 md:py-3 space-x-1 md:space-x-2 transition-colors ${
              activeTab === "programs" 
                ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900 text-gray-900 bg-white" 
                : "border-b dark:border-gray-600 dark:text-gray-600 text-gray-600"
            }`}
          >
            <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-sm md:text-base">Programs</span>
          </button>
          <button 
            onClick={() => onTabChange("admissions")}
            className={`flex items-center flex-shrink-0 px-3 py-2 md:px-5 md:py-3 space-x-1 md:space-x-2 transition-colors ${
              activeTab === "admissions" 
                ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900 text-gray-900 bg-white" 
                : "border-b dark:border-gray-600 dark:text-gray-600 text-gray-600"
            }`}
          >
            <FileCheck className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-sm md:text-base">Admissions</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {activeTab === "overview" && overviewContent}
        
        {activeTab === "programs" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-6">
                Available Programs at {currentProgram.university}
              </h2>
              <p className="text-[#424242] leading-relaxed text-base md:text-lg mb-8">
                Explore our diverse range of programs designed to meet your academic and career goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universityPrograms.map((program) => (
                <div 
                  key={program.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#424242] mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {program.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {program.location && (
                        <p className="text-sm text-[#424242]">
                          <span className="font-semibold">Location:</span> {program.location}
                        </p>
                      )}
                      {program.duration && (
                        <p className="text-sm text-[#424242]">
                          <span className="font-semibold">Duration:</span> {program.duration}
                        </p>
                      )}
                      {program.language && (
                        <p className="text-sm text-[#424242]">
                          <span className="font-semibold">Language:</span> {program.language}
                        </p>
                      )}
                      <p className="text-lg font-bold text-[#1BB685]">
                        {program.fee}
                      </p>
                    </div>
                    <Link href={`/programs/${program.slug}`}>
                      <Button className="w-full bg-[#22253D] hover:bg-[#22253D]/90 text-white">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "admissions" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-6">
                Admissions Information
              </h2>
              {admissionsContent || (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-[#424242] leading-relaxed">
                    For detailed admissions information, please contact our admissions office or visit the university website.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

