import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Phone, Mail, CreditCard, Luggage, Bed, MessageCircle, Shield, Clock, Utensils, Eye, MapPin, Music, Flower, ArrowRight, Sparkles } from "lucide-react"
import { InquiryForm } from "@/components/inquiry-form"
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
import { ImageCardCarousel } from "@/components/image-card-carousel"
import { ChinaProgramsCarousel } from "@/components/china-programs-carousel"
import { DestinationNavigationTabs } from "@/components/destination-navigation-tabs"
import chinaImage from "@/assests/Image/chinaImage.jpg"
import pureHoney from "@/assests/AdvertisementImage/pureHoney.jpg"
import datesAd from "@/assests/AdvertisementImage/dates.jpg"
import sushiImage from "@/assests/Image/Sushi.jpg"
import tokyoImage from "@/assests/Image/tokyo.jpg"
import karaokeImage from "@/assests/Image/Karaoke.jpg"
import sakuraImage from "@/assests/Image/Sakura.jpg"
import universityTokyo from "@/assests/UniversityFreeImage/universityTokyo.jpg"
import wasedaUniversity from "@/assests/UniversityFreeImage/wasedaUniversity.jpg"
import kyotoUniversity from "@/assests/UniversityFreeImage/kyotoUniversity.jpg"

export const metadata: Metadata = {
  title: "Study in China - BideshStudy",
  description: "Discover study abroad opportunities in China. Explore top universities and programs in China.",
}

