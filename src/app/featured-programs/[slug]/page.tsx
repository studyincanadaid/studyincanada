"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, DollarSign, GraduationCap, MapPin, Clock, Users, Award, Globe, Building, BookOpen, Star, ExternalLink, CheckCircle2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"
import ApplyNowButton from "@/components/ApplyNowButton"

// Import images
import udayanaUniversity from "@/assests/UniversityCampus/Udayana University.jpg"
import lciBarcelona from "@/assests/UniversityCampus/LCI Barcelona.jpg"
import universityOfPecs from "@/assests/UniversityCampus/University of Pécs.jpg"
import universidadLCI from "@/assests/UniversityCampus/Universidad LCI.jpg"
import alAkhawaynUniversity from "@/assests/UniversityCampus/Al Akhawayn University.jpg"
import mahidolUniversity from "@/assests/UniversityCampus/Mahidol University.jpg"

const getCountryFlag = (country: string): string => {
  const countryFlagMap: Record<string, string> = {
    "Bali": "🇮🇩",
    "Indonesia": "🇮🇩",
    "Spain": "🇪🇸",
    "Hungary": "🇭🇺",
    "Costa Rica": "🇨🇷",
    "Morocco": "🇲🇦",
    "Thailand": "🇹🇭",
  }
  return countryFlagMap[country] || "📍"
}

type FeaturedProgramData = {
  id: string
  name: string
  location: string
  country: string
  image: typeof udayanaUniversity
  coverImage: typeof udayanaUniversity
  logo: typeof udayanaUniversity
  rating: number
  students: string
  programs: number
  founded: string
  type: string
  website: string
  description: string
  tuitionRange: string
  acceptanceRate: string
  intakes: string[]
  features: string[]
  popularPrograms: { name: string; duration: string; fee: string }[]
}

