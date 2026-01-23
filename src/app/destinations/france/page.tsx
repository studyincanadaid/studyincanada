import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in France - BideshStudy",
  description: "Discover study abroad opportunities in France. Explore top universities and programs in France.",
}

export default function FrancePage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in France
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience art, culture, and excellence in education
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              France offers excellent education with affordable tuition fees, rich cultural heritage, 
              and world-class universities. Study in the heart of Europe while experiencing French 
              art, cuisine, and lifestyle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in France?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Affordable education</li>
                  <li>• Rich culture and history</li>
                  <li>• World-class universities</li>
                  <li>• French language immersion</li>
                  <li>• Central European location</li>
                  <li>• Art and design programs</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Arts & Design</li>
                  <li>• Business</li>
                  <li>• Engineering</li>
                  <li>• French Language</li>
                  <li>• Fashion</li>
                  <li>• Culinary Arts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

