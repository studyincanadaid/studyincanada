import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Costa Rica - BideshStudy",
  description: "Discover study abroad opportunities in Costa Rica. Explore top universities and programs in Costa Rica.",
}

export default function CostaRicaPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Costa Rica
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience sustainable living and quality education
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Costa Rica offers affordable education in a peaceful, environmentally conscious country. 
              Study Spanish while experiencing beautiful nature, biodiversity, and a commitment to 
              sustainability and peace.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Costa Rica?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Affordable education</li>
                  <li>• Peaceful environment</li>
                  <li>• Spanish language</li>
                  <li>• Beautiful nature</li>
                  <li>• Sustainability focus</li>
                  <li>• Safe country</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Spanish Language</li>
                  <li>• Environmental Studies</li>
                  <li>• Biology & Ecology</li>
                  <li>• Business</li>
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

