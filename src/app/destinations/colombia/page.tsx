import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Colombia - BideshStudy",
  description: "Discover study abroad opportunities in Colombia. Explore top universities and programs in Colombia.",
}

export default function ColombiaPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Colombia
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience vibrant culture and affordable education
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Colombia offers affordable education with vibrant culture, beautiful landscapes, and 
              Spanish language immersion. Study in a country known for its warm hospitality, 
              music, and growing economy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Colombia?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Affordable tuition fees</li>
                  <li>• Vibrant culture</li>
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
                  <li>• Social Sciences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

