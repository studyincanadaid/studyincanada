import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Chile - BideshStudy",
  description: "Discover study abroad opportunities in Chile. Explore top universities and programs in Chile.",
}

export default function ChilePage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Chile
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience stable economy and quality education
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Chile offers quality education with a stable economy, beautiful landscapes, and 
              Spanish language immersion. Study in one of South America's most developed countries 
              with excellent infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Chile?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Stable economy</li>
                  <li>• Quality education</li>
                  <li>• Spanish language</li>
                  <li>• Beautiful landscapes</li>
                  <li>• Safe environment</li>
                  <li>• Good infrastructure</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Spanish Language</li>
                  <li>• Business</li>
                  <li>• Engineering</li>
                  <li>• Environmental Studies</li>
                  <li>• Medicine</li>
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

