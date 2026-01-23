"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Camera, Users, Utensils, BookOpen, Heart, PartyPopper } from "lucide-react"
import weekendParty from "@/assests/ImageCardImage/weekendParty.jpg"
import groupStudy from "@/assests/ImageCardImage/group-study.jpg"
import deliveringOrder from "@/assests/ImageCardImage/delivering-order.jpg"
import studyTour from "@/assests/ImageCardImage/studyTour.jpg"
import volunteerGroups from "@/assests/ImageCardImage/volunteerGroups.jpg"
import outingEatingFriends from "@/assests/ImageCardImage/outingEatingFriends.jpg"

type ImageCardData = {
  image: typeof weekendParty
  icon: React.ReactNode
  title: string
}

const imageCardData: ImageCardData[] = [
  { 
    image: weekendParty, 
    icon: <PartyPopper className="h-6 w-6 text-white" />,
    title: "Weekend Parties"
  },
  { 
    image: groupStudy, 
    icon: <BookOpen className="h-6 w-6 text-white" />,
    title: "Group Study"
  },
  { 
    image: deliveringOrder, 
    icon: <Utensils className="h-6 w-6 text-white" />,
    title: "Food Delivery"
  },
  { 
    image: studyTour, 
    icon: <Camera className="h-6 w-6 text-white" />,
    title: "Study Tours"
  },
  { 
    image: volunteerGroups, 
    icon: <Heart className="h-6 w-6 text-white" />,
    title: "Volunteer Groups"
  },
  { 
    image: outingEatingFriends, 
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Friends Outing"
  },
]

export function ImageCardCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate the array for seamless infinite scroll
  const duplicatedCards = [...imageCardData, ...imageCardData, ...imageCardData]

  return (
    <div
      className="relative w-full overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-4 sm:gap-6 animate-scroll ${
          isPaused ? "animate-scroll-paused" : ""
        }`}
        style={{
          width: "fit-content",
          willChange: "transform",
        }}
      >
        {duplicatedCards.map((card, index) => (
          <div
            key={`card-${index}`}
            className="flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] xs:h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden relative group shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <div className="mb-3 sm:mb-4 p-3 sm:p-4 rounded-full bg-primary/30 backdrop-blur-sm border border-white/20">
                  {card.icon}
                </div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg text-center">
                  {card.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

