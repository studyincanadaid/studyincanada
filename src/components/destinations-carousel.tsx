"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import japanImage from "@/assests/Image/japanImage.jpg"
import chinaImage from "@/assests/Image/chinaImage.jpg"
import southKoreaImage from "@/assests/Image/southKoreaImage.jpg"

type CountryData = {
  name: string
  href: string
  image: typeof japanImage
  hasImage: true
  gradient?: never
} | {
  name: string
  href: string
  image?: never
  hasImage: false
  gradient: string
}

const countryData: CountryData[] = [
  { name: "Japan", href: "/destinations/japan", image: japanImage, hasImage: true },
  { name: "China", href: "/destinations/china", image: chinaImage, hasImage: true },
  { name: "South Korea", href: "/destinations/south-korea", image: southKoreaImage, hasImage: true },
]

export function DestinationsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const duplicatedCountries = [...countryData, ...countryData]

  const renderCard = (country: CountryData, index: number, className: string = "") => (
    <Link
      key={`${country.name}-${index}`}
      href={country.href}
      className={className}
      onClick={() => isMobile && setSelectedIndex(index % countryData.length)}
    >
      {country.hasImage ? (
        <div className="relative w-full h-full">
          <Image
            src={country.image}
            alt={country.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 350px, 400px"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg text-center">
              {country.name}
            </h3>
          </div>
        </div>
      ) : (
        <div className={`relative w-full h-full bg-gradient-to-br ${country.gradient || "from-gray-400 to-gray-600"}`}>
          <div className="absolute inset-0 bg-black/30 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg text-center px-4">
              {country.name}
            </h3>
          </div>
        </div>
      )}
    </Link>
  )

  // Mobile view with two boxes
  if (isMobile) {
    const selectedCountry = countryData[selectedIndex]
    return (
      <div className="flex flex-col gap-4">
        {/* Top Box - Selected Card */}
        <Link
          href={selectedCountry.href}
          className="w-full h-[250px] rounded-lg overflow-hidden relative shadow-xl block"
        >
          {selectedCountry.hasImage ? (
            <div className="relative w-full h-full">
              <Image
                src={selectedCountry.image}
                alt={selectedCountry.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h3 className="text-white text-xl font-bold drop-shadow-lg text-center">
                  {selectedCountry.name}
                </h3>
              </div>
            </div>
          ) : (
            <div className={`relative w-full h-full bg-gradient-to-br ${selectedCountry.gradient || "from-gray-400 to-gray-600"}`}>
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold drop-shadow-lg text-center px-4">
                  {selectedCountry.name}
                </h3>
              </div>
            </div>
          )}
        </Link>

        {/* Bottom Box - Swipeable Cards with Marquee */}
        <div className="w-full overflow-hidden relative">
          <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
            {[...countryData, ...countryData].map((country, index) => {
              const originalIndex = index % countryData.length
              return (
              <div
                key={`thumb-${index}`}
                className={`flex-shrink-0 w-[120px] h-[80px] rounded-lg overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 ${
                  selectedIndex === originalIndex ? "ring-4 ring-primary scale-105" : "opacity-70"
                }`}
                onClick={() => setSelectedIndex(originalIndex)}
              >
                {country.hasImage ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <h4 className="text-white text-xs font-semibold drop-shadow-lg text-center truncate">
                        {country.name}
                      </h4>
                    </div>
                  </div>
                ) : (
                  <div className={`relative w-full h-full bg-gradient-to-br ${country.gradient || "from-gray-400 to-gray-600"}`}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <h4 className="text-white text-xs font-semibold drop-shadow-lg text-center truncate">
                        {country.name}
                      </h4>
                    </div>
                  </div>
                )}
              </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Desktop view - Auto-scrolling carousel
  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-4 sm:gap-6 animate-scroll ${
          isPaused ? "animate-scroll-paused" : ""
        }`}
        style={{
          width: "max-content",
        }}
      >
        {duplicatedCountries.map((country, index) => (
          <div
            key={`${country.name}-${index}`}
            className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] h-[180px] sm:h-[240px] md:h-[260px] rounded-lg overflow-hidden relative group cursor-pointer shadow-xl"
          >
            {renderCard(country, index, "block w-full h-full relative group")}
          </div>
        ))}
      </div>
    </div>
  )
}
