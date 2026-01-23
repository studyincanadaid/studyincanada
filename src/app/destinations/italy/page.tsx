import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Italy - BideshStudy",
  description: "Discover study abroad opportunities in Italy. Explore top universities and programs in Italy.",
}

export default function ItalyPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Italy
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience art, history, and quality education
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Italy offers affordable education with rich cultural heritage, world-renowned art, 
              and excellent cuisine. Study in a country known for fashion, design, architecture, 
              and historical significance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Italy?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Affordable tuition fees</li>
                  <li>• Rich cultural heritage</li>
                  <li>• Art and design excellence</li>
                  <li>• Beautiful landscapes</li>
                  <li>• Italian language</li>
                  <li>• Historical significance</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Arts & Design</li>
                  <li>• Fashion</li>
                  <li>• Architecture</li>
                  <li>• Culinary Arts</li>
                  <li>• History</li>
                  <li>• Business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

