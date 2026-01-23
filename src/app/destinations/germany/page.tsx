import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Germany - BideshStudy",
  description: "Discover study abroad opportunities in Germany. Explore top universities and programs in Germany.",
}

export default function GermanyPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Germany
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience free or low-cost quality education in Europe
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Germany offers tuition-free or low-cost education at public universities, making it 
              one of the most affordable study destinations in Europe. Benefit from excellent 
              engineering programs, strong economy, and high quality of life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Germany?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Tuition-free public universities</li>
                  <li>• Excellent engineering programs</li>
                  <li>• Strong economy</li>
                  <li>• High quality of life</li>
                  <li>• Research opportunities</li>
                  <li>• Post-study work options</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Engineering</li>
                  <li>• Technology</li>
                  <li>• Business</li>
                  <li>• Medicine</li>
                  <li>• Science</li>
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

