import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, DollarSign, Clock, GraduationCap, ArrowRight } from "lucide-react"
import universityTokyo from "@/assests/UniversityFreeImage/universityTokyo.jpg"
import wasedaUniversity from "@/assests/UniversityFreeImage/wasedaUniversity.jpg"
import kyotoUniversity from "@/assests/UniversityFreeImage/kyotoUniversity.jpg"

export const metadata: Metadata = {
  title: "All Japan Study Abroad Programs - BideshStudy",
  description: "Explore all available study abroad programs in Japan. Find the perfect program for your academic journey.",
}

type ProgramData = {
  id: string
  title: string
  university: string
  image: typeof universityTokyo
  description: string
  fee: string
  slug: string
  location?: string
  duration?: string
  language?: string
}

// All Japan programs
const japanPrograms: ProgramData[] = [
  {
    id: "engineering",
    title: "Engineering & Technology Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Study at top engineering universities with state-of-the-art facilities and cutting-edge research opportunities.",
    fee: "$9,800",
    slug: "university-of-tokyo",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese"
  },
  {
    id: "tokyo-business",
    title: "Business & Economics Programs",
    university: "University of Tokyo",
    image: wasedaUniversity,
    description: "Learn from leading business schools and gain insights into Japan's global economy and business practices.",
    fee: "$9,800",
    slug: "university-of-tokyo-business",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese"
  },
  {
    id: "tokyo-science",
    title: "Science & Research Programs",
    university: "University of Tokyo",
    image: kyotoUniversity,
    description: "Engage in cutting-edge scientific research at one of the world's leading research universities.",
    fee: "$9,800",
    slug: "university-of-tokyo-science",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese"
  },
  {
    id: "tokyo-arts",
    title: "Arts & Humanities Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Explore Japan's rich cultural heritage through traditional arts, literature, and modern creative expressions.",
    fee: "$9,800",
    slug: "university-of-tokyo-arts",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese"
  },
  {
    id: "tokyo-medicine",
    title: "Medicine & Health Sciences Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Study medicine and health sciences at one of Asia's premier medical institutions.",
    fee: "$10,500",
    slug: "university-of-tokyo-medicine",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese"
  },
  {
    id: "business",
    title: "Business & Economics Programs",
    university: "Waseda University",
    image: wasedaUniversity,
    description: "Learn from leading business schools and gain insights into Japan's global economy and business practices.",
    fee: "$9,800",
    slug: "waseda-university",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese"
  },
  {
    id: "arts",
    title: "Arts & Culture Programs",
    university: "Kyoto University",
    image: kyotoUniversity,
    description: "Explore Japan's rich cultural heritage through traditional arts, literature, and modern creative expressions.",
    fee: "$9,800",
    slug: "kyoto-university",
    location: "Kyoto, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese"
  }
]

export default function JapanProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <Link 
            href="/destinations/japan" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Japan</span>
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            All Japan Study Abroad Programs
          </h1>
          <p className="text-muted-foreground">
            Explore all available study abroad programs in Japan
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {japanPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-lg font-semibold text-primary mb-3">
                  {program.university}
                </p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {program.description}
                </p>
                <div className="space-y-2 mb-4">
                  {program.location && (
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{program.location}</span>
                    </div>
                  )}
                  {program.duration && (
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{program.duration}</span>
                    </div>
                  )}
                  {program.language && (
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>{program.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-lg font-bold text-primary">
                    <DollarSign className="h-5 w-5" />
                    <span>{program.fee}</span>
                  </div>
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
    </div>
  )
}

