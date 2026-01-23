import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in United States - BideshStudy",
  description: "Discover study abroad opportunities in the United States. Explore top universities and programs in USA.",
}

export default function UnitedStatesPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in United States
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Pursue excellence at world's top-ranked universities
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              The United States is home to many of the world's top-ranked universities, offering 
              diverse programs, cutting-edge research, and excellent career opportunities. Study 
              in a country known for innovation and academic excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in USA?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Top-ranked universities</li>
                  <li>• Diverse programs</li>
                  <li>• Research opportunities</li>
                  <li>• Strong job market</li>
                  <li>• Innovation hub</li>
                  <li>• Global recognition</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Business & MBA</li>
                  <li>• Engineering</li>
                  <li>• Technology</li>
                  <li>• Medicine</li>
                  <li>• Arts & Design</li>
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