const featuredProgramsData: Record<string, FeaturedProgramData> = {
  "udayana-university-bali": {
    id: "1",
    name: "Udayana University",
    location: "Bali, Indonesia",
    country: "Bali",
    image: udayanaUniversity,
    coverImage: udayanaUniversity,
    logo: udayanaUniversity,
    rating: 4.5,
    students: "25,000+",
    programs: 85,
    founded: "1962",
    type: "Public University",
    website: "https://www.unud.ac.id",
    description: "Udayana University is a prestigious public university located in Bali, Indonesia. Established in 1962, it offers a diverse range of academic programs and provides students with a unique opportunity to study in one of the world's most beautiful destinations while experiencing rich Balinese culture.",
    tuitionRange: "$9,995/semester",
    acceptanceRate: "65%",
    intakes: ["Fall Semester (September)", "Spring Semester (January)"],
    features: [
      "Immersive cultural experience in Bali",
      "Beautiful campus environment",
      "Diverse academic programs",
      "Affordable tuition fees",
      "Strong international student support",
      "Rich cultural heritage and traditions"
    ],
    popularPrograms: [
      { name: "Business Administration", duration: "4 Years", fee: "$9,995/semester" },
      { name: "Tourism and Hospitality", duration: "4 Years", fee: "$9,995/semester" },
      { name: "Indonesian Language & Culture", duration: "1-2 Semesters", fee: "$9,995/semester" },
      { name: "Environmental Studies", duration: "4 Years", fee: "$9,995/semester" },
    ]
  },
  "lci-barcelona-spain": {
    id: "2",
    name: "LCI Barcelona",
    location: "Barcelona, Spain",
    country: "Spain",
    image: lciBarcelona,
    coverImage: lciBarcelona,
    logo: lciBarcelona,
    rating: 4.6,
    students: "3,000+",
    programs: 45,
    founded: "1989",
    type: "Private Design School",
    website: "https://www.lasalle-campus-barcelona.com",
    description: "LCI Barcelona is a leading design school offering innovative programs in creative fields. Located in the vibrant city of Barcelona, students can immerse themselves in European culture while developing their creative skills in a dynamic, international environment.",
    tuitionRange: "$14,495/semester",
    acceptanceRate: "70%",
    intakes: ["Fall Semester (September)", "Spring Semester (January)"],
    features: [
      "World-class design education",
      "Prime location in Barcelona",
      "Industry connections and internships",
      "Modern facilities and studios",
      "Multicultural student body",
      "Career-focused curriculum"
    ],
    popularPrograms: [
      { name: "Graphic Design", duration: "4 Years", fee: "$14,495/semester" },
      { name: "Fashion Design", duration: "4 Years", fee: "$14,495/semester" },
      { name: "Interior Design", duration: "4 Years", fee: "$14,495/semester" },
      { name: "Digital Design", duration: "4 Years", fee: "$14,495/semester" },
    ]
  },
  "university-of-pecs-hungary": {
    id: "3",
    name: "University of Pécs",
    location: "Pécs, Hungary",
    country: "Hungary",
    image: universityOfPecs,
    coverImage: universityOfPecs,
    logo: universityOfPecs,
    rating: 4.4,
    students: "30,000+",
    programs: 120,
    founded: "1367",
    type: "Public Research University",
    website: "https://www.pte.hu",
    description: "The University of Pécs is Hungary's oldest university, founded in 1367. It offers a wide range of programs in English and provides students with an excellent opportunity to study in the heart of Europe at an affordable cost while experiencing Hungarian culture.",
    tuitionRange: "$8,495/semester",
    acceptanceRate: "60%",
    intakes: ["Fall Semester (September)", "Spring Semester (January)", "Summer Break (June-August)"],
    features: [
      "Historic university with rich tradition",
      "Affordable European education",
      "Wide range of English-taught programs",
      "Central European location",
      "Modern campus facilities",
      "Strong international community"
    ],
    popularPrograms: [
      { name: "Medicine", duration: "6 Years", fee: "$16,000/year" },
      { name: "Business Administration", duration: "4 Years", fee: "$8,495/semester" },
      { name: "Computer Science", duration: "4 Years", fee: "$8,495/semester" },
      { name: "International Relations", duration: "4 Years", fee: "$8,495/semester" },
    ]
  },
  "universidad-lci-veritas-costa-rica": {
    id: "4",
    name: "Universidad LCI Veritas",
    location: "San José, Costa Rica",
    country: "Costa Rica",
    image: universidadLCI,
    coverImage: universidadLCI,
    logo: universidadLCI,
    rating: 4.3,
    students: "2,500+",
    programs: 35,
    founded: "1989",
    type: "Private Design University",
    website: "https://www.veritas.cr",
    description: "Universidad LCI Veritas is a leading design and art university in Costa Rica. It offers students the opportunity to study in a tropical paradise while receiving quality education in creative fields, with a focus on sustainability and Latin American culture.",
    tuitionRange: "$10,995/semester",
    acceptanceRate: "75%",
    intakes: ["Fall Semester (September)", "Spring Semester (January)", "Summer Break (June-August)", "Winter Break (December-January)"],
    features: [
      "Unique tropical study environment",
      "Focus on sustainability and design",
      "Latin American cultural immersion",
      "Small class sizes",
      "Spanish language learning opportunities",
      "Beautiful campus in San José"
    ],
    popularPrograms: [
      { name: "Sustainable Design", duration: "4 Years", fee: "$10,995/semester" },
      { name: "Digital Media", duration: "4 Years", fee: "$10,995/semester" },
      { name: "Photography", duration: "4 Years", fee: "$10,995/semester" },
      { name: "Architecture", duration: "5 Years", fee: "$10,995/semester" },
    ]
  },
  "al-akhawayn-university-morocco": {
    id: "5",
    name: "Al Akhawayn University",
    location: "Ifrane, Morocco",
    country: "Morocco",
    image: alAkhawaynUniversity,
    coverImage: alAkhawaynUniversity,
    logo: alAkhawaynUniversity,
    rating: 4.5,
    students: "2,000+",
    programs: 40,
    founded: "1993",
    type: "Private University",
    website: "https://www.aui.ma",
    description: "Al Akhawayn University is a premier English-language university in Morocco. Located in the picturesque mountain town of Ifrane, it offers American-style education in a unique North African setting, combining academic excellence with cultural richness.",
    tuitionRange: "$10,995/semester",
    acceptanceRate: "55%",
    intakes: ["Fall Semester (September)", "Spring Semester (January)"],
    features: [
      "American-style education system",
      "English as the language of instruction",
      "Beautiful mountain campus",
      "Small student-to-faculty ratio",
      "Strong international partnerships",
      "Unique North African cultural experience"
    ],
    popularPrograms: [
      { name: "Business Administration", duration: "4 Years", fee: "$10,995/semester" },
      { name: "International Studies", duration: "4 Years", fee: "$10,995/semester" },
      { name: "Engineering", duration: "4 Years", fee: "$10,995/semester" },
      { name: "Humanities", duration: "4 Years", fee: "$10,995/semester" },
    ]
  },
  "mahidol-university-thailand": {
    id: "6",
    name: "Mahidol University",
    location: "Bangkok, Thailand",
    country: "Thailand",
    image: mahidolUniversity,
    coverImage: mahidolUniversity,
    logo: mahidolUniversity,
    rating: 4.7,
    students: "35,000+",
    programs: 150,
    founded: "1888",
    type: "Public Research University",
    website: "https://www.mahidol.ac.th",
    description: "Mahidol University is one of Thailand's most prestigious universities and a leading research institution in Southeast Asia. It offers world-class education across various disciplines and provides students with a unique opportunity to study in the heart of Asia.",
    tuitionRange: "$8,495/semester",
    acceptanceRate: "50%",
    intakes: ["Fall Semester (September)", "Spring Semester (January)", "Summer Break (June-August)"],
    features: [
      "Top-ranked university in Southeast Asia",
      "World-class research facilities",
      "Diverse range of programs",
      "Strong international connections",
      "Affordable tuition fees",
      "Vibrant student life in Bangkok"
    ],
    popularPrograms: [
      { name: "Medicine", duration: "6 Years", fee: "$15,000/year" },
      { name: "Business Administration", duration: "4 Years", fee: "$8,495/semester" },
      { name: "Engineering", duration: "4 Years", fee: "$8,495/semester" },
      { name: "Public Health", duration: "4 Years", fee: "$8,495/semester" },
    ]
  }
}

