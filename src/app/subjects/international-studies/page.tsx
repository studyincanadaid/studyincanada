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
import { InternationalStudiesNavigationTabs } from "@/components/international-studies-navigation-tabs"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import internationalStudies from "@/assests/Subjects/international-studies.jpg"
import lciBarcelona from "@/assests/UniversityCampus/LCI Barcelona.jpg"
import universityOfPecs from "@/assests/UniversityCampus/University of Pécs.jpg"
import universidadLCI from "@/assests/UniversityCampus/Universidad LCI.jpg"
import alAkhawaynUniversity from "@/assests/UniversityCampus/Al Akhawayn University.jpg"
import fudanUniversity from "@/assests/UniversityCampus/FudanUniversity.jpg"
import pekingUniversity from "@/assests/UniversityCampus/PekingUniversity.jpg"
import tsinghuaUniversity from "@/assests/UniversityCampus/TsinghuaUniversity.jpg"
import businessEconomics from "@/assests/Subjects/Business&Economics.jpg"
import friendlyArtist from "@/assests/Subjects/Art&Design/rsz_friendly-artist.jpg"
import communications from "@/assests/Subjects/Communications.jpg"
import education from "@/assests/Subjects/Education.jpg"
import engineering from "@/assests/Subjects/Engineering.jpg"

