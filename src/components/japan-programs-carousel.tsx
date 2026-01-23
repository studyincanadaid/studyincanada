"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import universityTokyo from "@/assests/UniversityFreeImage/universityTokyo.jpg"
import wasedaUniversity from "@/assests/UniversityFreeImage/wasedaUniversity.jpg"
import kyotoUniversity from "@/assests/UniversityFreeImage/kyotoUniversity.jpg"

type ProgramData = {
  id: string
  title: string
  university: string
  image: typeof universityTokyo
  description: string
  fee: string
  semesters: string[]
}

const programs: ProgramData[] = [
  {
    id: "engineering",
    title: "Engineering & Technology Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Study at top engineering universities with state-of-the-art facilities and cutting-edge research opportunities. Immerse yourself in Japan's world-renowned technology sector while experiencing the perfect blend of traditional culture and modern innovation.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  },
  {
    id: "business",
    title: "Business & Economics Programs",
    university: "Waseda University",
    image: wasedaUniversity,
    description: "Learn from leading business schools and gain insights into Japan's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  },
  {
    id: "arts",
    title: "Arts & Culture Programs",
    university: "Kyoto University",
    image: kyotoUniversity,
    description: "Explore Japan's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Kyoto while experiencing authentic Japanese culture, from tea ceremonies to contemporary art scenes.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  }
]

// Helper function to convert university name to URL slug
const getUniversitySlug = (university: string): string => {
  return university.toLowerCase().replace(/\s+/g, '-')
}

export function JapanProgramsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        containScroll: "trimSnaps",
      }}
      className="w-full"
    >
      <CarouselContent>
        {programs.map((program) => {
          const universitySlug = getUniversitySlug(program.university)
          const detailUrl = `/programs/${universitySlug}`
          
          return (
            <CarouselItem key={program.id} className="basis-3/4">
              <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full w-full">
                <div className="relative w-full h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow relative pb-20 md:pb-24">
                  <h3 className="text-base md:text-xl font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {program.university}
                  </p>
                  <div className="flex gap-2 mb-2 md:mb-4 pb-2 md:pb-4 border-b border-border">
                    {program.semesters.map((semester, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                      >
                        {semester}
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground mb-2 md:mb-4 text-sm leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  <div className="bg-[#1BB685] rounded-b p-4 absolute left-0 right-0 bottom-0 flex items-center justify-between w-full">
                    <p className="text-sm md:text-lg font-bold text-white">
                      <span className="md:hidden">Fee: {program.fee}</span>
                      <span className="hidden md:inline">Program Fee: {program.fee}</span>
                    </p>
                    <Link 
                      href={detailUrl}
                      className="flex items-center gap-2 text-white hover:text-white/80 text-sm font-medium"
                    >
                      Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

