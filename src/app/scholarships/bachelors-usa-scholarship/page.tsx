"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, ChevronRight } from "lucide-react"
import internationalStudentUSA from "@/assests/InternationalStudents/internationalStudentUSA.jpg"
import ApplyNowButton from "@/components/ApplyNowButton"

export default function BachelorsUSAScholarshipPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Header Section with Background */}
      <div className="w-full bg-[#F1F1E6] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/scholarships" className="hover:text-foreground transition-colors">
              Scholarships
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Study a Bachelor's in the USA Scholarship 2026</span>
          </div>

          {/* Header Section */}
          <div className="space-y-4 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#424242]">
              Study a Bachelor's in the USA Scholarship 2026
            </h1>
            <p className="text-lg text-muted-foreground">
              Apply for our $5,000 bachelor's degree scholarship and let us help make your study abroad dreams a reality!
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {/* Image and Key Info Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Scholarship Image - 3/4 width */}
            <div className="lg:col-span-3 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={internationalStudentUSA}
                alt="Study a Bachelor's in the USA Scholarship 2026"
                fill
                className="object-cover"
              />
            </div>

            {/* Key Info - 1/4 width */}
            <div className="lg:col-span-1 border border-border rounded-lg p-6 bg-background">
              <h2 className="text-2xl font-bold text-[#424242] mb-6">Key info</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <span className="font-semibold text-[#424242]">Scholarship amount: </span>
                    <span className="text-[#424242]">$5,000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <span className="font-semibold text-[#424242]">Application deadline: </span>
                    <span className="text-[#424242]">August 25, 2026</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <div>
                    <span className="font-semibold text-[#424242]">Who it's for: </span>
                    <span className="text-[#424242]">International Bachelor's students studying in the USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-[#424242]">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pursue Your Bachelor's Degree in the USA</h2>
              <p className="text-base leading-relaxed mb-4">
                The United States is home to some of the world's most prestigious universities and offers a diverse range of Bachelor's programs. This scholarship is designed to help international students achieve their dream of studying for a Bachelor's degree in the USA.
              </p>
              <p className="text-base leading-relaxed mb-4">
                We're awarding one scholarship worth up to $5,000 to support tuition costs for students beginning their Bachelor's studies in the USA in Fall 2026 or later.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Whether you're interested in business, engineering, arts, sciences, or any other field—this opportunity can help you pursue your academic goals in the United States.
              </p>
              <p className="text-base leading-relaxed">
                The application period for this opportunity ends on August 25, 2026 at 12:00 EST.
              </p>
            </div>

            <div>
              <p className="text-base leading-relaxed">
                Looking for more scholarships? Take a look at our <Link href="/scholarships" className="text-primary underline hover:text-primary/80">Scholarship Directory</Link>.
              </p>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
              <p className="text-base font-semibold mb-4">To apply for this scholarship:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
                <li>You must have applied (or will apply) to a university or college within the USA.</li>
                <li>You must have applied (or will apply) for a Bachelor's-level degree starting in the Fall of 2026.</li>
                <li>The degree program must be studied in the USA.</li>
                <li>You must meet the entry requirements for the university or college of your choice, including:
                  <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                    <li>Meeting high school graduation requirements</li>
                    <li>Meeting language requirements for the program (typically TOEFL or IELTS)</li>
                  </ul>
                </li>
                <li>You must hold or be eligible to apply for a relevant study visa (F-1 student visa).</li>
                <li>You must be studying abroad in a country where you do NOT hold citizenship and that you do NOT currently reside in (unless currently studying abroad).</li>
              </ul>
            </div>

            {/* Our ideal candidate */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our ideal candidate</h2>
              <p className="text-base font-semibold mb-4">Are you ready to study in the USA?</p>
              <p className="text-base leading-relaxed mb-4">
                If you're looking for a scholarship to study in the USA, we know you're well on your path to studying abroad. Having taken this leap, it's clear that you have a courageous and adventurous spirit.
              </p>
              <p className="text-base font-semibold mb-2">We're looking for candidates who are:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
                <li>Globally minded and interested in other cultures</li>
                <li>Motivated and inspired to positively change the world</li>
                <li>High academic achievers with consistently outstanding grades</li>
                <li>Involved in extra-curricular groups and activities</li>
                <li>Excited to begin their adventure and share their story with the world!</li>
              </ul>
            </div>

            {/* Key dates */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key dates for the 2026 Bachelor's in the USA Scholarship</h2>
              <div className="space-y-2 text-base leading-relaxed">
                <p><span className="font-semibold">Applications open:</span> 1 January 2026, 12:00 EST</p>
                <p><span className="font-semibold">Applications close:</span> 25 August 2026, 12:00 EST</p>
                <p><span className="font-semibold">Finalists notified:</span> 1 September - 15 September 2026</p>
                <p><span className="font-semibold">Winner announced:</span> 30 September 2026</p>
                <p><span className="font-semibold">Scholarship paid out:</span> Fall 2026 semester</p>
              </div>
            </div>

            {/* Application requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Application requirements</h2>
              <p className="text-base leading-relaxed mb-4">
                To be considered, submit your completed application by August 25, 2026, at 12:00 EST.
              </p>
              <p className="text-base font-semibold mb-2">The application consists of:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Filling out a form</li>
                <li>Answering the questions in the application form</li>
              </ul>
              <p className="text-base leading-relaxed mb-4">
                Please note that applications must be submitted in English. Applications in other languages will not be considered.
              </p>
              <p className="text-base leading-relaxed mb-2">If selected as a finalist, you may be asked to provide:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Proof of acceptance into a US university in the form of a copy of your acceptance letter</li>
                <li>Proof of high school qualifications in the form of a copy of your transcripts</li>
                <li>Proof of identity in the form of a copy of your passport</li>
              </ul>
              <p className="text-base leading-relaxed mb-4">
                Copies of documents must be scanned in color. Please have these documents on hand should you be selected as a finalist.
              </p>
              <p className="text-base leading-relaxed mb-4">
                You'll have 7 days from receiving notification of being selected as a finalist to supply us with this documentation.
              </p>
              <p className="text-base font-semibold mb-2">If selected as the winner, you must:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Respond within 3 days of receiving the offer of a scholarship to confirm acceptance</li>
              </ul>
              <div className="space-y-2 text-base mb-6">
                <p>
                  <Link href="#" className="text-primary underline hover:text-primary/80">👉 Read the full Terms & Conditions here.</Link>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <ApplyNowButton 
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              />
            </div>

            {/* View All Scholarships */}
            <div className="pt-6 text-center">
              <Link 
                href="/scholarships" 
                className="text-primary font-medium underline text-base hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                View all scholarships
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

