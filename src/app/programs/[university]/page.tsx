import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, DollarSign, GraduationCap, MapPin, Clock, Users, Award, Globe, Building2, BookOpen, Heart, Download, FileText, Phone, Sparkles, ArrowRight, Star, ExternalLink, Check, BookMarked, GraduationCap as GradCap, FileCheck } from "lucide-react"
import ApplyNowButton from "@/components/ApplyNowButton"
import universityTokyo from "@/assests/UniversityFreeImage/universityTokyo.jpg"
import wasedaUniversity from "@/assests/UniversityFreeImage/wasedaUniversity.jpg"
import kyotoUniversity from "@/assests/UniversityFreeImage/kyotoUniversity.jpg"
import campusFriends from "@/assests/UniversityFreeSubImage/campusFriendsCulturalsProgram.jpg"
import friendshipToCampus from "@/assests/UniversityFreeSubImage/friendshipToCampus.jpg"
import lectureCollege from "@/assests/UniversityFreeSubImage/lecture-college.jpg"
import examTimeGroupStudy from "@/assests/UniversityFreeSubImage/examTimeGroupStudy.jpg"
import basketballGame from "@/assests/UniversityMiniCardImage/basketball-game.jpg"
import universityCafeteria from "@/assests/UniversityMiniCardImage/universityCafeteria.jpg"
import universityClassRoom from "@/assests/UniversityMiniCardImage/universityClassRoom.jpg"
import datesAd from "@/assests/AdvertisementImage/dates.jpg"
import tokyoOne from "@/assests/UniversityCampus/tokyoOne.jpg"
import tokyoTwo from "@/assests/UniversityCampus/tokyotwo.jpg"
import imageUniOne from "@/assests/Image/imageUniOne.jpg"
import tsinghuaUniversity from "@/assests/UniversityCampus/TsinghuaUniversity.jpg"
import pekingUniversity from "@/assests/UniversityCampus/PekingUniversity.jpg"
import fudanUniversity from "@/assests/UniversityCampus/FudanUniversity.jpg"
import seoulNationalUniversity from "@/assests/UniversityCampus/SeoulNationalUniversity.jpg"
import sungkyunkwanUniversity from "@/assests/UniversityCampus/SungkyunkwanUniversity.jpg"
import { ClassroomCard } from "@/components/classroom-card"
import { HeroImageGallery } from "@/components/hero-image-gallery"
import { ProgramPageClient } from "@/components/program-page-client"

type ProgramData = {
  id: string
  title: string
  university: string
  image: typeof universityTokyo
  description: string
  fee: string
  semesters: string[]
  slug: string
  location?: string
  duration?: string
  language?: string
  highlights?: string[]
  requirements?: string[]
  additionalImages?: typeof universityTokyo[]
  detailedDescription?: string
  courses?: string[]
  facilities?: string[]
  studentLife?: string[]
}

