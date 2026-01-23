"use client"

import { useState } from "react"
import { UniversityTabs } from "./university-tabs"
import { Check, Building2, Users, BookOpen, Award, DollarSign } from "lucide-react"
export type ProgramData = {
  id: string
  title: string
  university: string
  image: any
  description: string
  fee: string
  semesters: string[]
  slug: string
  location?: string
  duration?: string
  language?: string
  highlights?: string[]
  requirements?: string[]
  additionalImages?: any[]
  detailedDescription?: string
  courses?: string[]
  facilities?: string[]
  studentLife?: string[]
}

type ProgramPageClientProps = {
  currentProgram: ProgramData
  universityPrograms: ProgramData[]
  uniData: {
    founded: string
    students: string
    programs: string
    acceptance: string
    tuition: string
    type: string
    rating: number
  }
}

export function ProgramPageClient({ currentProgram, universityPrograms, uniData }: ProgramPageClientProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const overviewContent = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* About Section */}
        <div className="-mt-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-3">
            About {currentProgram.university}
          </h2>
          <p className="text-[#424242] leading-relaxed text-base md:text-lg">
            {currentProgram.detailedDescription || currentProgram.description}
          </p>
        </div>

        {/* Key Features */}
        {currentProgram.highlights && currentProgram.highlights.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {currentProgram.highlights.slice(0, 5).map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                  <span className="text-[#424242] leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Column - Quick Facts Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg sticky top-24">
          <h2 className="text-xl md:text-2xl font-bold text-[#424242] mb-6">
            Quick Facts
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-[#1BB685] flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Founded</p>
                <p className="text-base font-semibold text-[#424242]">{uniData.founded}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#1BB685] flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Students</p>
                <p className="text-base font-semibold text-[#424242]">{uniData.students}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-[#1BB685] flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Programs</p>
                <p className="text-base font-semibold text-[#424242]">{uniData.programs}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-[#1BB685] flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Acceptance</p>
                <p className="text-base font-semibold text-[#424242]">{uniData.acceptance}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-[#1BB685] flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Tuition</p>
                <p className="text-base font-semibold text-[#424242]">{uniData.tuition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const admissionsContent = currentProgram.requirements ? (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-[#424242] mb-4">Admission Requirements</h3>
        <ul className="space-y-3">
          {currentProgram.requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
              <span className="text-[#424242] leading-relaxed">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : undefined

  return (
    <UniversityTabs
      activeTab={activeTab}
      onTabChange={setActiveTab}
      universityPrograms={universityPrograms}
      currentProgram={currentProgram}
      overviewContent={overviewContent}
      admissionsContent={admissionsContent}
    />
  )
}

