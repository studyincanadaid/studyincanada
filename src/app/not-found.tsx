import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, BookOpen } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-16">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold text-[#1BB685] opacity-20">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#424242] -mt-8 md:-mt-12">
            Page Not Found
          </h2>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-[#424242] leading-relaxed">
            Oops! The page you're looking for seems to have wandered off on a study abroad adventure.
          </p>
          <p className="text-base text-muted-foreground">
            The page might have been moved, deleted, or doesn't exist. Let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/">
            <Button 
              size="lg" 
              className="bg-[#1BB685] hover:bg-[#1BB685]/90 text-white px-8 py-6 text-base font-semibold"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Link href="/search">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#1BB685] text-[#1BB685] hover:bg-[#1BB685]/10 px-8 py-6 text-base font-semibold"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Programs
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm font-semibold text-[#424242] mb-4">
            Popular Pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/programs" 
              className="text-[#1BB685] hover:text-[#1BB685]/80 underline underline-offset-4 text-sm font-medium"
            >
              Programs
            </Link>
            <Link 
              href="/destinations" 
              className="text-[#1BB685] hover:text-[#1BB685]/80 underline underline-offset-4 text-sm font-medium"
            >
              Destinations
            </Link>
            <Link 
              href="/subjects/art-design" 
              className="text-[#1BB685] hover:text-[#1BB685]/80 underline underline-offset-4 text-sm font-medium"
            >
              Subjects
            </Link>
            <Link 
              href="/scholarships" 
              className="text-[#1BB685] hover:text-[#1BB685]/80 underline underline-offset-4 text-sm font-medium"
            >
              Scholarships
            </Link>
            <Link 
              href="/about" 
              className="text-[#1BB685] hover:text-[#1BB685]/80 underline underline-offset-4 text-sm font-medium"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

