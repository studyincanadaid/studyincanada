import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Australia - BideshStudy",
  description: "Discover study abroad opportunities in Australia. Explore top universities and programs in Australia.",
}

export default function AustraliaPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Australia
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience world-class education in a beautiful country
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Australia offers high-quality education, beautiful natural environment, and excellent 
              post-study work opportunities. Study in a safe, welcoming country with world-class 
              universities and strong job market.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Australia?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• World-class universities</li>
                  <li>• Beautiful environment</li>
                  <li>• Post-study work visas</li>
                  <li>• Safe and welcoming</li>
                  <li>• English language</li>
                  <li>• Strong job market</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Business & MBA</li>
                  <li>• Engineering</li>
                  <li>• Medicine</li>
                  <li>• Technology</li>
                  <li>• Arts & Design</li>
                  <li>• Science</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