const programs: ProgramData[] = [
  {
    id: "engineering",
    title: "Engineering & Technology Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Study at top engineering universities with state-of-the-art facilities and cutting-edge research opportunities. Immerse yourself in Japan's world-renowned technology sector while experiencing the perfect blend of traditional culture and modern innovation.",
    detailedDescription: "The University of Tokyo offers an exceptional study abroad experience in engineering and technology. Our programs provide students with access to world-renowned faculty, cutting-edge research facilities, and industry connections that set the foundation for a successful career.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "university-of-tokyo",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    additionalImages: [campusFriends, friendshipToCampus, lectureCollege, examTimeGroupStudy],
    highlights: [
      "World-class research facilities and laboratories",
      "Industry partnerships with leading tech companies like Sony, Toyota, and Panasonic",
      "Internship opportunities with top Japanese corporations",
      "Cutting-edge laboratories with advanced equipment",
      "Expert faculty members from global institutions",
      "Global networking opportunities and career development",
      "Innovative research projects and publication opportunities"
    ],
    requirements: [
      "Minimum GPA of 3.0 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 80+ or IELTS 6.5+",
      "Relevant academic background in engineering or related fields",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose and letters of recommendation",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Advanced Robotics and Automation",
      "Artificial Intelligence and Machine Learning",
      "Sustainable Energy Systems",
      "Biomedical Engineering",
      "Computer Science and Software Engineering",
      "Materials Science and Nanotechnology",
      "Electrical and Electronic Engineering",
      "Environmental Engineering"
    ],
    facilities: [
      "State-of-the-art research laboratories",
      "Modern library with extensive digital resources",
      "Computer labs with latest software and tools",
      "Student centers and study spaces",
      "Innovation hubs and collaborative workspaces",
      "Advanced computing and technology centers"
    ],
    studentLife: [
      "Join student clubs and organizations",
      "Participate in cultural festivals and events",
      "Explore Tokyo's famous neighborhoods and attractions",
      "Experience traditional Japanese tea ceremonies",
      "Weekend trips to nearby historical sites",
      "Language exchange programs with Japanese students"
    ]
  },
  {
    id: "tokyo-business",
    title: "Business & Economics Programs",
    university: "University of Tokyo",
    image: wasedaUniversity,
    description: "Learn from leading business schools and gain insights into Japan's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.",
    detailedDescription: "The University of Tokyo's Business and Economics programs offer students a comprehensive understanding of Japan's dynamic economy and global business landscape. Study with world-class faculty and gain practical experience through internships and corporate partnerships.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "university-of-tokyo-business",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "Top-ranked business school in Asia",
      "Corporate networking events with leading Japanese companies",
      "Case study methodology with real-world examples",
      "Exchange programs with global business partners",
      "Guest lectures from industry leaders",
      "Business simulation labs and workshops",
      "Internship opportunities with multinational corporations"
    ],
    requirements: [
      "Minimum GPA of 3.0 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 80+ or IELTS 6.5+",
      "Business, economics, or related field background",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose and letters of recommendation",
      "Academic transcripts from current institution"
    ],
    courses: [
      "International Business Strategy",
      "Japanese Corporate Culture and Management",
      "Global Economics and Finance",
      "Marketing in Asia-Pacific Markets",
      "Entrepreneurship and Innovation",
      "Supply Chain Management",
      "Financial Analysis and Investment",
      "Cross-Cultural Business Communication"
    ],
    facilities: [
      "Modern business simulation labs",
      "Financial trading rooms with real-time data",
      "Collaborative study spaces",
      "Business library with extensive resources",
      "Conference rooms for presentations",
      "Career development center"
    ],
    studentLife: [
      "Business case competitions",
      "Corporate site visits",
      "Networking events with alumni",
      "Cultural immersion activities",
      "Tokyo business district tours",
      "Language exchange with business students"
    ]
  },
  {
    id: "tokyo-science",
    title: "Science & Research Programs",
    university: "University of Tokyo",
    image: kyotoUniversity,
    description: "Engage in cutting-edge scientific research at one of the world's leading research universities. Work alongside renowned scientists and contribute to groundbreaking discoveries in various scientific fields.",
    detailedDescription: "The University of Tokyo's Science and Research programs provide students with unparalleled opportunities to engage in world-class research. Work in state-of-the-art laboratories and collaborate with leading researchers in your field.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "university-of-tokyo-science",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "World-renowned research laboratories",
      "Collaboration with Nobel Prize-winning researchers",
      "Access to advanced scientific equipment",
      "Research publication opportunities",
      "International research conferences",
      "Mentorship from leading scientists",
      "Interdisciplinary research projects"
    ],
    requirements: [
      "Minimum GPA of 3.2 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 85+ or IELTS 7.0+",
      "Strong background in science, mathematics, or related fields",
      "Valid passport and student visa (we assist with application)",
      "Research proposal or statement of research interests",
      "Letters of recommendation from academic advisors",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Advanced Physics and Quantum Mechanics",
      "Molecular Biology and Genetics",
      "Chemistry and Materials Science",
      "Mathematics and Applied Statistics",
      "Environmental Science and Sustainability",
      "Biotechnology and Life Sciences",
      "Astrophysics and Space Science",
      "Computational Science and Modeling"
    ],
    facilities: [
      "Advanced research laboratories",
      "High-performance computing facilities",
      "Scientific instrumentation centers",
      "Research libraries and databases",
      "Collaborative research spaces",
      "Conference and seminar rooms"
    ],
    studentLife: [
      "Research symposiums and presentations",
      "Scientific conferences and workshops",
      "Lab tours and demonstrations",
      "Science museum visits",
      "Research collaboration events",
      "Academic networking opportunities"
    ]
  },
  {
    id: "tokyo-arts",
    title: "Arts & Humanities Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Explore Japan's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Tokyo while experiencing authentic Japanese culture and contemporary artistic movements.",
    detailedDescription: "The University of Tokyo's Arts and Humanities programs offer a unique blend of traditional Japanese culture and modern artistic expression. Study literature, history, philosophy, and the arts in one of the world's most culturally rich cities.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "university-of-tokyo-arts",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "Historical cultural immersion",
      "Traditional arts workshops (calligraphy, tea ceremony, ikebana)",
      "Museum and gallery visits",
      "Cultural exchange programs",
      "Heritage site tours",
      "Creative project opportunities",
      "Access to traditional and modern art collections"
    ],
    requirements: [
      "Minimum GPA of 2.8 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 75+ or IELTS 6.0+",
      "Interest in arts, culture, or humanities",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose",
      "Portfolio or writing samples (for creative programs)",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Japanese Literature and Culture",
      "Traditional Japanese Arts",
      "Modern Japanese History",
      "Philosophy and Eastern Thought",
      "Visual Arts and Design",
      "Cultural Anthropology",
      "Linguistics and Language Studies",
      "Comparative Literature"
    ],
    facilities: [
      "Art studios and workshops",
      "Cultural centers",
      "Museums and galleries",
      "Traditional arts practice rooms",
      "Library with rare collections",
      "Performance spaces"
    ],
    studentLife: [
      "Traditional tea ceremony classes",
      "Calligraphy and painting workshops",
      "Cultural festival participation",
      "Museum and temple visits",
      "Traditional theater performances",
      "Cultural exchange with local artists"
    ]
  },
  {
    id: "tokyo-medicine",
    title: "Medicine & Health Sciences Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Study medicine and health sciences at one of Asia's premier medical institutions. Gain clinical experience and research opportunities in Japan's advanced healthcare system.",
    detailedDescription: "The University of Tokyo's Medicine and Health Sciences programs provide students with comprehensive medical education and research opportunities. Learn from leading medical professionals and gain hands-on experience in world-class healthcare facilities.",
    fee: "$10,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "university-of-tokyo-medicine",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "World-class medical facilities",
      "Clinical rotation opportunities",
      "Research collaboration with medical professionals",
      "Advanced medical technology access",
      "International medical conferences",
      "Mentorship from leading physicians",
      "Healthcare system observation programs"
    ],
    requirements: [
      "Minimum GPA of 3.5 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 90+ or IELTS 7.0+",
      "Pre-medical or health sciences background",
      "Valid passport and student visa (we assist with application)",
      "Medical clearance and health insurance",
      "Letters of recommendation from medical professionals",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Clinical Medicine and Patient Care",
      "Medical Research Methodology",
      "Public Health and Epidemiology",
      "Biomedical Sciences",
      "Medical Ethics and Law",
      "Global Health Issues",
      "Medical Technology and Innovation",
      "Healthcare Systems and Policy"
    ],
    facilities: [
      "Teaching hospitals and clinics",
      "Medical research laboratories",
      "Simulation centers",
      "Medical libraries",
      "Anatomy and pathology labs",
      "Clinical skills training centers"
    ],
    studentLife: [
      "Hospital observation programs",
      "Medical research projects",
      "Healthcare volunteer opportunities",
      "Medical conference attendance",
      "Clinical shadowing experiences",
      "Healthcare system tours"
    ]
  },
  {
    id: "business",
    title: "Business & Economics Programs",
    university: "Waseda University",
    image: wasedaUniversity,
    description: "Learn from leading business schools and gain insights into Japan's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "waseda-university",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "Top-ranked business school in Asia",
      "Corporate networking events",
      "Case study methodology",
      "Exchange programs with global partners",
      "Guest lectures from industry leaders",
      "Business simulation labs"
    ],
    requirements: [
      "Minimum GPA of 3.0",
      "English proficiency (TOEFL/IELTS)",
      "Business or related field background",
      "Valid passport and student visa"
    ]
  },
  {
    id: "arts",
    title: "Arts & Culture Programs",
    university: "Kyoto University",
    image: kyotoUniversity,
    description: "Explore Japan's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Kyoto while experiencing authentic Japanese culture, from tea ceremonies to contemporary art scenes.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "kyoto-university",
    location: "Kyoto, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "Historical cultural immersion",
      "Traditional arts workshops",
      "Museum and gallery visits",
      "Cultural exchange programs",
      "Heritage site tours",
      "Creative project opportunities"
    ],
    requirements: [
      "Minimum GPA of 2.8",
      "English proficiency (TOEFL/IELTS)",
      "Interest in arts and culture",
      "Valid passport and student visa"
    ]
  },
  {
    id: "china-engineering",
    title: "Engineering & Technology Programs",
    university: "Tsinghua University",
    image: tsinghuaUniversity,
    description: "Study at one of China's top engineering universities with state-of-the-art facilities and cutting-edge research opportunities. Immerse yourself in China's world-renowned technology sector while experiencing the perfect blend of traditional culture and modern innovation.",
    detailedDescription: "Tsinghua University offers an exceptional study abroad experience in engineering and technology. Our programs provide students with access to world-renowned faculty, cutting-edge research facilities, and industry connections that set the foundation for a successful career.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "tsinghua-university",
    location: "Beijing, China",
    duration: "1-2 Semesters",
    language: "English & Mandarin",
    additionalImages: [campusFriends, friendshipToCampus, lectureCollege, examTimeGroupStudy],
    highlights: [
      "World-class research facilities and laboratories",
      "Industry partnerships with leading tech companies like Huawei, Alibaba, and Tencent",
      "Internship opportunities with top Chinese corporations",
      "Cutting-edge laboratories with advanced equipment",
      "Expert faculty members from global institutions",
      "Global networking opportunities and career development",
      "Innovative research projects and publication opportunities"
    ],
    requirements: [
      "Minimum GPA of 3.0 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 80+ or IELTS 6.5+",
      "Relevant academic background in engineering or related fields",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose and letters of recommendation",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Advanced Robotics and Automation",
      "Artificial Intelligence and Machine Learning",
      "Sustainable Energy Systems",
      "Biomedical Engineering",
      "Computer Science and Software Engineering",
      "Materials Science and Nanotechnology",
      "Electrical and Electronic Engineering",
      "Environmental Engineering"
    ],
    facilities: [
      "State-of-the-art research laboratories",
      "Modern library with extensive digital resources",
      "Computer labs with latest software and tools",
      "Student centers and study spaces",
      "Innovation hubs and collaborative workspaces",
      "Advanced computing and technology centers"
    ],
    studentLife: [
      "Join student clubs and organizations",
      "Participate in cultural festivals and events",
      "Explore Beijing's famous neighborhoods and attractions",
      "Experience traditional Chinese tea ceremonies",
      "Weekend trips to nearby historical sites",
      "Language exchange programs with Chinese students"
    ]
  },
  {
    id: "china-business",
    title: "Business & Economics Programs",
    university: "Peking University",
    image: pekingUniversity,
    description: "Learn from leading business schools and gain insights into China's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "peking-university",
    location: "Beijing, China",
    duration: "1-2 Semesters",
    language: "English & Mandarin",
    highlights: [
      "Top-ranked business school in Asia",
      "Corporate networking events",
      "Case study methodology",
      "Exchange programs with global partners",
      "Guest lectures from industry leaders",
      "Business simulation labs"
    ],
    requirements: [
      "Minimum GPA of 3.0",
      "English proficiency (TOEFL/IELTS)",
      "Business or related field background",
      "Valid passport and student visa"
    ]
  },
  {
    id: "china-arts",
    title: "Arts & Culture Programs",
    university: "Fudan University",
    image: fudanUniversity,
    description: "Explore China's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Shanghai while experiencing authentic Chinese culture, from traditional opera to contemporary art scenes.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "fudan-university",
    location: "Shanghai, China",
    duration: "1-2 Semesters",
    language: "English & Mandarin",
    highlights: [
      "Historical cultural immersion",
      "Traditional arts workshops",
      "Museum and gallery visits",
      "Cultural exchange programs",
      "Heritage site tours",
      "Creative project opportunities"
    ],
    requirements: [
      "Minimum GPA of 2.8",
      "English proficiency (TOEFL/IELTS)",
      "Interest in arts and culture",
      "Valid passport and student visa"
    ]
  },
  {
    id: "korea-engineering",
    title: "Engineering & Technology Programs",
    university: "Seoul National University",
    image: seoulNationalUniversity,
    description: "Study at South Korea's top-ranked university with world-class engineering programs and cutting-edge research facilities. Experience the perfect blend of traditional Korean culture and modern technological innovation.",
    detailedDescription: "Seoul National University offers exceptional study abroad programs in engineering and technology. Our programs provide students with access to world-renowned faculty, state-of-the-art research facilities, and industry connections with leading Korean tech companies like Samsung, LG, and Hyundai.",
    fee: "$9,000",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "seoul-national-university",
    location: "Seoul, South Korea",
    duration: "1-2 Semesters",
    language: "English & Korean",
    additionalImages: [campusFriends, friendshipToCampus, lectureCollege, examTimeGroupStudy],
    highlights: [
      "World-class research facilities and laboratories",
      "Industry partnerships with leading tech companies like Samsung, LG, and Hyundai",
      "Internship opportunities with top Korean corporations",
      "Cutting-edge laboratories with advanced equipment",
      "Expert faculty members from global institutions",
      "Global networking opportunities and career development",
      "Innovative research projects and publication opportunities"
    ],
    requirements: [
      "Minimum GPA of 3.0 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 80+ or IELTS 6.5+",
      "Relevant academic background in engineering or related fields",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose and letters of recommendation",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Advanced Robotics and Automation",
      "Artificial Intelligence and Machine Learning",
      "Sustainable Energy Systems",
      "Biomedical Engineering",
      "Computer Science and Software Engineering",
      "Materials Science and Nanotechnology",
      "Electrical and Electronic Engineering",
      "Environmental Engineering"
    ],
    facilities: [
      "State-of-the-art research laboratories",
      "Modern library with extensive digital resources",
      "Computer labs with latest software and tools",
      "Student centers and study spaces",
      "Innovation hubs and collaborative workspaces",
      "Advanced computing and technology centers"
    ],
    studentLife: [
      "Join student clubs and organizations",
      "Participate in cultural festivals and events",
      "Explore Seoul's famous neighborhoods and attractions",
      "Experience traditional Korean culture and K-pop scene",
      "Weekend trips to nearby historical sites",
      "Language exchange programs with Korean students"
    ]
  },
  {
    id: "korea-business",
    title: "Business & Economics Programs",
    university: "Sungkyunkwan University",
    image: sungkyunkwanUniversity,
    description: "Learn from one of South Korea's oldest and most prestigious universities. Gain insights into Korea's dynamic economy and business practices while experiencing the unique blend of traditional values and modern innovation.",
    detailedDescription: "Sungkyunkwan University offers comprehensive business and economics programs that combine traditional Korean business ethics with modern global business practices. Study with world-class faculty and gain practical experience through internships and corporate partnerships.",
    fee: "$9,000",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "sungkyunkwan-university",
    location: "Seoul, South Korea",
    duration: "1-2 Semesters",
    language: "English & Korean",
    highlights: [
      "Top-ranked business school in Asia",
      "Corporate networking events with leading Korean companies",
      "Case study methodology with real-world examples",
      "Exchange programs with global business partners",
      "Guest lectures from industry leaders",
      "Business simulation labs and workshops",
      "Internship opportunities with multinational corporations"
    ],
    requirements: [
      "Minimum GPA of 3.0 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 80+ or IELTS 6.5+",
      "Business, economics, or related field background",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose and letters of recommendation",
      "Academic transcripts from current institution"
    ],
    courses: [
      "International Business Strategy",
      "Korean Corporate Culture and Management",
      "Global Economics and Finance",
      "Marketing in Asia-Pacific Markets",
      "Entrepreneurship and Innovation",
      "Supply Chain Management",
      "Financial Analysis and Investment",
      "Cross-Cultural Business Communication"
    ],
    facilities: [
      "Modern business simulation labs",
      "Financial trading rooms with real-time data",
      "Collaborative study spaces",
      "Business library with extensive resources",
      "Conference rooms for presentations",
      "Career development center"
    ],
    studentLife: [
      "Business case competitions",
      "Corporate site visits",
      "Networking events with alumni",
      "Cultural immersion activities",
      "Seoul business district tours",
      "Language exchange with business students"
    ]
  }
]

