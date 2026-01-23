"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DestinationsCarousel } from "@/components/destinations-carousel"
import { ArtDesignNavigationTabs } from "@/components/art-design-navigation-tabs"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import girlPaintingCanvas from "@/assests/Subjects/Art&Design/rsz_girl-painting-canvas.jpg"
import girlSittingReading from "@/assests/Subjects/Art&Design/rsz_girl-sitting-table-reading-flipping-page.jpg"
import friendlyArtist from "@/assests/Subjects/Art&Design/rsz_friendly-artist.jpg"
import lciBarcelona from "@/assests/UniversityCampus/LCI Barcelona.jpg"
import universityOfPecs from "@/assests/UniversityCampus/University of Pécs.jpg"
import universidadLCI from "@/assests/UniversityCampus/Universidad LCI.jpg"
import alAkhawaynUniversity from "@/assests/UniversityCampus/Al Akhawayn University.jpg"
import businessEconomics from "@/assests/Subjects/Business&Economics.jpg"
import communications from "@/assests/Subjects/Communications.jpg"
import education from "@/assests/Subjects/Education.jpg"
import engineering from "@/assests/Subjects/Engineering.jpg"

// Image Carousel Component
const ArtDesignImageCarousel = () => {
  const carouselImages = [
    girlSittingReading,
    girlPaintingCanvas
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    dragFree: false,
    containScroll: 'trimSnaps'
  })

  const scrollPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  const scrollNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {carouselImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] min-w-0"
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src={image}
                  alt={`Art & Design image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        data-carousel-button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        data-carousel-button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default function ArtDesignPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[57vh] overflow-hidden">
        <Image
          src={friendlyArtist}
          alt="Friendly artist - Art & Design"
          fill
          className="object-cover animate-zoom-out"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-2xl font-bold uppercase tracking-wider mb-2">
              ART & DESIGN
            </h4>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
              Study Abroad in Art & Design
            </h1>
            <p className="text-base md:text-lg font-medium">
              Creative. Inspiring. Transformative.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <ArtDesignNavigationTabs />

      <div className="max-w-6xl mx-auto py-6 md:py-8">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>Study Abroad in Art & Design</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-4 md:mb-8 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                What to expect when you Study Abroad in Art & Design
              </h2>
              <div className="space-y-3 text-foreground">
                <p>
                  Studying abroad in Art & Design offers a unique opportunity to immerse yourself 
                  in diverse creative cultures, learn from world-renowned artists and designers, and 
                  develop your artistic skills in inspiring international settings. Expect to explore 
                  different artistic traditions, techniques, and perspectives that will enrich your 
                  creative journey.
                </p>
                <p>
                  You'll experience life in vibrant cultural hubs, from historic art centers in Europe 
                  to contemporary design studios in Asia. Art & Design programs abroad are globally 
                  recognized for their excellence in fine arts, graphic design, fashion, architecture, 
                  and digital media.
                </p>
                <p>
                  The opportunity to visit world-class museums, galleries, and studios, collaborate 
                  with international artists, and create work inspired by new environments will enhance 
                  your artistic development. Be prepared for an adventure that combines creative 
                  exploration with unforgettable cultural experiences and personal growth!
                </p>
              </div>
            </div>
            
            {/* Right Side - Image Carousel */}
            <div className="relative">
              <ArtDesignImageCarousel />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-4 md:mb-8 scroll-mt-28">
          <div className="text-left space-y-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
              Our Art & Design Study Abroad Programs
            </h2>
            <p className="text-lg text-[#424242] leading-relaxed">
              Art & Design Study Abroad Programs enrich your creativity, expand global perspectives, and provide hands-on experience that elevate both your artistic skills and career potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: universidadLCI,
                title: "Study Abroad at Universidad Austral in Argentina",
                duration: "Fall Semester, Spring Semester",
                description: "Study abroad at Universidad Austral in Argentina—one of Latin America's top-ranked private universities. Experience world-class academics in Buenos Aires, immerse in Argentine culture, and earn credits abroad at an affordable cost.",
                price: "Semester: $15,995"
              },
              {
                image: lciBarcelona,
                title: "Study Abroad at University of Strathclyde in Scotland",
                duration: "Academic Year, Fall Semester, Spring Semester, Summer Break",
                description: "Ready to immerse yourself in Scottish culture while earning academic credit? Study abroad at the University of Strathclyde in Glasgow—apply today and take the first step toward an unforgettable international experience!",
                price: "Semester: $19,495"
              },
              {
                image: alAkhawaynUniversity,
                title: "Study Abroad at Institut Culinaire de France in France",
                duration: "Spring Semester, Summer Break",
                description: "Discover culinary excellence in France with Institut Culinaire de France. Experience hands-on training and immerse yourself in the rich French culture.",
                price: "Semester: $16,995"
              },
              {
                image: universityOfPecs,
                title: "Study Abroad at Florence Culinary Arts School (FCAS) in Italy",
                duration: "Fall Semester, Spring Semester, Summer Break",
                description: "Discover culinary excellence in Italy. Study abroad in Florence and master the art of Italian cuisine at our renowned Culinary Arts School. Enroll today!",
                price: "Summer: $5,495"
              },
              {
                image: lciBarcelona,
                title: "Study Abroad at Accademia Riaci in Italy",
                duration: "Academic Year, Fall Semester, Spring Semester, Summer Break",
                description: "Explore your passion for art and design while studying abroad in Italy at Accademia Riaci. Experience a vibrant culture, expert faculty, and unique workshops.",
                price: "Summer: $5,495"
              },
              {
                image: lciBarcelona,
                title: "Study Abroad at LCI Barcelona in Spain",
                duration: "Fall Semester, Spring Semester",
                description: "Discover exciting study abroad opportunities at LCI Barcelona. Immerse yourself in a vibrant culture while advancing your education in a dynamic environment.",
                price: "Semester: $14,495"
              }
            ].map((program, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#424242] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {program.duration}
                  </p>
                  <p className="text-base text-[#424242] leading-relaxed mb-4 flex-grow">
                    {program.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-lg font-semibold text-[#424242] bg-[#E7E7E7] px-4 py-2 rounded inline-block">
                      {program.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-4 md:mb-8 scroll-mt-28">
          <div className="text-left space-y-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
              Benefits of Studying Art & Design Abroad
            </h2>
            <p className="text-lg text-[#424242] leading-relaxed">
              Art & Design Study Abroad Programs offer global inspiration, unique portfolio enhancement, and invaluable cultural and personal growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Global Inspiration */}
            <div className="border-b md:border-b-0 md:border-r border-border p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Global Inspiration
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Immerse yourself in diverse cultures and artistic traditions, fueling your creativity with new perspectives.
              </p>
            </div>

            {/* Portfolio Enhancement */}
            <div className="border-b md:border-b-0 md:border-r border-border p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Portfolio Enhancement
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Gain real-world experience and develop unique projects that set your portfolio apart from the competition.
              </p>
            </div>

            {/* Cultural and Personal Growth */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Cultural and Personal Growth
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Build independence, adaptability, and a global network while living and creating in an international environment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-8 scroll-mt-28">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-3 p-1 text-center">
            Study Abroad in Art & Design FAQs
          </h2>
          <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base p-1 text-center">
            Got questions about studying abroad in Art & Design? Get all the answers you need to 
            kickstart your creative journey with confidence!
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-3">
            <AccordionItem value="item-1" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What are the benefits of studying abroad in Art & Design?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Studying Art & Design abroad offers access to world-class art schools, diverse 
                  creative cultures, and inspiring environments. You'll learn from renowned artists 
                  and designers, explore different artistic traditions, and develop a global 
                  perspective that enhances your creative portfolio and career prospects.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  Do I need a portfolio to study Art & Design abroad?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Most Art & Design programs require a portfolio showcasing your creative work. 
                  Requirements vary by program and level, but typically include 10-20 pieces 
                  demonstrating your artistic skills, creativity, and range. Our advisors can 
                  help you prepare a strong portfolio.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What types of Art & Design programs are available?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Programs range from fine arts (painting, sculpture) to applied arts (graphic design, 
                  fashion, architecture). You can choose from semester programs, full degree programs, 
                  or specialized workshops. Many programs offer studio access, museum visits, and 
                  opportunities to exhibit your work.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What should I know about studying Art & Design abroad?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Art & Design programs abroad offer unique opportunities to experience different 
                  creative cultures, learn new techniques, and gain international exposure. Be 
                  prepared for studio work, portfolio development, and cultural immersion. Many 
                  programs provide materials and studio access, but some may require additional 
                  supplies.
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-4 text-center">
            <Link href="/about/faq" className="text-primary hover:text-primary/80 underline underline-offset-4 font-bold mt-1 inline-block">
              VIEW ALL FAQS
            </Link>
          </div>
        </section>

        {/* Explore Alternative Subjects Section */}
        <section className="mb-4 md:mb-8">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3">
            Explore Other Study Abroad Subjects
          </h2>
          <p className="text-muted-foreground mb-3 md:mb-4">
            Discover other incredible study abroad opportunities by subject area.
          </p>

          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-4">
              {/* First Set */}
              {[
                { href: "/subjects/art-design", image: friendlyArtist, title: "Art & Design" },
                { href: "/subjects/economics", image: businessEconomics, title: "Economics" },
                { href: "/subjects/communications", image: communications, title: "Communications" },
                { href: "/subjects/education", image: education, title: "Education" },
                { href: "/subjects/engineering", image: engineering, title: "Engineering" }
              ].map((subject, index) => (
                <Link key={index} href={subject.href} className="flex-shrink-0 w-[280px]">
                  <div className="group relative border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative w-full h-48">
                      <Image
                        src={subject.image}
                        alt={subject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        {subject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {[
                { href: "/subjects/art-design", image: friendlyArtist, title: "Art & Design" },
                { href: "/subjects/economics", image: businessEconomics, title: "Economics" },
                { href: "/subjects/communications", image: communications, title: "Communications" },
                { href: "/subjects/education", image: education, title: "Education" },
                { href: "/subjects/engineering", image: engineering, title: "Engineering" }
              ].map((subject, index) => (
                <Link key={`duplicate-${index}`} href={subject.href} className="flex-shrink-0 w-[280px]">
                  <div className="group relative border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative w-full h-48">
                      <Image
                        src={subject.image}
                        alt={subject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#424242] group-hover:text-[#1BB685] transition-colors">
                        {subject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


