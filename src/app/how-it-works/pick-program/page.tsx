import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  Globe, 
  Users, 
  BookOpen,
  Compass,
  Lightbulb,
  ArrowRight,
  Search
} from "lucide-react"

export const metadata: Metadata = {
  title: "How to Pick a Program - BideshStudy",
  description: "Learn how to choose the perfect study abroad program for your goals, budget, and interests. Expert guide to finding your ideal study abroad experience.",
}

export default function HowToPickAProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1BB685]/10 via-background to-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#424242] mb-4">
              How to Pick a Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your comprehensive guide to choosing the perfect study abroad program that aligns with your goals, budget, and dreams.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>How to Pick a Program</span>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              Choosing the right study abroad program is one of the most important decisions you'll make on your educational journey. 
              With hundreds of programs available across the globe, finding the perfect match can seem overwhelming. This guide will 
              walk you through the essential factors to consider, helping you make an informed decision that sets you up for success.
            </p>
          </div>
        </section>

        {/* Key Factors to Consider */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#424242] mb-6 flex items-center gap-3">
            <Compass className="h-8 w-8 text-[#1BB685]" />
            Key Factors to Consider
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Factor 1: Academic Goals */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Academic Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Consider your major, course requirements, and academic interests. Does the program offer courses that align with 
                  your degree plan? Will credits transfer back to your home institution?
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Course availability and quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Credit transfer policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Language of instruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>University rankings and reputation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Factor 2: Location */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The destination plays a crucial role in your study abroad experience. Think about climate, culture, safety, 
                  language, and proximity to other countries you'd like to explore.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Cultural fit and comfort level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Cost of living</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Safety and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Travel opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Factor 3: Budget */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Understand the total cost including tuition, housing, meals, transportation, visa fees, insurance, and personal expenses. 
                  Look for scholarships and financial aid opportunities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Tuition and program fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Living expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Scholarship availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Hidden costs and fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Factor 4: Program Duration */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Program Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Programs range from short-term (summer or winter breaks) to semester programs to full academic years. 
                  Consider your academic schedule and personal commitments.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Semester (4-5 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Academic Year (8-10 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Summer/Winter Programs (4-8 weeks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Full Degree Programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Factor 5: Support Services */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Look for programs that offer comprehensive support including orientation, on-site staff, housing assistance, 
                  cultural activities, and 24/7 emergency support.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Pre-departure orientation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>On-site program coordinator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Housing assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Emergency support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Factor 6: Field of Study */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Field of Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Different destinations excel in different fields. Research which countries and universities are known for 
                  excellence in your area of study.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Engineering & Technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Business & Economics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Arts & Humanities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Natural & Applied Sciences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#424242] mb-6">
            Step-by-Step Guide
          </h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#424242] mb-3">
                      Define Your Goals
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Start by clearly defining what you want to achieve from your study abroad experience. Are you looking to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Improve language skills?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Explore a specific career field?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Experience a new culture?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Build your resume with international experience?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#424242] mb-3">
                      Research Programs
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Use our program search tool to explore options. Filter by:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Destination country or region</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Field of study</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Program duration (semester, year, summer)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Budget range</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#424242] mb-3">
                      Compare Your Options
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Create a comparison list with your top 3-5 programs. Evaluate:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Cost breakdown and value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Course offerings and quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Support services provided</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Student reviews and testimonials</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#424242] mb-3">
                      Consult with Advisors
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Speak with our study abroad experts and your academic advisor. They can help you:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Verify credit transfer policies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Understand application requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Explore scholarship opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#1BB685] mt-1 flex-shrink-0" />
                        <span>Address any concerns or questions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold text-xl">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#424242] mb-3">
                      Make Your Decision
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      After thorough research and consultation, choose the program that best aligns with your goals, budget, and interests. 
                      Remember, there's no "perfect" program, but there is a right program for you!
                    </p>
                    <div className="mt-4">
                      <Link href="/programs">
                        <Button className="bg-[#1BB685] hover:bg-[#1BB685]/90 text-white">
                          <Search className="h-4 w-4 mr-2" />
                          Browse All Programs
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#424242] mb-6 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-[#1BB685]" />
            Expert Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#424242] mb-4">
                Start Early
              </h3>
              <p className="text-muted-foreground">
                Begin researching programs at least 6-12 months before your intended departure date. This gives you time to 
                complete applications, secure visas, and apply for scholarships.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#424242] mb-4">
                Read Student Reviews
              </h3>
              <p className="text-muted-foreground">
                Student reviews provide valuable insights into the real experience. Look for reviews from students who studied 
                in your field of interest or at your target destination.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#424242] mb-4">
                Consider Your Comfort Zone
              </h3>
              <p className="text-muted-foreground">
                While stepping outside your comfort zone is part of the experience, choose a destination where you'll feel 
                safe and supported. You can always travel to more challenging locations during breaks.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#424242] mb-4">
                Think Long-Term
              </h3>
              <p className="text-muted-foreground">
                Consider how this experience will benefit your career and personal growth. Will it help you stand out to 
                employers? Will it open doors for future opportunities?
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#1BB685]/10 to-[#1BB685]/5 border border-[#1BB685]/20 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-4">
              Ready to Find Your Perfect Program?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Use our comprehensive search tool to filter programs by destination, field of study, duration, and budget. 
              Find the program that's perfect for you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" className="bg-[#1BB685] hover:bg-[#1BB685]/90 text-white">
                  <Search className="h-5 w-5 mr-2" />
                  Search Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <Globe className="h-5 w-5 mr-2" />
                  Contact an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

