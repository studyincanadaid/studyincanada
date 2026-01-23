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
import japanImage from "@/assests/Image/japanImage.jpg"
import sushiImage from "@/assests/Image/Sushi.jpg"
import tokyoImage from "@/assests/Image/tokyo.jpg"
import karaokeImage from "@/assests/Image/Karaoke.jpg"
import sakuraImage from "@/assests/Image/Sakura.jpg"

export const metadata: Metadata = {
  title: "Study in Japan - AbroadGuideBD",
  description: "Discover study abroad opportunities in Japan. Explore top universities and programs in Japan.",
}

export default function JapanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[82vh] overflow-hidden">
        <Image
          src={japanImage}
          alt="Aerial view of Tokyo cityscape with Fuji mountain in Japan"
          fill
          className="object-cover animate-zoom-out"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-2xl font-bold uppercase tracking-wider mb-2">
              JAPAN
            </h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Study Abroad in Japan
            </h1>
            <p className="text-lg md:text-xl font-medium">
              Innovative. Cultural. Transformative.
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
          <span>Study Abroad in Japan</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What to expect when you Study Abroad in Japan
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Studying abroad in Japan offers a unique blend of cutting-edge technology, 
                  ancient traditions, and world-class education. Expect to immerse yourself in 
                  a culture that seamlessly combines innovation with rich cultural heritage.
                </p>
                <p>
                  You'll experience life in one of the world's safest and most advanced countries, 
                  from bustling metropolises like Tokyo and Osaka to serene traditional towns. 
                  Japanese universities are globally recognized for their excellence in engineering, 
                  technology, business, and the arts.
                </p>
                <p>
                  The opportunity to learn Japanese, explore stunning natural landscapes, and 
                  engage with a welcoming community will enhance your academic journey. Be prepared 
                  for an adventure that combines rigorous academics with unforgettable cultural 
                  experiences and personal growth!
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button size="lg" className="w-full sm:w-auto">
                    APPLY NOW
                  </Button>
                </Link>
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
                    <strong>Language:</strong> Japanese (English programs available)
                  </li>
                  <li>
                    <strong>Currency:</strong> Japanese Yen (JPY)
                  </li>
                  <li>
                    <strong>Time Zone:</strong> JST (UTC+9)
                  </li>
                  <li>
                    <strong>Climate:</strong> Temperate with four distinct seasons
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
            Hear from students who have studied abroad in Japan and transformed their lives through 
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
                Our Japan Study Abroad Programs
              </h2>
              <p className="text-muted-foreground mb-4">
              “Discover the dynamic culture, breathtaking landscapes, and affordable living of Japan through our immersive, globally recognized study abroad programs.”
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
              <Carousel className="w-full">
                <CarouselContent>
                  {/* Program Card 1 */}
                  <CarouselItem>
                    <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48">
                        <Image
                          src={japanImage}
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
                          University of Tokyo
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
                          Study at top engineering universities with state-of-the-art facilities and cutting-edge research opportunities. Immerse yourself in Japan's world-renowned technology sector while experiencing the perfect blend of traditional culture and modern innovation.
                        </p>
                        <div className="bg-muted/50 rounded p-4 -mx-6 -mb-6">
                          <p className="text-lg font-bold text-primary">
                            SEMESTER: $9,800
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Program Card 2 */}
                  <CarouselItem>
                    <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48">
                        <Image
                          src={japanImage}
                          alt="Business & Economics Program"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Business & Economics Programs
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Waseda University
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
                          Learn from leading business schools and gain insights into Japan's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.
                        </p>
                        <p className="text-lg font-bold text-primary">
                          SEMESTER: $9,800
                        </p>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Program Card 3 */}
                  <CarouselItem>
                    <div className="bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48">
                        <Image
                          src={japanImage}
                          alt="Arts & Culture Program"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Arts & Culture Programs
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Kyoto University
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
                          Explore Japan's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Kyoto while experiencing authentic Japanese culture, from tea ceremonies to contemporary art scenes.
                        </p>
                        <p className="text-lg font-bold text-primary">
                          SEMESTER: $9,800
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-12 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What to do in Japan in your free time
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover Japan by exploring ancient temples, experiencing traditional culture, 
            enjoying world-class cuisine, and visiting stunning natural landscapes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Sushi Card */}
            <div className="group relative bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100/50 dark:border-rose-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={sushiImage}
                  alt="Sushi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    Sushi
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  From sushi and ramen to kaiseki dining, explore Japan's incredible food scene. 
                  Experience everything from street food to Michelin-starred restaurants.
                </p>
              </div>
            </div>
            
            {/* Explore Tokyo Card */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100/50 dark:border-blue-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tokyoImage}
                  alt="Explore Tokyo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    Explore Tokyo
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  Discover the vibrant energy of Tokyo with its modern skyscrapers, bustling streets, 
                  cutting-edge technology, and endless entertainment options.
                </p>
              </div>
            </div>
            
            {/* Karaoke Fun Card */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100/50 dark:border-purple-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={karaokeImage}
                  alt="Karaoke Fun"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    Karaoke Fun
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  Join friends for karaoke nights, enjoy anime and manga culture, visit gaming arcades, 
                  and immerse yourself in Japan's unique entertainment scene.
                </p>
              </div>
            </div>
            
            {/* Sakura Viewing Card */}
            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100/50 dark:border-pink-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={sakuraImage}
                  alt="Sakura Viewing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    Sakura Viewing
                  </h3>
                </div>
              </div>
              <div className="p-2">
                <p className="text-foreground/80 leading-relaxed">
                  Experience the breathtaking cherry blossoms in spring, visit beautiful gardens, 
                  relax in natural hot springs, and enjoy Japan's four distinct seasons.
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
            Study Abroad in Japan FAQs
          </h2>
          <p className="text-muted-foreground mb-6">
            Got questions about studying abroad in Japan? Get all the answers you need to 
            kickstart your journey with confidence!
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-none">
              <div className="bg-card border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What are the benefits of studying abroad in Japan?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Studying in Japan offers access to world-class universities, cutting-edge technology, 
                  and rich cultural experiences. You'll learn in one of the world's safest countries 
                  while gaining valuable language skills and global perspectives that enhance your 
                  career prospects.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-none">
              <div className="bg-card border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  What are the costs associated with studying in Japan?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Costs include tuition fees, which vary by program and university. Living expenses 
                  in major cities like Tokyo can be higher, but many programs offer affordable options. 
                  Additional costs include visa fees, health insurance, and personal expenses. 
                  Scholarships are available for qualified students.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <div className="bg-card border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  Do I need a student visa to study in Japan?
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
                  What should I know about living in Japan as an international student?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Japan offers excellent public transportation, safe cities, and a high quality of life. 
                  While Japanese is the primary language, many universities offer English-taught programs. 
                  Be prepared for cultural differences, seasonal weather changes, and the opportunity to 
                  experience one of the world's most unique cultures.
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Explore Alternative Destinations Section */}
        <section className="mb-12">
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

