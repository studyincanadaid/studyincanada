"use client"

import React, { useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const reviews = [
  // Japan Reviews
  {
    rating: "5.0",
    text: "Studying in Japan was the best decision I ever made! The combination of cutting-edge technology education and rich cultural experiences was incredible. The universities are world-class, and the people are so welcoming and friendly.",
    initials: "SM",
    name: "Sarah M.",
    role: "Engineering Student, Tokyo",
    country: "Japan",
  },
  {
    rating: "5.0",
    text: "The academic rigor and cultural immersion in Japan exceeded all my expectations. Learning Japanese while studying business gave me a unique edge in my career. The safety and cleanliness made it perfect for international students like me.",
    initials: "JD",
    name: "James D.",
    role: "Business Student, Osaka",
    country: "Japan",
  },
  {
    rating: "5.0",
    text: "Japan's blend of tradition and innovation is unmatched. From ancient temples to high-tech labs, every day was an adventure. The support from the university and study abroad program was exceptional throughout my entire journey.",
    initials: "EM",
    name: "Emma L.",
    role: "Arts Student, Kyoto",
    country: "Japan",
  },
  {
    rating: "5.0",
    text: "The quality of education in Japan is outstanding, and the cultural experiences are life-changing. I made lifelong friends and gained skills that have been invaluable in my career. Highly recommend studying abroad in Japan to everyone!",
    initials: "RK",
    name: "Ryan K.",
    role: "Technology Student, Tokyo",
    country: "Japan",
  },
  // China Reviews
  {
    rating: "5.0",
    text: "Studying in China was an amazing experience! The universities offer excellent programs and the cultural immersion was incredible. I learned Mandarin and gained valuable international experience that boosted my career prospects significantly.",
    initials: "CW",
    name: "Chen W.",
    role: "Engineering Student, Beijing",
    country: "China",
  },
  {
    rating: "5.0",
    text: "China's education system is world-class and the opportunities for growth are endless. The blend of traditional culture and modern innovation created a unique learning environment. The support from professors and staff was exceptional throughout.",
    initials: "LY",
    name: "Li Y.",
    role: "Business Student, Shanghai",
    country: "China",
  },
  {
    rating: "5.0",
    text: "My experience in China was transformative. The quality of education exceeded my expectations and I made lifelong connections. The study abroad program provided excellent support and the cultural experiences were truly life-changing.",
    initials: "ZW",
    name: "Zhang W.",
    role: "Arts Student, Beijing",
    country: "China",
  },
  {
    rating: "5.0",
    text: "China offered me incredible opportunities to grow both academically and personally. The language courses were excellent and I quickly adapted to the culture. Highly recommend studying in China to all students seeking international experience.",
    initials: "WX",
    name: "Wang X.",
    role: "Technology Student, Shanghai",
    country: "China",
  },
  // South Korea Reviews
  {
    rating: "5.0",
    text: "Studying in South Korea was the best decision I ever made! The universities are world-class and the cultural experiences were incredible. The people are welcoming and the education system is rigorous yet supportive.",
    initials: "KJ",
    name: "Kim J.",
    role: "Engineering Student, Seoul",
    country: "South Korea",
  },
  {
    rating: "5.0",
    text: "South Korea's blend of technology and tradition is unmatched. The academic programs are excellent and I gained valuable skills. The study abroad program provided amazing support throughout my entire journey there.",
    initials: "PY",
    name: "Park Y.",
    role: "Business Student, Busan",
    country: "South Korea",
  },
  {
    rating: "5.0",
    text: "My experience in South Korea exceeded all expectations. The quality of education is outstanding and the cultural immersion was life-changing. I made lifelong friends and gained international experience that set me apart.",
    initials: "LSK",
    name: "Lee S.",
    role: "Arts Student, Seoul",
    country: "South Korea",
  },
  {
    rating: "5.0",
    text: "South Korea offered me incredible opportunities for growth. The language courses were excellent and I quickly adapted. The professors were supportive and the campus facilities were world-class. Highly recommend this program!",
    initials: "CJH",
    name: "Choi J.",
    role: "Technology Student, Seoul",
    country: "South Korea",
  },
]

// Function to truncate text to 12 words
const truncateToWords = (text: string, maxWords: number = 12): string => {
  const words = text.split(" ")
  if (words.length <= maxWords) {
    return text
  }
  return words.slice(0, maxWords).join(" ") + "..."
}

type ReviewsCarouselProps = {
  country?: "Japan" | "China" | "South Korea"
}

export function ReviewsCarousel({ country }: ReviewsCarouselProps = {}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  // Filter reviews by country if provided
  const filteredReviews = country 
    ? reviews.filter(review => review.country === country)
    : reviews

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-scroll from left to right (marquee style)
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext() // Scroll from left to right
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {filteredReviews.map((review, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4">
            <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Rating Section */}
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm font-medium text-muted-foreground">{review.rating}</span>
              </div>
              
              {/* Review Text - 12 words */}
              <p className="text-foreground mb-6 text-base leading-relaxed flex-grow">
                "{truncateToWords(review.text, 12)}"
              </p>
              
              {/* Author Section */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{review.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{review.role}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

