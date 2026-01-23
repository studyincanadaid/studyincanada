"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, ChevronRight } from "lucide-react"
import adultLearnersScholarship from "@/assests/InternationalStudents/adultLearnersScholarship.jpg"
import ApplyNowButton from "@/components/ApplyNowButton"

export default function AdultLearnersScholarshipPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Header Section with Background */}
      <div className="w-full bg-[#F1F1E6] py-8 md:py-12">
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
            <span className="text-foreground">Adult Learners Scholarship 2025</span>
          </div>

          {/* Header Section */}
          <div className="space-y-4 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#424242]">
              Adult Learners Scholarship 2025
            </h1>
            <p className="text-lg text-muted-foreground">
              Dec 16, 2025
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
                src={adultLearnersScholarship}
                alt="Adult Learners Scholarship 2025"
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
                    <span className="text-[#424242]">$4,000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <span className="font-semibold text-[#424242]">Application deadline: </span>
                    <span className="text-[#424242]">June 24th, 2026</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <div>
                    <span className="font-semibold text-[#424242]">Who it's for: </span>
                    <span className="text-[#424242]">Adults over 25 years old who are pursuing undergraduate, graduate, or post-graduate studies.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-[#424242]">
            <div>
              <h2 className="text-2xl font-bold mb-4">Are you 25 or older and ready to take the next step in your education journey? We can help!</h2>
              <p className="text-base leading-relaxed mb-4">
                This scholarship is designed specifically for adult learners pursuing an undergraduate, graduate, or post-graduate degree globally. At educations.com, we believe it's never too late to follow your passion and build a globally minded future.
              </p>
              <p className="text-base leading-relaxed mb-4">
                That's why we're awarding one scholarship worth up to $4,000 to support tuition costs for students beginning their master's studies abroad in Fall 2026 or later.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Whether you're switching careers, upskilling, or finally chasing a long-held dream—this opportunity is made for you.
              </p>
              <p className="text-base leading-relaxed mb-4">
                This scholarship is open to applicants of any nationality, as long as they are 25 years or older and applying to a degree anywhere in the world.
              </p>
              <p className="text-base leading-relaxed">
                The application period for this opportunity ends on 24 June 2026 at 12:00 CEST.
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
              <p className="text-base font-semibold mb-4">To apply for our scholarship:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
                <li>You must be at least 25 years old to participate.</li>
                <li>You must have a plan to enroll in any undergraduate, graduate, or post-graduate (doctoral level) degree program at a college, university, or institute of higher education.</li>
                <li>You must meet the entry requirements for the university or college of your choice.</li>
                <li>Hold valid credentials required for enrollment.</li>
                <li>Meet the language requirements for the program.</li>
                <li>You must hold or be eligible to apply for a relevant study visa.</li>
                <li>You must not be a citizen or permanent resident of the country to which you are applying.</li>
              </ul>
            </div>

            {/* Our ideal candidate */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our ideal candidate</h2>
              <p className="text-base leading-relaxed mb-4">
                Are you an ambitious professional with a global outlook excited to elevate your career?
              </p>
              <p className="text-base leading-relaxed mb-4">
                If you're an adult learner or a professional seeking to study abroad—whether starting anew, pursuing a career transition, or enhancing your qualifications—this scholarship is here to support and inspire your journey!
              </p>
              <p className="text-base leading-relaxed mb-4">
                Choosing to study in a new country is a remarkable decision that showcases your commitment to personal growth, global awareness, and making a positive impact in your field.
              </p>
              <p className="text-base leading-relaxed mb-4">
                We are eager to discover candidates who are not only academically impressive but also culturally curious, purpose-driven, and enthusiastic about contributing diverse viewpoints in the classroom and beyond.
              </p>
              <p className="text-base font-semibold mb-2">You are:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
                <li>A global mindset and a genuine enthusiasm for cross-cultural experiences.</li>
                <li>Plans to enroll in, or are currently enrolled in, an undergraduate, graduate, or postgraduate program abroad.</li>
                <li>An impressive academic record that reflects your dedication and excellence in your field.</li>
                <li>Active engagement in community initiatives, professional growth, or leadership roles.</li>
                <li>A readiness to embark on an exciting new chapter of your educational and professional journey in a different country, sharing your unique story with the world.</li>
              </ul>
            </div>

            {/* Key dates */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key dates for the 2025 Adult Learner Scholarship</h2>
              <div className="space-y-2 text-base leading-relaxed">
                <p><span className="font-semibold">Applications open:</span> 24 June 2025, 15:00 CEST</p>
                <p><span className="font-semibold">Applications close:</span> 24 June 2026, 12:00 CEST</p>
                <p><span className="font-semibold">Finalists notified:</span> 22 July - 31 July 2026</p>
                <p><span className="font-semibold">Winner announced:</span> 10 August 2026</p>
                <p><span className="font-semibold">Scholarship paid out:</span> Fall 2026 semester</p>
              </div>
            </div>

            {/* Application requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Application requirements</h2>
              <p className="text-base leading-relaxed mb-4">
                To be considered, submit your completed application by June 24th, 2026, at 12:00 CEST.
              </p>
              <p className="text-base font-semibold mb-2">The application consists of:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Filling out a form</li>
                <li>Answering the questions in the application form</li>
              </ul>
              <p className="text-base leading-relaxed mb-4">
                <span className="font-semibold">Please note:</span> Applications need to be submitted in English. Applications in other languages won't be considered.
              </p>
              <p className="text-base leading-relaxed mb-2">If you're selected as a finalist, you'll be asked to provide:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Proof of acceptance into a university in the form of a copy of your acceptance letter</li>
                <li>Proof that you've completed the relevant qualifications for your selected program in the form of a copy of your transcripts or other applicable documents</li>
                <li>A copy of your passport to prove your identity</li>
              </ul>
              <p className="text-base leading-relaxed mb-4">
                It is very important that all copies of documents are color scans. Please have these documents on hand should you be selected as a finalist. You will have 7 days from the time we tell you that you're a finalist to send us this documentation.
              </p>
              <p className="text-base font-semibold mb-2">Every finalist will receive USD 150 gift vouchers</p>
              <p className="text-base font-semibold mb-2">Therefore, you'll also need to:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Tell us that you want to accept our gift within 3 days of being told that you unfortunately have not won our scholarship - but are still listed as one of our finalists.</li>
                <li>Make a post and tag us on Instagram, LinkedIn, and/or TikTok to tell others about yourself as the finalist.</li>
              </ul>
              <p className="text-base font-semibold mb-2">If selected as our winner, you'll need to:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Tell us that you want to accept our scholarship within 3 days of being told that you have won.</li>
                <li>Make a post and tag us on Instagram, LinkedIn, and/or TikTok to tell others about yourself as the winner!</li>
              </ul>
              <div className="space-y-2 text-base">
                <p>
                  <Link href="#" className="text-primary underline hover:text-primary/80">👉 Read the full Terms & Conditions here.</Link>
                </p>
                <p>
                  <Link href="#" className="text-primary underline hover:text-primary/80">👉 Have a question about our scholarships? See the scholarship FAQ.</Link>
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