export default function ChinaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[57vh] overflow-hidden">
        <Image
          src={chinaImage}
          alt="Aerial view of Beijing cityscape in China"
          fill
          className="object-cover animate-zoom-out"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-2xl font-bold uppercase tracking-wider mb-2">
              CHINA
            </h4>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
              Study Abroad in China
            </h1>
            <p className="text-base md:text-lg font-medium">
              Ancient. Modern. Extraordinary.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <DestinationNavigationTabs country="China" />

      <div className="max-w-6xl mx-auto  py-6 md:py-8">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>Study Abroad in China</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-6 md-mb-12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What to expect when you Study Abroad in China
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Studying abroad in China offers a unique blend of ancient civilization, 
                  modern innovation, and world-class education. Expect to immerse yourself in 
                  a culture that seamlessly combines thousands of years of history with rapid 
                  technological advancement.
                </p>
                <p>
                  You'll experience life in one of the world's fastest-growing economies, 
                  from dynamic megacities like Beijing and Shanghai to historic cultural centers. 
                  Chinese universities are globally recognized for their excellence in engineering, 
                  business, technology, and traditional medicine.
                </p>
                <p>
                  The opportunity to learn Mandarin, explore stunning landscapes, and 
                  engage with a rich cultural heritage will enhance your academic journey. Be prepared 
                  for an adventure that combines rigorous academics with unforgettable cultural 
                  experiences and personal growth!
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li>
                    <strong>Language:</strong> Mandarin (English programs available)
                  </li>
                  <li>
                    <strong>Currency:</strong> Chinese Yuan (CNY)
                  </li>
                  <li>
                    <strong>Time Zone:</strong> CST (UTC+8)
                  </li>
                  <li>
                    <strong>Climate:</strong> Diverse with four distinct seasons
                  </li>
                  <li>
                    <strong>Safety:</strong> Safe and welcoming for international students
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-4 md:mb-8 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Half - Title and Description */}
            <div className="flex flex-col justify-center ">
              <h2 className="text-xl md:text-2xl text-center font-bold text-foreground mb-2">
                Our China Study Abroad Programs
              </h2>
              <p className="text-muted-foreground mb-3">
              "Discover the rich culture, ancient history, and affordable living of China through our immersive, globally recognized study abroad programs."
              </p>
              <div className="flex justify-center">
                <Link href="/destinations/china/programs">
                  <Button size="lg" className="w-full sm:w-auto bg-[#1BB685] hover:bg-[#1BB685]/90 text-white">
                    VIEW ALL AVAILABLE PROGRAMS
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Half - Program Cards Carousel */}
            <div className="relative">
              <ChinaProgramsCarousel />
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="mb-4 md:mb-8 scroll-mt-28">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Student Reviews
          </h2>
          <p className="text-muted-foreground mb-6">
            Hear from students who have studied abroad in China and transformed their lives through 
            this incredible experience.
          </p>
          
          <ReviewsCarousel country="China" />
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-4 md:mb-8 scroll-mt-28">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
            What to do in China in your free time
          </h2>
          <p className="text-muted-foreground mb-3 md:mb-6">
            Discover China by exploring ancient landmarks, experiencing traditional culture, 
            enjoying world-class cuisine, and visiting stunning natural landscapes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Food Card */}
            <div className="group relative bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100/50 dark:border-rose-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={sushiImage}
                  alt="Chinese Cuisine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-white drop-shadow-lg" />
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      Chinese Cuisine
                    </h3>
                  </div>
                  <Eye className="h-5 w-5 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-foreground/80 leading-relaxed">
                  From dim sum and Peking duck to hot pot and street food, explore China's incredible food scene. 
                  Experience everything from traditional dishes to modern fusion cuisine.
                </p>
              </div>
            </div>
            
            {/* Explore Beijing Card */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100/50 dark:border-blue-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tokyoImage}
                  alt="Explore Beijing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-white drop-shadow-lg" />
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      Explore Beijing
                    </h3>
                  </div>
                  <Eye className="h-5 w-5 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-foreground/80 leading-relaxed">
                  Discover the vibrant energy of Beijing with its modern skyscrapers, historic palaces, 
                  ancient temples, and bustling markets.
                </p>
              </div>
            </div>
            
            {/* Cultural Activities Card */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100/50 dark:border-purple-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={karaokeImage}
                  alt="Cultural Activities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-white drop-shadow-lg" />
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      Cultural Activities
                    </h3>
                  </div>
                  <Eye className="h-5 w-5 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-foreground/80 leading-relaxed">
                  Experience traditional Chinese opera, martial arts, calligraphy, and tea ceremonies. 
                  Immerse yourself in China's rich cultural heritage.
                </p>
              </div>
            </div>
            
            {/* Great Wall Card */}
            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100/50 dark:border-pink-900/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={sakuraImage}
                  alt="Great Wall"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flower className="h-5 w-5 text-white drop-shadow-lg" />
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      Great Wall
                    </h3>
                  </div>
                  <Eye className="h-5 w-5 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-foreground/80 leading-relaxed">
                  Visit the Great Wall of China, explore ancient temples, discover beautiful gardens, 
                  and experience China's rich historical heritage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support all the way Section */}
        <section className="mb-2 md:mb-12 scroll-mt-28 bg-card   p-6 md:p-8 ">
          <h2 className="text-xl md:text-3xl font-bold text-foreground text-center mb-4">
            Support all the way
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-8 md:border md:border-border md:rounded-lg lg:border-0 lg:rounded-none">
            {/* Feature 1 - Accommodations */}
            <div className="flex flex-col items-center text-center p-2 md:p-4 lg:p-8 border-r border-b border-dotted border-border lg:border-r lg:border-b-0">
              <div className="mb-3 p-4 rounded-full bg-primary/10">
                <Bed className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <p className="text-foreground text-xs md:text-sm leading-relaxed">
                Accommodations with quality and safety
              </p>
            </div>

            {/* Feature 2 - Advisor */}
            <div className="flex flex-col items-center text-center p-2 md:p-4 lg:p-8 border-b border-dotted md:border-r lg:border-r lg:border-b-0 border-border">
              <div className="mb-3 p-4 rounded-full bg-primary/10">
                <MessageCircle className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <p className="text-foreground text-xs md:text-sm leading-relaxed">
                Dedicated advisor and on-site coordinator
              </p>
            </div>

            {/* Feature 3 - Insurance */}
            <div className="flex flex-col items-center text-center p-2 md:p-4 lg:p-8 border-r border-dotted md:border-b lg:border-r lg:border-b-0 border-border">
              <div className="mb-3 p-4 rounded-full bg-primary/10">
                <Shield className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <p className="text-foreground text-xs md:text-sm leading-relaxed">
                Comprehensive travel medical insurance
              </p>
            </div>

            {/* Feature 4 - 24/7 Assistance */}
            <div className="flex flex-col items-center text-center p-2 md:p-4 lg:p-8   lg:border-b-0 border-dotted border-border">
              <div className="mb-3 p-4 rounded-full bg-primary/10">
                <Clock className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <p className="text-foreground text-xs md:text-sm leading-relaxed">
                24/7 emergency travel assistance
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about/health-safety" className="text-black hover:text-black/80 underline underline-offset-4 decoration-black font-semibold inline-block">
              HEALTH & SAFETY ABROAD
            </Link>
          </div>
        </section>

        {/* Image Card Carousel Section */}
        <section className="mb-12 mt-12 md:mt-24 scroll-mt-28">
          <div className="relative w-full overflow-hidden">
            <ImageCardCarousel />
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="how-to-apply" className="mb-12 scroll-mt-28 bg-muted/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            How to Apply
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  md:gap-4">
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    1. Confirm your program of interest
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    2. Submit your completed application form
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    3. Speak to one of our study abroad experts
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    4. Wait for program acceptance
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    5. Pay your program deposit
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Luggage className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    6. Get ready for the experience of a lifetime!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-12 scroll-mt-28">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-1 md:mb-4 p-1">
            Study Abroad in China FAQs
          </h2>
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base p-1">
            Got questions about studying abroad in China? Get all the answers you need to 
            kickstart your journey with confidence!
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-4 ">
            <AccordionItem value="item-1" className="border-none">
              <div className="bg-card border border-border rounded px-6">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:no-underline py-4">
                  What are the benefits of studying abroad in China?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Studying in China offers access to world-class universities, rapid economic growth, 
                  and rich cultural experiences. You'll learn in one of the world's largest economies 
                  while gaining valuable Mandarin language skills and global perspectives that enhance your 
                  career prospects.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-none">
              <div className="bg-card border border-border rounded px-6">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:no-underline py-4">
                  What are the costs associated with studying in China?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Costs include tuition fees, which vary by program and university. Living expenses 
                  in major cities like Beijing and Shanghai can be moderate compared to Western countries. 
                  Additional costs include visa fees, health insurance, and personal expenses. 
                  Scholarships are available for qualified students.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <div className="bg-card border border-border rounded px-6">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:no-underline py-4">
                  Do I need a student visa to study in China?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  Yes, international students typically need a student visa (X visa). The process requires 
                  proof of enrollment, financial documentation, and a valid passport. Our advisors 
                  will guide you through the visa application process.
                </AccordionContent>
              </div>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-none">
              <div className="bg-card border border-border rounded px-6">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:no-underline py-4">
                  What should I know about living in China as an international student?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  China offers excellent public transportation, safe cities, and a high quality of life. 
                  While Mandarin is the primary language, many universities offer English-taught programs. 
                  Be prepared for cultural differences, diverse regional climates, and the opportunity to 
                  experience one of the world's oldest civilizations.
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-6 text-center">
            <Link href="/about/faq" className="text-primary hover:text-primary/80 underline underline-offset-4 font-bold mt-1 inline-block">
              VIEW ALL FAQS
            </Link>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="mb-6 md:mb-12">
          <div className="bg-card border border-border rounded p-3 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left Side - Text and Button */}
              <div className="flex flex-col justify-center">
                <h2 className="text-xl md:text-3xl font-bold text-foreground mb-4">
                  Get more information
                </h2>
                <p className="text-muted-foreground mb-6">
                  Craving more info? Discover how you can start your epic study abroad journey.
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  SEND ME THE INFO!
                </Button>
              </div>

              {/* Right Side - Form */}
              <div className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-lg">
                <InquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* Explore Alternative Destinations Section */}
        <section className="mb-6 md:mb-12 bg-muted/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
            Explore Alternative Study Abroad Destinations
          </h2>
          <p className="text-muted-foreground mb-4 md:mb-6">
            Discover other incredible study abroad opportunities around the world.
          </p>

          <div className="relative">
            <DestinationsCarousel />
          </div>
        </section>

        {/* Honey Promotion Section */}
        <section className="mb-4 md:mb-8 scroll-mt-28">
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200/50 dark:border-amber-900/30 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
              PREMIUM
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Image Section */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-amber-50 dark:bg-amber-950/20">
                <Image
                  src={pureHoney}
                  alt="Pure Natural Honey"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                    Pure Natural Honey
                  </h2>
                  <p className="text-amber-800 dark:text-amber-200 text-base md:text-lg leading-relaxed">
                    Experience the rich, authentic taste of pure natural honey. Sourced directly from trusted beekeepers, our premium honey is 100% natural, unprocessed, and packed with natural enzymes and antioxidants. Perfect for your daily wellness routine.
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 text-xs font-semibold rounded-full">
                    100% Natural
                  </span>
                  <span className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 text-xs font-semibold rounded-full">
                    Unprocessed
                  </span>
                  <span className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 text-xs font-semibold rounded-full">
                    Rich in Enzymes
                  </span>
                </div>

                {/* CTA Button */}
                <Link href="/shop/honey">
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
