import Link from "next/link"
import { Facebook, Linkedin, Github, Twitter } from "lucide-react"

export function SocialCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-6">
      <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left Side - Domain Name */}
          <div className="flex items-center">
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              bideshstudy.com
            </h3>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-border" />

          {/* Right Side - Social Media Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

