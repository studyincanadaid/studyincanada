import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Phone, Mail, CreditCard, Luggage } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { DestinationsCarousel } from "@/components/destinations-carousel"
import ApplyNowButton from "@/components/ApplyNowButton"
import ukImage from "@/assests/Image/ukImage.jpg"

export const metadata: Metadata = {
  title: "Study in United Kingdom - BideshStudy",
  description: "Discover study abroad opportunities in the United Kingdom. Explore top universities and programs in UK.",
}

export default function UnitedKingdomPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[82vh] overflow-hidden">
        <Image
          src={ukImage}
          alt="Beautiful landscape of United Kingdom"
          fill
          className="object-cover animate-zoom-out"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-2xl font-bold uppercase tracking-wider mb-2">
              UNITED KINGDOM
            </h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Study Abroad in United Kingdom
            </h1>
            <p className="text-lg md:text-xl font-medium">
              Prestigious. Historic. World-Class.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-background border-b border-border sticky top-16 z-20">
        <div className="max-w-6xl mx-auto">
          <nav className="flex overflow-x-auto">
            <a href="#overview" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              OVERVIEW
            </a>
            <a href="#reviews" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              REVIEWS
            </a>
            <a href="#programs" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              PROGRAMS
            </a>
            <a href="#activities" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              ACTIVITIES
            </a>
            <a href="#how-to-apply" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              HOW TO APPLY
            </a>
            <a href="#faqs" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              FAQS
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto  py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>Study Abroad in United Kingdom</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What to expect when you Study Abroad in United Kingdom
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Studying abroad in the United Kingdom offers an unparalleled educational experience 
                  in one of the world's most prestigious academic destinations. Expect to immerse yourself 
                  in a country with rich history, diverse culture, and world-renowned universities like 
                  Oxford, Cambridge, and Imperial College London.
                </p>
                <p>
                  You'll experience life in a country that seamlessly blends centuries of tradition 
                  with cutting-edge innovation. From the historic streets of London and Edinburgh to the 
                  vibrant university cities of Manchester and Bristol, the UK offers diverse experiences 
                  for every student.
                </p>
                <p>
                  The opportunity to study in English, explore stunning landscapes, engage with a multicultural 
                  community, and benefit from globally recognized degrees will enhance your academic journey. 
                  Be prepared for an adventure that combines rigorous academics with unforgettable cultural 
                  experiences and personal growth!
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <ApplyNowButton 
                  variant="button"
                  className="inline-block"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    APPLY NOW
                  </Button>
                </ApplyNowButton>
                <Link href="/inquiry">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    GET MORE INFO
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li>
                    <strong>Language:</strong> English
                  </li>
                  <li>
                    <strong>Currency:</strong> British Pound (GBP)
                  </li>
                  <li>
                    <strong>Time Zone:</strong> GMT (UTC+0)
                  </li>
                  <li>
                    <strong>Climate:</strong> Temperate maritime climate
                  </li>
                  <li>
                    <strong>Safety:</strong> One of the safest countries globally
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="mb-12 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Student Reviews
          </h2>
          <p className="text-muted-foreground mb-8">
            Hear from students who have studied abroad in United Kingdom and transformed their lives through 
            this incredible experience.
          </p>
          
          <ReviewsCarousel />
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Half - Title and Description */}
            <div className="flex flex-col justify-center ">
              <h2 className="text-2xl md:text-3xl text-center font-bold text-foreground mb-2">
                Our United Kingdom Study Abroad Programs
              </h2>
              <p className="text-muted-foreground mb-4">
              "Discover the prestigious universities, rich history, and world-class education of the United Kingdom through our immersive, globally recognized study abroad programs."
              </p>
              <div className="flex justify-center">
                <Link href="/apply">
                  <Button size="lg" className="w-full sm:w-auto">
                    VIEW ALL AVAILABLE PROGRAMS
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Half - Program Cards Carousel */}
            <div className="relative">
              <Carousel className="w-full" opts={{ align: "start", containScroll: "trimSnaps" }}>
                <CarouselContent>
                  {/* Program Card 1 */}
                  <CarouselItem className="basis-3/4">
                    <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48">
                        <Image
                          src={ukImage}
                          alt="Business & Management Program"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Business & Management Programs
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          London School of Economics
                        </p>
                        <div className="flex gap-2 mb-4 pb-4 border-b border-border">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            FALL SEMESTER
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            SPRING SEMESTER
                          </span>
                        </div>
                        <p className="text-foreground mb-4 text-sm leading-relaxed">
                          Study at top business schools with world-class facilities and renowned faculty. Immerse yourself in the UK's global business hub while experiencing the perfect blend of traditional academic excellence and modern business practices.
                        </p>
                        <div className="bg-muted/50 rounded p-4 -mx-6 -mb-6">
                          <p className="text-lg font-bold text-primary">
                            SEMESTER: $12,500
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Program Card 2 */}
                  <CarouselItem className="basis-3/4">
                    <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48">
                        <Image
                          src={ukImage}
                          alt="Engineering & Technology Program"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Engineering & Technology Programs
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Imperial College London
                        </p>
                        <div className="flex gap-2 mb-4 pb-4 border-b border-border">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            FALL SEMESTER
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            SPRING SEMESTER
                          </span>
                        </div>
                        <p className="text-foreground mb-4 text-sm leading-relaxed">
                          Learn from leading engineering institutions and gain insights into cutting-edge research and innovation. Experience world-class facilities with experienced faculty and industry connections in one of the world's top engineering destinations.
                        </p>
                        <div className="bg-muted/50 rounded p-4 -mx-6 -mb-6">
                          <p className="text-lg font-bold text-primary">
                            SEMESTER: $12,500
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Program Card 3 */}
                  <CarouselItem className="basis-3/4">
                    <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48">
                        <Image
                          src={ukImage}
                          alt="Arts & Humanities Program"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Arts & Humanities Programs
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          University of Oxford
                        </p>
                        <div className="flex gap-2 mb-4 pb-4 border-b border-border">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            FALL SEMESTER
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            SPRING SEMESTER
                          </span>
                        </div>
                        <p className="text-foreground mb-4 text-sm leading-relaxed">
                          Explore the UK's rich cultural heritage through literature, history, philosophy, and the arts. Study in historic Oxford and Cambridge while experiencing authentic British culture, from Shakespeare to contemporary art scenes.
                        </p>
                        <div className="bg-muted/50 rounded p-4 -mx-6 -mb-6">
                          <p className="text-lg font-bold text-primary">
                            SEMESTER: $12,500
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-12 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What to do in United Kingdom in your free time
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover the United Kingdom by exploring historic landmarks, experiencing rich culture, 
            enjoying world-class cuisine, and visiting stunning landscapes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* British Cuisine Card */}
            <div className="group relative bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100/50 dark:border-rose-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={ukImage}
                  alt="British Cuisine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    British Cuisine
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  From fish and chips to afternoon tea, explore the UK's diverse food scene. 
                  Experience everything from traditional pubs to Michelin-starred restaurants in London.
                </p>
              </div>
            </div>
            
            {/* Explore London Card */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100/50 dark:border-blue-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={ukImage}
                  alt="Explore London"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    Explore London
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  Discover the vibrant energy of London with its historic landmarks, world-class museums, 
                  West End theaters, and diverse neighborhoods.
                </p>
              </div>
            </div>
            
            {/* Cultural Heritage Card */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100/50 dark:border-purple-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={ukImage}
                  alt="Cultural Heritage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    Cultural Heritage
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  Visit historic castles, royal palaces, ancient cathedrals, and world-renowned museums. 
                  Immerse yourself in the UK's rich history and cultural traditions.
                </p>
              </div>
            </div>
            
            {/* Countryside & Nature Card */}
            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100/50 dark:border-pink-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={ukImage}
                  alt="Countryside & Nature"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    Countryside & Nature
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  Experience the breathtaking countryside, visit the Scottish Highlands, explore the Lake District, 
                  and enjoy the UK's beautiful natural landscapes and four distinct seasons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="how-to-apply" className="mb-12 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            How to Apply
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    1. Confirm your program of interest
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    2. Submit your completed application form
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    3. Speak to one of our study abroad experts
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    4. Wait for program acceptance
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    5. Pay your program deposit
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Luggage className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    6. Get ready for the experience of a lifetime!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-12 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Study Abroad in United Kingdom FAQs
          </h2>
          <p className="text-muted-foreground mb-6">
            Got questions about studying abroad in United Kingdom? Get all the answers you need to 
            kickstart your journey with confidence!
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-none">
              <div className="bg-card border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What are the benefits of studying abroad in United Kingdom?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Studying in the UK offers access to world-class universities, globally recognized degrees, 
                  and rich cultural experiences. You'll learn in one of the world's most prestigious academic 
                  destinations while gaining valuable skills and global perspectives that enhance your 
                  career prospects.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-none">
              <div className="bg-card border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What are the costs associated with studying in United Kingdom?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Costs include tuition fees, which vary by program and university. Living expenses 
                  in major cities like London can be higher, but many programs offer affordable options. 
                  Additional costs include visa fees, health insurance, and personal expenses. 
                  Scholarships are available for qualified students.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <div className="bg-card border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  Do I need a student visa to study in United Kingdom?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Yes, international students typically need a student visa. The process requires 
                  proof of enrollment, financial documentation, and a valid passport. Our advisors 
                  will guide you through the visa application process.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-none">
              <div className="bg-card border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What should I know about living in United Kingdom as an international student?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  The UK offers excellent public transportation, safe cities, and a high quality of life. 
                  English is the primary language, making it accessible for international students. 
                  Be prepared for cultural differences, variable weather, and the opportunity to 
                  experience one of the world's most historic and culturally rich countries.
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Explore Alternative Destinations Section */}
        <section className="mb-12 bg-muted/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Explore Alternative Study Abroad Destinations
          </h2>
          <p className="text-muted-foreground mb-6">
            Discover other incredible study abroad opportunities around the world.
          </p>

          <div className="relative">
            <DestinationsCarousel />
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="mb-12">
          <div className="bg-card border border-border rounded p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Get more information
            </h2>
            <p className="text-muted-foreground mb-6">
              Craving more info? Discover how you can start your epic study abroad journey.
            </p>
            <Link href="/inquiry">
              <Button size="lg" className="w-full sm:w-auto">
                SEND ME THE INFO!
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
 