// Image Carousel Component
const InternationalStudiesImageCarousel = () => {
  const carouselImages = [
    internationalStudies,
    fudanUniversity
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
                  alt={`International Studies image ${index + 1}`}
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

export default function InternationalStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[57vh] overflow-hidden">
        <Image
          src={internationalStudies}
          alt="International Studies - Study Abroad"
          fill
          className="object-cover animate-zoom-out"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-2xl font-bold uppercase tracking-wider mb-2">
              INTERNATIONAL STUDIES
            </h4>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
              Study Abroad in International Studies
            </h1>
            <p className="text-base md:text-lg font-medium">
              Connect. Understand. Transform.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <InternationalStudiesNavigationTabs />

      <div className="max-w-6xl mx-auto py-6 md:py-8">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>Study Abroad in International Studies</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-4 md:mb-8 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                What to expect when you Study Abroad in International Studies
              </h2>
              <div className="space-y-3 text-foreground">
                <p>
                  Studying abroad in International Studies offers a unique opportunity to immerse yourself 
                  in global affairs, learn from world-renowned experts and diplomats, 
                  and develop your understanding of international relations, politics, and global issues in inspiring international settings. Expect to explore 
                  different perspectives, diplomatic approaches, and cultural insights that will 
                  enrich your academic and professional journey.
                </p>
                <p>
                  You'll experience life in vibrant global centers, from diplomatic hubs in Europe 
                  to emerging power centers in Asia. International Studies programs abroad are globally 
                  recognized for their excellence in international relations, global politics, diplomacy, 
                  and cross-cultural communication.
                </p>
                <p>
                  The opportunity to study international organizations, visit embassies and consulates, collaborate 
                  with international students, and engage with diverse global perspectives will enhance 
                  your professional development. Be prepared for an adventure that combines academic 
                  excellence with unforgettable cultural experiences and personal transformation!
                </p>
              </div>
            </div>
            
            {/* Right Side - Image Carousel */}
            <div className="relative">
              <InternationalStudiesImageCarousel />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-4 md:mb-8 scroll-mt-28">
          <div className="text-left space-y-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
              Our International Studies Study Abroad Programs
            </h2>
            <p className="text-lg text-[#424242] leading-relaxed">
              International Studies Study Abroad Programs enhance your global perspective, expand diplomatic understanding, and provide immersive experiences that elevate both your academic knowledge and career potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: fudanUniversity,
                title: "Study Abroad at Fudan University in China",
                duration: "Fall Semester, Spring Semester, Summer Break",
                description: "Study abroad at Fudan University in Shanghai—one of China's most prestigious universities. Experience world-class academics in international studies, immerse in Chinese culture, and earn credits abroad at an affordable cost.",
                price: "Semester: $12,995"
              },
              {
                image: pekingUniversity,
                title: "Study Abroad at Peking University in China",
                duration: "Academic Year, Fall Semester, Spring Semester",
                description: "Ready to immerse yourself in Chinese culture while earning academic credit? Study abroad at Peking University in Beijing—apply today and take the first step toward an unforgettable international experience!",
                price: "Semester: $13,995"
              },
              {
                image: tsinghuaUniversity,
                title: "Study Abroad at Tsinghua University in China",
                duration: "Fall Semester, Spring Semester",
                description: "Discover international studies excellence in China with Tsinghua University. Experience hands-on learning in global affairs and immerse yourself in the rich Chinese culture.",
                price: "Semester: $12,995"
              },
              {
                image: universidadLCI,
                title: "Study Abroad at Universidad Austral in Argentina",
                duration: "Fall Semester, Spring Semester, Summer Break",
                description: "Study abroad in Buenos Aires and master the art of international relations at Universidad Austral. Enroll today!",
                price: "Semester: $15,995"
              },
              {
                image: alAkhawaynUniversity,
                title: "Study Abroad at Al Akhawayn University in Morocco",
                duration: "Academic Year, Fall Semester, Spring Semester",
                description: "Explore your passion for international studies while studying abroad in Morocco at Al Akhawayn University. Experience a vibrant culture, expert faculty, and unique diplomatic opportunities.",
                price: "Semester: $11,995"
              },
              {
                image: universityOfPecs,
                title: "Study Abroad at University of Pécs in Hungary",
                duration: "Fall Semester, Spring Semester",
                description: "Discover exciting study abroad opportunities at the University of Pécs. Immerse yourself in a vibrant culture while advancing your education in international studies and global affairs.",
                price: "Semester: $10,995"
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
              Benefits of Studying International Studies Abroad
            </h2>
            <p className="text-lg text-[#424242] leading-relaxed">
              International Studies Study Abroad Programs offer global diplomatic perspectives, unique academic opportunities, and invaluable professional and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Global Diplomatic Perspectives */}
            <div className="border-b md:border-b-0 md:border-r border-border p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Global Diplomatic Perspectives
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Immerse yourself in diverse political systems and diplomatic practices, expanding your understanding of global governance and international relations.
              </p>
            </div>

            {/* Academic Excellence */}
            <div className="border-b md:border-b-0 md:border-r border-border p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Academic Excellence
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Gain real-world experience studying international organizations, visiting diplomatic missions, and developing unique insights that set you apart from the competition.
              </p>
            </div>

            {/* Professional and Personal Growth */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Professional and Personal Growth
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Build independence, cross-cultural communication skills, and a global network while living and studying in an international environment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-8 scroll-mt-28">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-3 p-1 text-center">
            Study Abroad in International Studies FAQs
          </h2>
          <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base p-1 text-center">
            Got questions about studying abroad in International Studies? Get all the answers you need to 
            kickstart your academic journey with confidence!
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-3">
            <AccordionItem value="item-1" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What are the benefits of studying abroad in International Studies?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Studying International Studies abroad offers access to world-class academic programs, diverse 
                  political perspectives, and inspiring environments. You'll learn from renowned experts 
                  and diplomats, explore different international relations theories, and develop a global 
                  perspective that enhances your academic portfolio and career prospects.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  Do I need prior international studies coursework to study International Studies abroad?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Most International Studies programs welcome students at various levels. Requirements vary by 
                  program, but many accept students from different academic backgrounds. Some programs 
                  may prefer basic political science or history courses, but opportunities are 
                  available for beginners and experienced students alike. Our advisors can help you 
                  find the right program for your level.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What types of International Studies programs are available?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Programs range from international relations and global politics to diplomacy, international law, 
                  and area studies. You can choose from semester programs, full degree programs, 
                  or specialized workshops. Many programs offer access to international organizations, diplomatic missions, 
                  and opportunities to engage with diverse global perspectives.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What should I know about studying International Studies abroad?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  International Studies programs abroad offer unique opportunities to experience different 
                  political systems, learn new languages, and gain international exposure. Be 
                  prepared for intensive research, cultural immersion, and academic engagement. Many 
                  programs provide access to embassies, consulates, and professional networks.
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
                { href: "/subjects/business-economics", image: businessEconomics, title: "Business & Economics" },
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
                { href: "/subjects/business-economics", image: businessEconomics, title: "Business & Economics" },
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

