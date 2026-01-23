import Image from "next/image"
import { Building2, Users, MapPin, Trophy } from "lucide-react"

type ClassroomCardProps = {
  image: string | any
  title: string
  description: string
  className?: string
}

export function ClassroomCard({ image, title, description, className = "" }: ClassroomCardProps) {
  return (
    <div className={`bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          {description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>

               {/* Optional Icons */}
               <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Trophy className="h-4 w-4 text-primary" />
                   <span className="text-xs md:text-sm">Champion Trophy</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Building2 className="h-4 w-4 text-primary" />
                   <span className="text-xs md:text-sm">Name</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <MapPin className="h-4 w-4 text-primary" />
                   <span className="text-xs md:text-sm">Ground</span>
                 </div>
               </div>
      </div>
    </div>
  )
}