export async function generateMetadata({ params }: { params: Promise<{ university: string }> }): Promise<Metadata> {
  const { university } = await params
  const program = programs.find(p => p.slug === university)
  
  if (!program) {
    return {
      title: "Program Not Found - BideshStudy",
    }
  }

  return {
    title: `${program.title} - ${program.university} - BideshStudy`,
    description: program.description,
  }
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ university: string }> }) {
  const { university } = await params
  const program = programs.find(p => p.slug === university)

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Program Not Found</h1>
          <Link href="/destinations/japan">
            <Button>Go Back to Japan Programs</Button>
          </Link>
        </div>
      </div>
    )
  }

  // University data for Quick Facts
  const universityData = {
    "University of Tokyo": {
      founded: "1877",
      students: "28,000+",
      programs: "100+",
      acceptance: "21.0%",
      tuition: "$5,000 - $8,000/year",
      type: "Public Research University",
      rating: 4.8
    },
    "Waseda University": {
      founded: "1882",
      students: "45,000+",
      programs: "120+",
      acceptance: "25.0%",
      tuition: "$6,000 - $9,000/year",
      type: "Private Research University",
      rating: 4.7
    },
    "Kyoto University": {
      founded: "1897",
      students: "22,000+",
      programs: "90+",
      acceptance: "19.0%",
      tuition: "$5,000 - $8,000/year",
      type: "Public Research University",
      rating: 4.9
    },
    "Tsinghua University": {
      founded: "1911",
      students: "50,000+",
      programs: "150+",
      acceptance: "15.0%",
      tuition: "$3,000 - $6,000/year",
      type: "Public Research University",
      rating: 4.8
    },
    "Peking University": {
      founded: "1898",
      students: "40,000+",
      programs: "130+",
      acceptance: "18.0%",
      tuition: "$3,500 - $6,500/year",
      type: "Public Research University",
      rating: 4.9
    },
    "Fudan University": {
      founded: "1905",
      students: "35,000+",
      programs: "110+",
      acceptance: "20.0%",
      tuition: "$3,200 - $6,000/year",
      type: "Public Research University",
      rating: 4.7
    },
    "Seoul National University": {
      founded: "1946",
      students: "28,000+",
      programs: "100+",
      acceptance: "22.0%",
      tuition: "$4,000 - $7,000/year",
      type: "Public Research University",
      rating: 4.8
    },
    "Sungkyunkwan University": {
      founded: "1398",
      students: "30,000+",
      programs: "120+",
      acceptance: "25.0%",
      tuition: "$4,500 - $7,500/year",
      type: "Private Research University",
      rating: 4.7
    }
  }

  const uniData = universityData[program.university as keyof typeof universityData] || {
    founded: "N/A",
    students: "N/A",
    programs: "N/A",
    acceptance: "N/A",
    tuition: program.fee,
    type: "Research University",
    rating: 4.5
  }

  // Get all programs for this university
  const universityPrograms = programs.filter(p => p.university === program.university)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px] md:h-[400px] overflow-hidden mb-4 md:mb-6">
        {/* Faded Background Image */}
        <div className="absolute inset-0">
          <Image
            src={program.image}
            alt={`${program.university} campus`}
            fill
            className="object-cover opacity-30"
            priority
          />
              </div>

         {/* Content Overlay */}
         <div className="relative z-10 max-w-7xl mx-auto px-1 md:px-4 h-full flex items-center">
           <div className="w-full mt-[260px] md:mt-[250px]">
             {/* University Info Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-8 shadow-xl w-full">
                 <div className="flex flex-row gap-2 md:gap-6 items-start">
                   {/* Small Image on Left */}
                   <div className="relative w-27 h-27 md:w-29 md:h-29 flex-shrink-0 mt-5 md:mt-[15px]">
                    <Image
                      src={program.image}
                      alt={`${program.university} campus`}
                      fill
                      className="object-cover rounded-lg shadow-lg border-2 border-white"
                    />
              </div>

                  {/* University Info */}
                  <div className="flex-1 min-w-0">
                    {/* Back Link - Left Side */}
                    <div className="flex justify-start mb-1 md:mb-1">
                      <Link href="/destinations/japan#programs" className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm inline-flex items-center gap-1">
                        <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
                        Back to Institutions
                      </Link>
                </div>
                    <h1 className="text-base md:text-2xl font-bold text-[#424242] mb-2 md:mb-2">
                      {program.university}
                    </h1>
                    <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-2">
                      <p className="text-xs md:text-base text-muted-foreground">
                        {program.location}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs md:text-base font-semibold text-[#424242]">
                          {uniData.rating}
                    </span>
                </div>
                      <span className="text-xs md:text-base text-muted-foreground">
                        {uniData.type}
                      </span>
              </div>

              {/* Action Buttons */}
                    <div className="flex gap-1.5 md:gap-3">
                      <ApplyNowButton 
                        variant="button"
                        className="inline-block"
                      >
                        <Button size="sm" className="bg-[#22253D] hover:bg-[#22253D]/90 text-white text-xs md:text-sm px-3 md:px-6">
                          Apply Now
                        </Button>
                      </ApplyNowButton>
                      <Link href={`https://www.${program.university.toLowerCase().replace(/\s+/g, '')}.edu`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-2 text-xs md:text-sm px-3 md:px-6">
                          <span className="hidden sm:inline">Visit Website</span>
                          <span className="sm:hidden">Website</span>
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <ProgramPageClient 
        currentProgram={program}
        universityPrograms={universityPrograms}
        uniData={uniData}
      />
    </div>
  )
}

