import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in New Zealand - BideshStudy",
  description: "Discover study abroad opportunities in New Zealand. Explore top universities and programs in New Zealand.",
}

export default function NewZealandPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in New Zealand
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience quality education in stunning natural beauty
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              New Zealand offers high-quality education, stunning natural landscapes, and excellent 
              quality of life. Study in a safe, peaceful country known for its friendly people, 
              beautiful scenery, and post-study work opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in New Zealand?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• High-quality education</li>
                  <li>• Stunning natural beauty</li>
                  <li>• Safe and peaceful</li>
                  <li>• Post-study work options</li>
                  <li>• English language</li>
                  <li>• Friendly environment</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Business</li>
                  <li>• Engineering</li>
                  <li>• Environmental Studies</li>
                  <li>• Agriculture</li>
                  <li>• Tourism</li>
                  <li>• Arts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

