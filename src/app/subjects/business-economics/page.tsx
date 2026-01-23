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
import { BusinessEconomicsNavigationTabs } from "@/components/business-economics-navigation-tabs"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import businessEconomics from "@/assests/Subjects/Business&Economics.jpg"
import lciBarcelona from "@/assests/UniversityCampus/LCI Barcelona.jpg"
import universityOfPecs from "@/assests/UniversityCampus/University of Pécs.jpg"
import universidadLCI from "@/assests/UniversityCampus/Universidad LCI.jpg"
import alAkhawaynUniversity from "@/assests/UniversityCampus/Al Akhawayn University.jpg"
import udayanaUniversity from "@/assests/UniversityCampus/Udayana University.jpg"
import mahidolUniversity from "@/assests/UniversityCampus/Mahidol University.jpg"
import friendlyArtist from "@/assests/Subjects/Art&Design/rsz_friendly-artist.jpg"
import communications from "@/assests/Subjects/Communications.jpg"
import education from "@/assests/Subjects/Education.jpg"
import engineering from "@/assests/Subjects/Engineering.jpg"

// Image Carousel Component
const BusinessEconomicsImageCarousel = () => {
  const carouselImages = [
    businessEconomics,
    businessEconomics
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
                  alt={`Business & Economics image ${index + 1}`}
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

export default function BusinessEconomicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[57vh] overflow-hidden">
        <Image
          src={businessEconomics}
          alt="Business & Economics - Study Abroad"
          fill
          className="object-cover animate-zoom-out"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-2xl font-bold uppercase tracking-wider mb-2">
              BUSINESS & ECONOMICS
            </h4>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
              Study Abroad in Business & Economics
            </h1>
            <p className="text-base md:text-lg font-medium">
              Strategic. Global. Empowering.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <BusinessEconomicsNavigationTabs />

      <div className="max-w-6xl mx-auto py-6 md:py-8 px-4">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>Study Abroad in Business & Economics</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-4 md:mb-8 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                What to expect when you Study Abroad in Business & Economics
              </h2>
              <div className="space-y-3 text-foreground">
                <p>
                  Studying abroad in Business & Economics offers an exceptional opportunity to gain 
                  international business insights, understand global markets, and develop a competitive 
                  edge in today's interconnected economy. Expect to learn from world-class faculty, 
                  engage with diverse business practices, and build a global network of professional 
                  contacts.
                </p>
                <p>
                  You'll experience life in major financial hubs and economic centers around the world, 
                  from European business capitals to emerging markets in Asia and Latin America. Business 
                  & Economics programs abroad are globally recognized for their excellence in management, 
                  finance, marketing, international business, and economic analysis.
                </p>
                <p>
                  The opportunity to participate in case studies, internships with multinational 
                  corporations, and networking events with industry leaders will significantly enhance 
                  your business acumen and career prospects. Be prepared for an experience that combines 
                  academic rigor with real-world business insights and invaluable cultural immersion!
                </p>
              </div>
            </div>
            
            {/* Right Side - Image Carousel */}
            <div className="relative">
              <BusinessEconomicsImageCarousel />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-4 md:mb-8 scroll-mt-28">
          <div className="text-left space-y-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
              Our Business & Economics Study Abroad Programs
            </h2>
            <p className="text-lg text-[#424242] leading-relaxed">
              Business & Economics Study Abroad Programs provide strategic insights, global perspectives, and hands-on experience that enhance both your business knowledge and career potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: udayanaUniversity,
                title: "Study Abroad at Udayana University in Bali",
                duration: "Fall Semester, Spring Semester",
                description: "Explore vibrant Bali while studying at Udayana University. Experience rich culture, stunning landscapes, and a unique academic journey in paradise.",
                price: "Semester: $9,995"
              },
              {
                image: alAkhawaynUniversity,
                title: "Study Abroad at Al Akhawayn University in Morocco",
                duration: "Fall Semester, Spring Semester",
                description: "Discover the charm of Morocco while studying at Al Akhawayn University. Experience a unique blend of culture, education, and adventure in a stunning setting.",
                price: "Semester: $10,995"
              },
              {
                image: mahidolUniversity,
                title: "Study Abroad at Mahidol University in Thailand",
                duration: "Fall Semester, Spring Semester, Summer Break",
                description: "Discover unique study abroad opportunities at Mahidol University International College in Thailand. Immerse yourself in vibrant culture and quality education.",
                price: "Semester: $8,495"
              },
              {
                image: universityOfPecs,
                title: "Study Abroad at University of Pécs in Hungary",
                duration: "Fall Semester, Spring Semester, Summer Break",
                description: "Explore exciting study abroad opportunities in Hungary at the University of Pecs. Immerse yourself in a vibrant culture while earning your degree.",
                price: "Semester: $8,495"
              },
              {
                image: lciBarcelona,
                title: "Study Abroad at LCI Barcelona in Spain",
                duration: "Fall Semester, Spring Semester",
                description: "Discover exciting study abroad opportunities at LCI Barcelona. Immerse yourself in a vibrant culture while advancing your education in a dynamic environment.",
                price: "Semester: $14,495"
              },
              {
                image: universidadLCI,
                title: "Study Abroad at Universidad LCI Veritas in Costa Rica",
                duration: "Fall Semester, Spring Semester, Summer Break, Winter Break",
                description: "Discover study abroad opportunities at Universidad LCI Veritas. Immerse yourself in vibrant culture, gain valuable experience, and enhance your education.",
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
                  <p className="text-base text-[#424242] leading-relaxed mb-4 flex-grow line-clamp-2">
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
              Benefits of Studying Business & Economics Abroad
            </h2>
            <p className="text-lg text-[#424242] leading-relaxed">
              Business & Economics Study Abroad Programs offer global business insights, professional network expansion, and invaluable cultural and personal growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Global Business Insights */}
            <div className="border-b md:border-b-0 md:border-r border-border p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Global Business Insights
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Understand international markets, diverse business practices, and global economic trends from a first-hand perspective.
              </p>
            </div>

            {/* Professional Network Expansion */}
            <div className="border-b md:border-b-0 md:border-r border-border p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Professional Network Expansion
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Build connections with international peers, professors, and industry professionals that will benefit your career for years to come.
              </p>
            </div>

            {/* Career Advancement */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#424242] mb-3">
                Career Advancement
              </h3>
              <p className="text-base text-[#424242] leading-relaxed">
                Gain cross-cultural communication skills, international experience, and a global mindset that employers highly value.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="mb-4 md:mb-8 scroll-mt-28">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Student Reviews
          </h2>
          <p className="text-muted-foreground mb-6">
            Hear from students who have studied abroad in Business & Economics and transformed their lives through this incredible experience.
          </p>
          
          <ReviewsCarousel />
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-4 md:mb-8 scroll-mt-28">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Activities & Experiences
          </h2>
          <p className="text-muted-foreground mb-6">
            Beyond the classroom, Business & Economics study abroad programs offer rich cultural and professional experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Corporate Visits & Internships
              </h3>
              <p className="text-muted-foreground">
                Visit multinational corporations, attend business seminars, and participate in internships that provide real-world business experience.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Networking Events
              </h3>
              <p className="text-muted-foreground">
                Attend business networking events, career fairs, and industry conferences to connect with professionals and explore career opportunities.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Case Studies & Projects
              </h3>
              <p className="text-muted-foreground">
                Work on real-world business cases, participate in consulting projects, and collaborate with international teams on practical assignments.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Cultural Immersion
              </h3>
              <p className="text-muted-foreground">
                Explore local markets, understand regional business customs, and experience cultural activities that enrich your global perspective.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="how-to-apply" className="mb-4 md:mb-8 scroll-mt-28">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            How to Apply
          </h2>
          <p className="text-muted-foreground mb-6">
            Ready to start your Business & Economics study abroad journey? Follow these simple steps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Choose Your Program
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Select a Business & Economics program that matches your academic and career goals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Submit Application
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete and submit your application with all required documents.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1BB685] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Get Expert Guidance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Work with our study abroad experts to prepare for your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/how-it-works/apply">
              <Button size="lg" className="bg-[#1BB685] hover:bg-[#1BB685]/90 text-white">
                Learn More About Applying
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-8 scroll-mt-28">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-3 p-1 text-center">
            Study Abroad in Business & Economics FAQs
          </h2>
          <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base p-1 text-center">
            Got questions about studying abroad in Business & Economics? Get all the answers you need to 
            kickstart your business journey with confidence!
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-3">
            <AccordionItem value="item-1" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What are the benefits of studying abroad in Business & Economics?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Studying Business & Economics abroad offers access to world-class business schools, 
                  international business perspectives, and global networking opportunities. You'll learn 
                  from renowned professors, understand diverse economic systems, and develop cross-cultural 
                  business skills that enhance your career prospects in today's global economy.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What business programs are available for study abroad?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Programs range from general business administration to specialized fields like finance, 
                  marketing, international business, and economics. You can choose from semester programs, 
                  full degree programs, or short-term intensive courses. Many programs include internships, 
                  corporate visits, and networking opportunities with local businesses.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  Do I need prior business experience to study Business & Economics abroad?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  No prior business experience is required for most undergraduate programs. However, 
                  some advanced or specialized programs may have prerequisites. Our advisors can help 
                  you find programs that match your academic background and career goals.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-none">
              <div className="bg-card border border-border rounded px-4 md:px-5">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                  What career opportunities does studying Business & Economics abroad provide?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-3">
                  Studying Business & Economics abroad opens doors to careers in international business, 
                  consulting, finance, marketing, and entrepreneurship. Employers highly value candidates 
                  with international experience, cross-cultural skills, and a global perspective. Many 
                  students use their study abroad experience as a stepping stone to work with 
                  multinational corporations or pursue careers in international trade and development.
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

