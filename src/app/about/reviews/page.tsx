"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import CloudinaryPlayer from "@/components/CloudinaryPlayer"
import { ReviewsCarousel } from "@/components/reviews-carousel"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "University of Tokyo, Japan",
      program: "Engineering & Technology",
      rating: 5,
      comment: "Studying in Japan was a life-changing experience! The support from BideshStudy throughout the application process was incredible. They guided me through every step, from choosing the right program to settling into my new life in Tokyo."
    },
    {
      name: "Michael Chen",
      location: "University of Oxford, UK",
      program: "Business Administration",
      rating: 5,
      comment: "The team at BideshStudy made my dream of studying in the UK come true. Their expertise and personalized guidance helped me find the perfect program. I couldn't have done it without them!"
    },
    {
      name: "Emma Rodriguez",
      location: "Universidad LCI Veritas, Costa Rica",
      program: "Sustainable Design",
      rating: 5,
      comment: "I chose Costa Rica for my study abroad experience, and BideshStudy was there every step of the way. The cultural immersion and academic excellence I experienced exceeded all my expectations."
    },
    {
      name: "David Kim",
      location: "Seoul National University, South Korea",
      program: "Computer Science",
      rating: 5,
      comment: "The application process seemed daunting at first, but BideshStudy made it seamless. Their attention to detail and constant support ensured everything went smoothly. Highly recommend!"
    },
    {
      name: "Priya Patel",
      location: "University of Melbourne, Australia",
      program: "Public Health",
      rating: 5,
      comment: "My experience with BideshStudy was exceptional. They helped me navigate the complex visa process and find scholarship opportunities. The quality of education I received was outstanding."
    },
    {
      name: "Ahmed Hassan",
      location: "Al Akhawayn University, Morocco",
      program: "International Studies",
      rating: 5,
      comment: "BideshStudy provided comprehensive support from day one. Their local knowledge and connections made my transition to Morocco smooth and enjoyable. This experience transformed my perspective."
    },
    {
      name: "Sophie Martin",
      location: "LCI Barcelona, Spain",
      program: "Fashion Design",
      rating: 5,
      comment: "Studying fashion design in Barcelona was a dream come true! BideshStudy helped me find the perfect program that matched my interests and career goals. The support was incredible throughout."
    },
    {
      name: "James Wilson",
      location: "University of Pécs, Hungary",
      program: "Medicine",
      rating: 5,
      comment: "The team at BideshStudy was professional, responsive, and genuinely cared about my success. They made studying medicine abroad accessible and helped me every step of the way."
    },
    {
      name: "Maria Garcia",
      location: "Mahidol University, Thailand",
      program: "Public Health",
      rating: 5,
      comment: "I couldn't be happier with my choice to study in Thailand through BideshStudy. They provided excellent guidance on program selection and cultural adaptation. Highly recommend their services!"
    },
    {
      name: "Liu Wei",
      location: "Tsinghua University, China",
      program: "Engineering",
      rating: 5,
      comment: "BideshStudy made my journey to studying in China smooth and stress-free. Their expertise in Asian universities and their commitment to student success is truly remarkable."
    }
  ]

  const overallStats = {
    totalReviews: "2,500+",
    averageRating: "4.9",
    satisfiedStudents: "98%",
    countries: "25+"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Video */}
      <section 
        className="relative w-full overflow-hidden"
        style={{
          paddingTop: 'calc(10vw)',
          paddingBottom: 'calc(8vw)',
          minHeight: '60vh',
          zIndex: 101
        }}
      >
        {/* Background Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className="nectar-video-wrap absolute inset-0 opacity-100 md:scale-100 scale-[2.8] transition-transform duration-300">
            <div className="nectar-video-inner w-full h-full">
              <CloudinaryPlayer />
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, #408CAD 0%, #51ca58 100%)',
            opacity: 0.8
          }}
        />

        {/* Video Color Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            opacity: 0.7
          }}
        />
        
        {/* Content on top of video */}
        <div className="relative z-20 container mx-auto px-8">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Student Reviews & Testimonials
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Discover what our students say about their study abroad journey with BideshStudy
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {overallStats.totalReviews}
              </div>
              <div className="text-sm md:text-base text-white/90">
                Reviews
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {overallStats.averageRating}
              </div>
              <div className="text-sm md:text-base text-white/90">
                Average Rating
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {overallStats.satisfiedStudents}
              </div>
              <div className="text-sm md:text-base text-white/90">
                Satisfaction
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {overallStats.countries}
              </div>
              <div className="text-sm md:text-base text-white/90">
                Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <Link href="/about" className="hover:text-primary">About</Link>
          <span className="mx-2">|</span>
          <span>Reviews</span>
        </div>

        {/* Carousel Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from students who have transformed their lives through our study abroad programs.
            </p>
          </div>
          <ReviewsCarousel />
        </section>

        {/* All Reviews Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-8 text-center">
            All Student Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 border-transparent hover:border-[#408CAD]/30 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm h-full"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-24 h-24 text-[#408CAD]" />
                </div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#424242] mb-1">
                        {review.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {review.location}
                      </p>
                      <p className="text-xs text-[#1BB685] font-medium mb-3">
                        {review.program}
                      </p>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <p className="text-base text-[#424242] leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 bg-gradient-to-r from-[#1BB685]/10 to-[#1BB685]/5 border border-[#1BB685]/20 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your own study abroad journey today and become part of our community of successful international students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <button className="bg-[#1BB685] hover:bg-[#1BB685]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-[#1BB685] text-[#1BB685] hover:bg-[#1BB685]/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