export default function FeaturedProgramDetails() {
  const params = useParams()
  const slug = params?.slug as string
  const [activeTab, setActiveTab] = useState("overview")

  const program = featuredProgramsData[slug] || featuredProgramsData["udayana-university-bali"]

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 lg:h-96 mt-16">
        <Image
          src={program.coverImage}
          alt={program.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Institution Header */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-background bg-card overflow-hidden shadow-lg">
            <Image
              src={program.logo}
              alt={program.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <Link href="/#featured-programs" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Featured Programs
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {program.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{getCountryFlag(program.country)}</span>
                <span>{program.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="font-medium text-foreground">{program.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                <span>{program.type}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <ApplyNowButton variant="button" className="inline-block">
                <Button size="lg" className="shadow-button">
                  Apply Now
                </Button>
              </ApplyNowButton>
              <a href={program.website} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="w-full">
                <div className="flex items-center border-b mb-6">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-4 py-3 border-b-2 transition-colors ${
                      activeTab === "overview"
                        ? "border-primary text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("programs")}
                    className={`px-4 py-3 border-b-2 transition-colors ${
                      activeTab === "programs"
                        ? "border-primary text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Programs
                  </button>
                  <button
                    onClick={() => setActiveTab("admissions")}
                    className={`px-4 py-3 border-b-2 transition-colors ${
                      activeTab === "admissions"
                        ? "border-primary text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Admissions
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "overview" && (
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-foreground mb-4">About {program.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#1BB685] mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "programs" && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h3>
                    <div className="space-y-4">
                      {program.popularPrograms.map((programItem, index) => (
                        <Card key={index} className="border-border/50">
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">{programItem.name}</h4>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {programItem.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <DollarSign className="w-4 h-4" />
                                    {programItem.fee}
                                  </span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Learn More
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "admissions" && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Admission Requirements</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>General requirements for international students:</p>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Completed application form</li>
                        <li>Academic transcripts and certificates</li>
                        <li>English proficiency test (IELTS/TOEFL)</li>
                        <li>Statement of Purpose (SOP)</li>
                        <li>Letters of Recommendation</li>
                        <li>Valid passport copy</li>
                        <li>Application fee</li>
                      </ul>
                      <p className="mt-4">
                        Contact our consultants for personalized guidance on meeting the admission requirements.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Quick Info */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Founded
                      </span>
                      <span className="font-medium text-foreground">{program.founded}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Students
                      </span>
                      <span className="font-medium text-foreground">{program.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Programs
                      </span>
                      <span className="font-medium text-foreground">{program.programs}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Acceptance
                      </span>
                      <span className="font-medium text-foreground">{program.acceptanceRate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Tuition
                      </span>
                      <span className="font-medium text-foreground text-sm">{program.tuitionRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Intake Periods</h3>
                  <div className="flex flex-wrap gap-2">
                    {program.intakes.map((intake, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {intake}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Need Help Applying?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our experts can guide you through the entire application process
                  </p>
                  <ApplyNowButton variant="button" className="w-full">
                    <Button className="w-full shadow-button">
                      Book Free Consultation
                    </Button>
                  </ApplyNowButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
