import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in Canada - BideshStudy",
  description: "Discover study abroad opportunities in Canada. Explore top universities and programs in Canada.",
}

export default function CanadaPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in Canada
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience quality education in a safe and welcoming country
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              Canada offers high-quality education, affordable tuition fees, and excellent post-study 
              work opportunities. Study in a safe, multicultural country known for its welcoming 
              environment and beautiful landscapes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in Canada?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• High-quality education</li>
                  <li>• Affordable tuition</li>
                  <li>• Post-study work permits</li>
                  <li>• Safe and welcoming</li>
                  <li>• Multicultural environment</li>
                  <li>• Beautiful nature</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Engineering</li>
                  <li>• Business</li>
                  <li>• Technology</li>
                  <li>• Medicine</li>
                  <li>• Arts</li>
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

