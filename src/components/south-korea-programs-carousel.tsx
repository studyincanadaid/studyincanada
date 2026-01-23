"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import seoulNationalUniversity from "@/assests/UniversityCampus/SeoulNationalUniversity.jpg"
import sungkyunkwanUniversity from "@/assests/UniversityCampus/SungkyunkwanUniversity.jpg"

type ProgramData = {
  id: string
  title: string
  university: string
  image: typeof seoulNationalUniversity
  description: string
  fee: string
  semesters: string[]
}

const programs: ProgramData[] = [
  {
    id: "engineering",
    title: "Engineering & Technology Programs",
    university: "Seoul National University",
    image: seoulNationalUniversity,
    description: "Study at South Korea's top-ranked university with world-class engineering programs and cutting-edge research facilities. Experience the perfect blend of traditional Korean culture and modern technological innovation.",
    fee: "$9,000",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  },
  {
    id: "business",
    title: "Business & Economics Programs",
    university: "Sungkyunkwan University",
    image: sungkyunkwanUniversity,
    description: "Learn from one of South Korea's oldest and most prestigious universities. Gain insights into Korea's dynamic economy and business practices while experiencing the unique blend of traditional values and modern innovation.",
    fee: "$9,000",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  }
]

// Helper function to convert university name to URL slug
const getUniversitySlug = (university: string): string => {
  return university.toLowerCase().replace(/\s+/g, '-')
}

export function SouthKoreaProgramsCarousel() {
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
              <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
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

