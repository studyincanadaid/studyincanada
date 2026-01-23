import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Mexico - BideshStudy",
  description: "Discover study abroad opportunities in Mexico. Explore top universities and programs in Mexico.",
}

export default function MexicoPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Mexico
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience vibrant culture and affordable education
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Mexico offers affordable education with rich cultural heritage, beautiful landscapes, 
              and Spanish language immersion. Study in a country known for its vibrant culture, 
              delicious cuisine, and warm hospitality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Mexico?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Affordable tuition fees</li>
                  <li>• Rich cultural heritage</li>
                  <li>• Spanish language</li>
                  <li>• Beautiful landscapes</li>
                  <li>• Warm hospitality</li>
                  <li>• Growing economy</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Spanish Language</li>
                  <li>• Business</li>
                  <li>• Arts & Culture</li>
                  <li>• Engineering</li>
                  <li>• Medicine</li>
                  <li>• Tourism</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

