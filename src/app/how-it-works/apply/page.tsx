import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle2, 
  FileText, 
  Upload,
  Calendar,
  DollarSign,
  Mail,
  CheckCircle,
  ArrowRight,
  ClipboardList,
  Shield,
  Clock,
  Search,
  FolderOpen,
  Edit,
  Send,
  Eye,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "How to Apply - BideshStudy",
  description: "Step-by-step guide to applying for study abroad programs. Learn about requirements, documents, deadlines, and the application process.",
}

export default function HowToApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1BB685]/10 via-background to-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#424242] mb-4">
              How to Apply
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive guide to navigating the study abroad application process, from gathering documents to submitting your application.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <Link href="/how-it-works" className="hover:text-primary">How It Works</Link>
          <span className="mx-2">|</span>
          <span>How to Apply</span>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              Applying for a study abroad program may seem daunting, but with proper preparation and guidance, the process can be smooth and straightforward. 
              This guide will walk you through each step of the application process, from initial research to final submission, helping you submit a strong 
              application that maximizes your chances of acceptance.
            </p>
          </div>
        </section>

        {/* Application Checklist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#424242] mb-6 flex items-center gap-3">
            <ClipboardList className="h-8 w-8 text-[#1BB685]" />
            Application Checklist
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Academic transcripts (SSC, HSC, BSc, MSc)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Passport copy (valid for at least 6 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>English proficiency test results (IELTS/TOEFL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Statement of Purpose (SOP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Letters of Recommendation (LOR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Financial proof documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Photographs (passport size)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#1BB685]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#1BB685]" />
                </div>
                <CardTitle className="text-xl">Important Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Start preparing documents at least 3-6 months before application deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Ensure all documents are translated and notarized if required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Keep digital copies of all documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Double-check all information for accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Meet language proficiency requirements early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                    <span>Have financial documents ready for visa application</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#424242] mb-8 text-center">
            Step-by-Step Application Process
          </h2>
          
          <div className="relative">
            {/* Timeline Line - Desktop Only */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1BB685] via-[#1BB685]/50 to-[#1BB685]"></div>
            
            <div className="space-y-8 md:space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1BB685] to-[#16a075] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                    <Search className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-border hover:border-[#1BB685]/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[#1BB685] bg-[#1BB685]/10 px-3 py-1 rounded-full">STEP 1</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        Research & Select Programs
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Start by researching available programs that match your academic interests, career goals, and budget. Use our program search tools to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Compare programs across different countries and universities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Check admission requirements and deadlines</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Review tuition fees and living costs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Consider language requirements</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1BB685] to-[#16a075] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                    <FolderOpen className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-border hover:border-[#1BB685]/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[#1BB685] bg-[#1BB685]/10 px-3 py-1 rounded-full">STEP 2</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        Gather Required Documents
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Collect all necessary documents early. This includes academic transcripts, passport, English proficiency test results, 
                      Statement of Purpose, Letters of Recommendation, and financial proof. Make sure:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">All documents are current and valid</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Academic documents are officially translated if required</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">You have certified copies of all transcripts</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Passport is valid for at least 6 months beyond your intended stay</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1BB685] to-[#16a075] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                    <Edit className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-border hover:border-[#1BB685]/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[#1BB685] bg-[#1BB685]/10 px-3 py-1 rounded-full">STEP 3</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        Complete Application Form
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Fill out the application form carefully and accurately. This is your opportunity to showcase your qualifications and motivations. 
                      Pay special attention to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Personal information accuracy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Academic history and achievements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Statement of Purpose clarity and authenticity</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Program and course selection</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1BB685] to-[#16a075] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                    <Send className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-border hover:border-[#1BB685]/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[#1BB685] bg-[#1BB685]/10 px-3 py-1 rounded-full">STEP 4</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        Submit Application & Documents
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Submit your application and all supporting documents before the deadline. You can submit:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Online through our application portal</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">By email with all documents attached</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">In person at our office (if applicable)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Ensure all files are in the correct format and size</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1BB685] to-[#16a075] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                    <Eye className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-border hover:border-[#1BB685]/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[#1BB685] bg-[#1BB685]/10 px-3 py-1 rounded-full">STEP 5</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        Application Review & Follow-up
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      After submission, your application will be reviewed by our team and the university. During this time:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Monitor your email for updates or additional document requests</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Respond promptly to any inquiries</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Keep track of application status</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Be patient - review processes can take 4-8 weeks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 6 */}
              <div className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1BB685] to-[#16a075] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                    <Award className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>
                <Card className="flex-1 border-2 border-border hover:border-[#1BB685]/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[#1BB685] bg-[#1BB685]/10 px-3 py-1 rounded-full">STEP 6</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        Receive Decision & Next Steps
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Once you receive an acceptance letter, congratulations! The next steps include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Confirm your acceptance by the deadline</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Pay required deposits or fees</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Begin visa application process</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Arrange accommodation and travel</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Deadlines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#424242] mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-[#1BB685]" />
            Application Deadlines
          </h2>
          
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#424242] mb-3">
                    Fall Semester Intake
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                      <span>Application Deadline: March - May</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                      <span>Program Start: September - October</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#424242] mb-3">
                    Spring Semester Intake
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                      <span>Application Deadline: September - November</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-[#1BB685] mt-0.5 flex-shrink-0" />
                      <span>Program Start: January - February</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Deadlines vary by university and program. Always check specific deadlines for your chosen program and start the application process early to avoid last-minute stress.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#1BB685]/10 to-[#1BB685]/5 border border-[#1BB685]/20 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-4">
            Ready to Start Your Application?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced team is here to guide you through every step of the application process. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-[#1BB685] hover:bg-[#1BB685]/90 text-white">
                Start Application
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2">
                Get Help
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

