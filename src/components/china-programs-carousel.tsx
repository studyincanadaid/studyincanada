"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import tsinghuaUniversity from "@/assests/UniversityCampus/TsinghuaUniversity.jpg"
import pekingUniversity from "@/assests/UniversityCampus/PekingUniversity.jpg"
import fudanUniversity from "@/assests/UniversityCampus/FudanUniversity.jpg"

type ProgramData = {
  id: string
  title: string
  university: string
  image: typeof tsinghuaUniversity
  description: string
  fee: string
  semesters: string[]
}

const programs: ProgramData[] = [
  {
    id: "engineering",
    title: "Engineering & Technology Programs",
    university: "Tsinghua University",
    image: tsinghuaUniversity,
    description: "Study at one of China's top engineering universities with state-of-the-art facilities and cutting-edge research opportunities. Immerse yourself in China's world-renowned technology sector while experiencing the perfect blend of traditional culture and modern innovation.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  },
  {
    id: "business",
    title: "Business & Economics Programs",
    university: "Peking University",
    image: pekingUniversity,
    description: "Learn from leading business schools and gain insights into China's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  },
  {
    id: "arts",
    title: "Arts & Culture Programs",
    university: "Fudan University",
    image: fudanUniversity,
    description: "Explore China's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Shanghai while experiencing authentic Chinese culture, from traditional opera to contemporary art scenes.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"]
  }
]

// Helper function to convert university name to URL slug
const getUniversitySlug = (university: string): string => {
  return university.toLowerCase().replace(/\s+/g, '-')
}

export function ChinaProgramsCarousel() {
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
                <div className="p-4 md:p-6 flex flex-col flex-grow">
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
                  <div className="bg-muted/50 rounded p-4 -mx-4 md:-mx-4 -mb-6 flex items-center justify-between">
                    <p className="text-sm md:text-lg font-bold text-primary">
                      <span className="md:hidden">Fee: {program.fee}</span>
                      <span className="hidden md:inline">Program Fee: {program.fee}</span>
                    </p>
                    <Link 
                      href={detailUrl}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium"
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

