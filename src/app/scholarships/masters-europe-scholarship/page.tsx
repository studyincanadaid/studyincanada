"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, ChevronRight } from "lucide-react"
import internationalStudentEurope from "@/assests/InternationalStudents/internationalStudentEurope.jpg.jpg"
import ApplyNowButton from "@/components/ApplyNowButton"

export default function MastersEuropeScholarshipPage() {
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
            <span className="text-foreground">Study a Master's in Europe Scholarship 2026</span>
          </div>

          {/* Header Section */}
          <div className="space-y-4 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#424242]">
              Study a Master's in Europe Scholarship 2026
            </h1>
            <p className="text-lg text-muted-foreground">
              Aug 14, 2025
            </p>
            <p className="text-base text-[#424242]">
              Apply for our €5000 master degree scholarship and let us help make your study abroad dreams a reality! Read on to learn about the requirements and how to apply.
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
                src={internationalStudentEurope}
                alt="Study a Master's in Europe Scholarship 2026"
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
                    <span className="text-[#424242]">€5,000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <span className="font-semibold text-[#424242]">Application deadline: </span>
                    <span className="text-[#424242]">May 15, 2026</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <div>
                    <span className="font-semibold text-[#424242]">Who it's for: </span>
                    <span className="text-[#424242]">International Master's students studying in Europe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-[#424242]">
            <div>
              <h2 className="text-2xl font-bold mb-4">Apply for our €5000 Master's degree scholarship and let us help make your study abroad dreams a reality</h2>
              <p className="text-base leading-relaxed mb-4">
                Looking for a Master's degree scholarship in Europe? We can help. At educations.com, we believe that students who study abroad become the next generation of globally minded leaders—and we want more of you to do it!
              </p>
              <p className="text-base leading-relaxed mb-4">
                Europe is an incredible place to study abroad, but many of you need a scholarship for Master's degree studies to make your dreams come true. That's why we're offering one Master's degree scholarship of up to €5000 to help cover your tuition fees and get you one step closer to your next great adventure.
              </p>
              <p className="text-base leading-relaxed mb-4">
                The scholarship will be awarded for the Fall 2026 semester onwards up to a value of €5000, and is open to students from any country who will be studying a Master's degree abroad at a European university or graduate school.
              </p>
              <p className="text-base leading-relaxed mb-4">
                The application period ends on May 15, 2026 at 12:00 CEST.
              </p>
              <p className="text-base leading-relaxed">
                Need help finding a program? Browse 22,000+ master's degrees in Europe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">educations.com Study a Master's in Europe Scholarship: Past Winners</h2>
              <h3 className="text-xl font-semibold mb-4">Our winners and finalists 🏆</h3>
              <p className="text-base leading-relaxed">
                Read about the past winners and finalists of our Study a Master's in Europe Scholarship to learn more about what made us select them.
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
                <li>You must have applied (or will apply) to a university or graduate school within Europe (see the FAQs below for an official list of European countries).</li>
                <li>You must have applied (or will apply) for a Master's-level degree starting in the Fall of 2026.</li>
                <li>The degree program must be studied in Europe or online via distance learning from a European institute.</li>
                <li>You must meet the entry requirements for the university or graduate school, including:
                  <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                    <li>Holding a valid undergraduate (Bachelor's) degree</li>
                    <li>Meeting language requirements for the program</li>
                  </ul>
                </li>
                <li>You must hold or be eligible to apply for a relevant study visa (if applicable).</li>
                <li>You must be studying abroad in a country:
                  <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                    <li>Where you do NOT hold citizenship</li>
                    <li>That you do NOT currently reside in (unless currently studying abroad).</li>
                  </ul>
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Ineligible to apply for this scholarship? Browse 550+ more Master's scholarships in our free Scholarship Directory.
              </p>
            </div>

            {/* Our ideal candidate */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our ideal candidate</h2>
              <p className="text-base font-semibold mb-4">Are you the next globally-minded leader?</p>
              <p className="text-base leading-relaxed mb-4">
                If you're looking for a scholarship in Europe, we know you're well on your path to studying abroad. Having taken this leap, it's clear that you have a courageous and adventurous spirit. What else are we looking for in a candidate?
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
                <li>Globally minded and interested in other cultures</li>
                <li>Motivated and inspired to positively change the world</li>
                <li>A high academic achiever with consistently outstanding grades</li>
                <li>Involved in extra-curricular groups and activities</li>
                <li>Excited to begin your adventure and share your story with the world!</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Don't know where to study? Check out our list of the top 10 countries in Europe to study abroad in.
              </p>
            </div>

            {/* Key dates */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key dates for Master's in Europe 2026 Scholarship</h2>
              <div className="space-y-2 text-base leading-relaxed mb-4">
                <p><span className="font-semibold">Applications open:</span> 15 May 2025, 14:00 CEST</p>
                <p><span className="font-semibold">Applications close:</span> 15 May 2026, 12:00 CEST</p>
                <p><span className="font-semibold">Finalists notified:</span> 15-26 June 2026</p>
                <p><span className="font-semibold">Winner announced:</span> 13-17 July 2026</p>
                <p><span className="font-semibold">Scholarship paid out:</span> Fall 2026 semester</p>
              </div>
              <p className="text-base font-semibold mb-2">For you who applies for the Study a Master's in Europe Scholarship 2025, here are the notifications timeline:</p>
              <div className="space-y-2 text-base leading-relaxed">
                <p><span className="font-semibold">Finalists notified:</span> 9-15 June 2025</p>
                <p><span className="font-semibold">Winner announced:</span> 7-11 July 2025</p>
                <p><span className="font-semibold">Scholarship paid out:</span> Fall 2025 semester</p>
              </div>
            </div>

            {/* Application requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Application requirements</h2>
              <p className="text-base leading-relaxed mb-4">
                To be considered, submit your completed application by May 15, 2026, at 12:00 CEST.
              </p>
              <p className="text-base font-semibold mb-2">The application consists of:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Filling out a form</li>
                <li>Answering the questions in the application form</li>
              </ul>
              <p className="text-base leading-relaxed mb-4">
                Please note that applications must be submitted in English. Applications in other languages will not be considered.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Similarly, applications, including a CV, academic records, certifications, or documents other than the application essay, will not be evaluated.
              </p>
              <p className="text-base leading-relaxed mb-2">If selected as a finalist, you may be asked to provide:</p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>Proof of acceptance into the university in the form of a copy of your acceptance letter</li>
                <li>Proof of undergraduate qualifications in the form of a copy of your transcript</li>
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
              <p className="text-base text-muted-foreground italic">Lugano, Switzerland</p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold mb-4">FAQs about this scholarship</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How many Master's scholarships will be awarded?</h3>
                  <p className="text-base leading-relaxed">There is only one scholarship per year available, which will be awarded to one individual.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">When will I find out if I have won the Master's degree scholarship?</h3>
                  <p className="text-base leading-relaxed mb-2">The scholarship finalists will be contacted between June 15th and 26th, 2026.</p>
                  <p className="text-base leading-relaxed">The winner will be announced on our website and social media channels between July 13th and 17th, 2026.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I edit my application after I submit it?</h3>
                  <p className="text-base leading-relaxed mb-2">No, your application cannot be edited once you submit it. Please ensure you complete the application form in English and with all the correct information before you click 'Submit.'</p>
                  <p className="text-base leading-relaxed">If you have questions about an application you have submitted, you can email our scholarship team at scholarships@educations.com.</p>
                  <p className="text-base leading-relaxed">Please do not submit applications via email. Applications and other documents sent via email will not be considered and will be discarded.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">What do I have to submit with my application?</h3>
                  <p className="text-base leading-relaxed mb-2">For the initial scholarship application, you need only fill in the form and answer the questions listed.</p>
                  <p className="text-base leading-relaxed">If you're selected as a finalist, you'll be asked to supply further documentation to prove your eligibility further.</p>
                  <p className="text-base leading-relaxed">If you want to get more practical tips on how to improve your scholarship application, have a look at our article on scholarship tips and advice.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I get reimbursed if I have already paid my tuition fees for the Fall 2026 semester?</h3>
                  <p className="text-base leading-relaxed">Unfortunately, we cannot reimburse tuition fees that have already been paid. The scholarship fund can only be used towards upcoming tuition fees and is paid directly to your university.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Can this scholarship be used towards other expenses?</h3>
                  <p className="text-base leading-relaxed">The scholarship fund can only be used towards your tuition fees. No living costs, accommodation rental, travel expenses, or other semester fees can be covered.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I email or send you my application by post?</h3>
                  <p className="text-base leading-relaxed">No, all applications must be submitted via the official online form (link below). If you email or post your application, we'll not include it for consideration.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Is this scholarship for degrees taught in English only?</h3>
                  <p className="text-base leading-relaxed mb-2">No, this Master's degree scholarship is open to programs taught in any language.</p>
                  <p className="text-base leading-relaxed">However, the application and essay for this scholarship should be in English only. Applications and essays submitted in other languages will not be evaluated.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Is this scholarship open to me if I'm studying at a school that is not a university?</h3>
                  <p className="text-base leading-relaxed">Yes, as long as it's a higher education-level institute based in Europe.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">I have already started studying for my Master's degree. Am I still eligible?</h3>
                  <p className="text-base leading-relaxed">If you start your Master's degree studies before Fall 2026, unfortunately, you're not eligible.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">I am applying to study for my degree online. Am I eligible for this scholarship?</h3>
                  <p className="text-base leading-relaxed mb-2">Yes, this scholarship covers Master's tuition fees for online degrees provided by a higher education institute based in Europe (see countries listed below).</p>
                  <p className="text-base leading-relaxed">You don't need to be living in Europe or studying on campus and in-person to be eligible for this scholarship, however, you cannot be a citizen of or currently residing in that country (unless currently studying abroad).</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Which countries can I study abroad in to apply for this Master's scholarship in Europe?</h3>
                  <p className="text-base leading-relaxed">Check all eligible countries in our article: <Link href="#" className="text-primary underline hover:text-primary/80">Eligible Countries</Link></p>
                </div>
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

