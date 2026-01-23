import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Brazil - BideshStudy",
  description: "Discover study abroad opportunities in Brazil. Explore top universities and programs in Brazil.",
}

export default function BrazilPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Brazil
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience vibrant culture and diverse education opportunities
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Brazil offers affordable education with vibrant culture, beautiful beaches, and 
              Portuguese language immersion. Study in the largest country in South America 
              with growing economy and diverse opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Brazil?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Affordable education</li>
                  <li>• Vibrant culture</li>
                  <li>• Portuguese language</li>
                  <li>• Beautiful nature</li>
                  <li>• Growing economy</li>
                  <li>• Diverse programs</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Portuguese Language</li>
                  <li>• Business</li>
                  <li>• Engineering</li>
                  <li>• Medicine</li>
                  <li>• Arts & Culture</li>
                  <li>• Environmental Studies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

