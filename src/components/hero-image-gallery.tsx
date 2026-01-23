"use client"

import Image from "next/image"
import { useState } from "react"

type HeroImageGalleryProps = {
  mainImage: any
  thumbnailImages: Array<{
    image: any
    name: string
  }>
}

export function HeroImageGallery({ mainImage, thumbnailImages }: HeroImageGalleryProps) {
  const [currentHeaderImage, setCurrentHeaderImage] = useState(mainImage)
  const [thumbnailList, setThumbnailList] = useState(thumbnailImages)

  const handleThumbnailClick = (clickedIndex: number) => {
    // Get the clicked thumbnail image
    const clickedImage = thumbnailList[clickedIndex]
    
    // Swap: header image goes to thumbnail position, thumbnail image goes to header
    const newThumbnailList = [...thumbnailList]
    newThumbnailList[clickedIndex] = {
      image: currentHeaderImage,
      name: thumbnailList[clickedIndex].name // Keep the same name for the thumbnail position
    }
    
    setCurrentHeaderImage(clickedImage.image)
    setThumbnailList(newThumbnailList)
  }

  return (
    <div className="lg:col-span-2 space-y-4">
      {/* Main Image */}
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={currentHeaderImage}
          alt="Campus View"
          fill
          className="object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-2 gap-4">
        {thumbnailList.map((item, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary group"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Building Name Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-semibold text-sm md:text-base">{item.name}</p>
              </div>
            </div>
            {/* Always visible name at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 backdrop-blur-sm">
              <p className="text-white font-semibold text-xs md:text-sm text-center">{item.name}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

