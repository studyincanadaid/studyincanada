"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Filter, X, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import udayanaUniversity from "@/assests/UniversityCampus/Udayana University.jpg"
import lciBarcelona from "@/assests/UniversityCampus/LCI Barcelona.jpg"
import universityOfPecs from "@/assests/UniversityCampus/University of Pécs.jpg"
import universidadLCI from "@/assests/UniversityCampus/Universidad LCI.jpg"
import alAkhawaynUniversity from "@/assests/UniversityCampus/Al Akhawayn University.jpg"
import mahidolUniversity from "@/assests/UniversityCampus/Mahidol University.jpg"
import tsinghuaUniversity from "@/assests/UniversityCampus/TsinghuaUniversity.jpg"
import pekingUniversity from "@/assests/UniversityCampus/PekingUniversity.jpg"
import seoulNationalUniversity from "@/assests/UniversityCampus/SeoulNationalUniversity.jpg"
import universityTokyo from "@/assests/UniversityFreeImage/universityTokyo.jpg"
import wasedaUniversity from "@/assests/UniversityFreeImage/wasedaUniversity.jpg"
import kyotoUniversity from "@/assests/UniversityFreeImage/kyotoUniversity.jpg"

type Program = {
  id: string
  title: string
  university: string
  image: typeof udayanaUniversity
  description: string
  duration: string
  price: string
  slug: string
  terms: string[]
  budget?: string
  destinations?: string[]
  fieldOfStudy?: string[]
}

// All programs data - populate with actual programs
const allPrograms: Program[] = [
  {
    id: '1',
    title: 'Computer Science & Engineering',
    university: 'University of Tokyo',
    image: universityTokyo,
    description: 'Comprehensive computer science and engineering program in Japan',
    duration: '4 years',
    price: '$15,000',
    slug: 'university-of-tokyo-computer-science',
    terms: ['Academic Year'],
    budget: '10000-20000',
    destinations: ['japan'],
    fieldOfStudy: ['Engineering']
  },
  {
    id: '2',
    title: 'Business Administration',
    university: 'Waseda University',
    image: wasedaUniversity,
    description: 'Business administration program at Waseda University',
    duration: '2 years',
    price: '$25,000',
    slug: 'waseda-university-business',
    terms: ['Fall Semester'],
    budget: 'over-20000',
    destinations: ['japan'],
    fieldOfStudy: ['Business & Economics']
  },
  {
    id: '3',
    title: 'International Relations',
    university: 'Kyoto University',
    image: kyotoUniversity,
    description: 'International relations and global studies program',
    duration: '4 years',
    price: '$8,000',
    slug: 'kyoto-university-international-relations',
    terms: ['Spring Semester'],
    budget: 'under-10000',
    destinations: ['japan'],
    fieldOfStudy: ['International Studies']
  },
  {
    id: '4',
    title: 'Mechanical Engineering',
    university: 'Oxford University',
    image: universityTokyo,
    description: 'Mechanical engineering program at Oxford University',
    duration: '3 years',
    price: '$30,000',
    slug: 'oxford-university-mechanical-engineering',
    terms: ['Academic Year'],
    budget: 'over-20000',
    destinations: ['united-kingdom'],
    fieldOfStudy: ['Engineering']
  },
  {
    id: '5',
    title: 'Art & Design',
    university: 'Sorbonne University',
    image: wasedaUniversity,
    description: 'Art and design program in France',
    duration: '3 years',
    price: '$18,000',
    slug: 'sorbonne-university-art-design',
    terms: ['Fall Semester'],
    budget: '10000-20000',
    destinations: ['france'],
    fieldOfStudy: ['Art & Design']
  },
  {
    id: '6',
    title: 'Health Sciences',
    university: 'Harvard University',
    image: kyotoUniversity,
    description: 'Health sciences program at Harvard University',
    duration: '2 years',
    price: '$35,000',
    slug: 'harvard-university-health-sciences',
    terms: ['Spring Semester'],
    budget: 'over-20000',
    destinations: ['united-states'],
    fieldOfStudy: ['Health']
  },
  {
    id: '7',
    title: 'Communications',
    university: 'University of Sydney',
    image: universityTokyo,
    description: 'Communications program in Australia',
    duration: '3 years',
    price: '$9,000',
    slug: 'university-of-sydney-communications',
    terms: ['Academic Year'],
    budget: 'under-10000',
    destinations: ['australia'],
    fieldOfStudy: ['Communication']
  },
  {
    id: '8',
    title: 'Tourism & Hospitality',
    university: 'University of Auckland',
    image: wasedaUniversity,
    description: 'Tourism and hospitality management program',
    duration: '1 year',
    price: '$12,000',
    slug: 'university-of-auckland-tourism',
    terms: ['Fall Semester'],
    budget: '10000-20000',
    destinations: ['new-zealand'],
    fieldOfStudy: ['Tourism & Hospitality']
  },
  {
    id: '9',
    title: 'Mathematics',
    university: 'University of Toronto',
    image: kyotoUniversity,
    description: 'Mathematics program in Canada',
    duration: '4 years',
    price: '$4,500',
    slug: 'university-of-toronto-mathematics',
    terms: ['Spring Semester'],
    budget: 'under-5000',
    destinations: ['canada'],
    fieldOfStudy: ['Math']
  },
  {
    id: '10',
    title: 'Social Sciences',
    university: 'University of Berlin',
    image: universityTokyo,
    description: 'Social sciences program in Germany',
    duration: '2 years',
    price: '$7,500',
    slug: 'university-of-berlin-social-sciences',
    terms: ['Academic Year'],
    budget: 'under-10000',
    destinations: ['germany'],
    fieldOfStudy: ['Social Sciences']
  },
  {
    id: '11',
    title: 'Visual Arts',
    university: 'University of Rome',
    image: wasedaUniversity,
    description: 'Visual arts program in Italy',
    duration: '3 years',
    price: '$16,000',
    slug: 'university-of-rome-visual-arts',
    terms: ['Fall Semester'],
    budget: '10000-20000',
    destinations: ['italy'],
    fieldOfStudy: ['Visual & Performing Arts']
  },
  {
    id: '12',
    title: 'World Languages',
    university: 'Peking University',
    image: kyotoUniversity,
    description: 'World languages program in China',
    duration: '1 year',
    price: '$6,000',
    slug: 'peking-university-world-languages',
    terms: ['Spring Semester'],
    budget: 'under-10000',
    destinations: ['china'],
    fieldOfStudy: ['World Languages']
  },
  {
    id: '13',
    title: 'Marine Biology',
    university: 'University of Queensland',
    image: universityTokyo,
    description: 'Marine biology program in Australia',
    duration: '3 months',
    price: '$7,500',
    slug: 'university-of-queensland-marine-biology',
    terms: ['Summer Break'],
    budget: 'under-10000',
    destinations: ['australia'],
    fieldOfStudy: ['Natural & Applied Sciences']
  },
  {
    id: '14',
    title: 'Ski Resort Management',
    university: 'University of British Columbia',
    image: wasedaUniversity,
    description: 'Ski resort management program in Canada',
    duration: '4 months',
    price: '$15,000',
    slug: 'university-of-british-columbia-ski-resort',
    terms: ['Winter Break'],
    budget: '10000-20000',
    destinations: ['canada'],
    fieldOfStudy: ['Tourism & Hospitality']
  },
]

const budgetOptions = [
  { value: "5000", label: "Under $5,000" },
  { value: "10000", label: "Under $10,000" },
  { value: "12000", label: "$10,000 to $12,000" },
  { value: "14000", label: "$12,000 to $14,000" },
  { value: "16000", label: "$14,000 to $16,000" },
  { value: "16001", label: "$16,000 and Up" }
]

const programDetails = [
  { value: "1810", label: "Current Enrollment Not Required" },
  { value: "1816", label: "Featured Programs" },
  { value: "1809", label: "Full Academic Year Abroad Available" },
  { value: "1829", label: "Includes Meals" },
  { value: "1808", label: "Postgraduate / Master's Level" },
  { value: "1814", label: "Semester Cost Under $10000" },
  { value: "1815", label: "StudyAbroad.com Staff Picks" },
  { value: "1811", label: "Taught in English" },
  { value: "1813", label: "Taught in French" },
  { value: "1812", label: "Taught in Spanish" },
  { value: "1807", label: "Undergraduate / Bachelor's Level" }
]

const destinations = [
  { value: "japan", label: "Japan", region: "ASIA" },
  { value: "china", label: "China", region: "ASIA" },
  { value: "south-korea", label: "South Korea", region: "ASIA" },
  { value: "united-kingdom", label: "United Kingdom", region: "EUROPE" },
  { value: "france", label: "France", region: "EUROPE" },
  { value: "germany", label: "Germany", region: "EUROPE" },
  { value: "italy", label: "Italy", region: "EUROPE" },
  { value: "united-states", label: "United States", region: "NORTH AMERICA" },
  { value: "canada", label: "Canada", region: "NORTH AMERICA" },
  { value: "mexico", label: "Mexico", region: "NORTH AMERICA" },
  { value: "costa-rica", label: "Costa Rica", region: "NORTH AMERICA" },
  { value: "argentina", label: "Argentina", region: "SOUTH AMERICA" },
  { value: "brazil", label: "Brazil", region: "SOUTH AMERICA" },
  { value: "chile", label: "Chile", region: "SOUTH AMERICA" },
  { value: "colombia", label: "Colombia", region: "SOUTH AMERICA" },
  { value: "australia", label: "Australia", region: "OCEANIA" },
  { value: "new-zealand", label: "New Zealand", region: "OCEANIA" }
]

const fieldOfStudy = [
  { value: "1717", label: "Art & Design" },
  { value: "1762", label: "Business & Economics" },
  { value: "1718", label: "Communication" },
  { value: "1719", label: "Education" },
  { value: "1716", label: "Engineering" },
  { value: "1720", label: "Health" },
  { value: "1721", label: "Humanities" },
  { value: "1722", label: "International Studies" },
  { value: "1765", label: "Math" },
  { value: "1766", label: "Natural & Applied Sciences" },
  { value: "1767", label: "Social Sciences" },
  { value: "1768", label: "Tourism & Hospitality" },
  { value: "1769", label: "Visual & Performing Arts" },
  { value: "1770", label: "World Languages" }
]

const terms = [
  { value: "1695", label: "Academic Year" },
  { value: "1696", label: "Fall Semester" },
  { value: "1697", label: "Spring Semester" },
  { value: "1698", label: "Summer Break" },
  { value: "1699", label: "Winter Break" }
]

function SearchContent() {
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(true)
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    budget: false,
    programDetails: true,
    destinations: false,
    fieldOfStudy: false,
    term: true
  })

  const [filters, setFilters] = useState({
    budget: "",
    programDetails: [] as string[],
    destinations: [] as string[],
    fieldOfStudy: [] as string[],
    term: "" // Changed to string for radio button (single selection)
  })

  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(allPrograms)

  useEffect(() => {
    const term = searchParams.get('filter-term')
    if (term) {
      const termMap: { [key: string]: string } = {
        "1695": "1695",
        "1696": "1696",
        "1697": "1697",
        "1698": "1698",
        "1699": "1699"
      }
      if (termMap[term]) {
        setFilters(prev => ({
          ...prev,
          term: termMap[term] // Single value, not array
        }))
      }
    }
  }, [searchParams])

  const applyFilters = () => {
    let filtered = [...allPrograms]

    // Filter by term - Academic Year (1695) shows ALL programs, others show only matching
    if (filters.term) {
      // If Academic Year (1695) is selected, show all programs (no term filtering)
      if (filters.term === "1695") {
        // Don't filter by term - show all programs
      } else {
        // Filter by other terms
        const selectedTerm = terms.find(t => t.value === filters.term)
        if (selectedTerm) {
          filtered = filtered.filter(program => 
            program.terms.includes(selectedTerm.label)
          )
        }
      }
    }

    // Filter by budget (if any program has price info matching budget)
    if (filters.budget) {
      filtered = filtered.filter(program => {
        const priceMatch = program.price.match(/\$([\d,]+)/)
        if (priceMatch) {
          const price = parseInt(priceMatch[1].replace(/,/g, ''))
          
          if (filters.budget === "5000") return price < 5000
          if (filters.budget === "10000") return price < 10000
          if (filters.budget === "12000") return price >= 10000 && price <= 12000
          if (filters.budget === "14000") return price > 12000 && price <= 14000
          if (filters.budget === "16000") return price > 14000 && price <= 16000
          if (filters.budget === "16001") return price > 16000
        }
        return true // If price can't be parsed, include it
      })
    }

    // Filter by destinations
    if (filters.destinations.length > 0) {
      filtered = filtered.filter(program => 
        program.destinations && program.destinations.some(dest => filters.destinations.includes(dest))
      )
    }

    // Filter by field of study - map field IDs to labels and match with program fieldOfStudy
    if (filters.fieldOfStudy.length > 0) {
      filtered = filtered.filter(program => {
        if (!program.fieldOfStudy || program.fieldOfStudy.length === 0) return false
        // Convert filter IDs to labels (e.g., "1716" -> "Engineering")
        const fieldLabels = filters.fieldOfStudy.map(fieldValue => {
          const field = fieldOfStudy.find(f => f.value === fieldValue)
          return field?.label || ""
        }).filter(label => label !== "")
        // Check if any of the program's field of study matches any of the selected field labels
        return program.fieldOfStudy.some(programField => 
          fieldLabels.some(label => 
            programField.toLowerCase().trim() === label.toLowerCase().trim()
          )
        )
      })
    }

    // Note: Program Details filter currently disabled as programs don't have structured program detail data
    // This can be re-enabled when program data structure is extended with program details

    setFilteredPrograms(filtered)
  }

  useEffect(() => {
    applyFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleBudgetChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      budget: prev.budget === value ? "" : value
    }))
  }

  const handleCheckboxChange = (category: keyof typeof filters, value: string) => {
    setFilters(prev => {
      const current = prev[category] as string[]
      if (current.includes(value)) {
        return {
          ...prev,
          [category]: current.filter(v => v !== value)
        }
      } else {
        return {
          ...prev,
          [category]: [...current, value]
        }
      }
    })
  }

  const handleTermChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      term: prev.term === value ? "" : value
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      budget: "",
      programDetails: [],
      destinations: [],
      fieldOfStudy: [],
      term: "" // Changed to empty string
    })
    setFilteredPrograms(allPrograms)
  }

  const hasActiveFilters = filters.budget || 
    filters.programDetails.length > 0 || 
    filters.destinations.length > 0 || 
    filters.fieldOfStudy.length > 0 || 
    filters.term !== ""

  const groupedDestinations = destinations.reduce((acc, dest) => {
    if (!acc[dest.region]) {
      acc[dest.region] = []
    }
    acc[dest.region].push(dest)
    return acc
  }, {} as { [key: string]: typeof destinations })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#424242] mb-2">
            Search Programs
          </h1>
          <p className="text-base md:text-lg text-[#424242]">
            Study Abroad for Everyone
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
        {/* Filter Header Section */}
        <div className="mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h2 className="text-base md:text-lg font-semibold text-[#424242]">
              Filter results by:
            </h2>
            
            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>{showFilters ? "Hide filters" : "Show filters"}</span>
              </button>
              
              <span className="text-sm text-[#424242]">
                {filteredPrograms.length} Program {filteredPrograms.length === 1 ? "result" : "results"}
              </span>
              
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 text-sm text-[#424242] hover:text-[#1BB685] transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>Clear all filters</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 relative">
          {/* Filter Sidebar - Fixed on desktop */}
          <div className={`${showFilters ? "block" : "hidden"} w-full md:w-64 lg:w-72 flex-shrink-0`}>
            <div className="bg-card border border-border rounded-lg p-4 md:p-5 space-y-4 md:sticky md:top-24 md:h-[calc(100vh-8rem)] md:overflow-y-auto">
              {/* Budget Filter */}
              <div className="border-b border-border pb-4">
                <button
                  onClick={() => toggleSection("budget")}
                  className="w-full flex items-center justify-between text-base font-semibold text-foreground mb-3"
                >
                  <span>Budget</span>
                  {openSections.budget ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {openSections.budget && (
                  <div className="space-y-2">
                    {budgetOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer text-sm"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option.value}
                          checked={filters.budget === option.value}
                          onChange={() => handleBudgetChange(option.value)}
                          className="w-4 h-4 text-[#1BB685]"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Program Details Filter */}
              <div className="border-b border-border pb-4">
                <button
                  onClick={() => toggleSection("programDetails")}
                  className="w-full flex items-center justify-between text-base font-semibold text-foreground mb-3"
                >
                  <span>Program Details</span>
                  {openSections.programDetails ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {openSections.programDetails && (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {programDetails.map((detail) => (
                      <label
                        key={detail.value}
                        className="flex items-center gap-2 cursor-pointer text-sm"
                      >
                        <Checkbox
                          checked={filters.programDetails.includes(detail.value)}
                          onCheckedChange={() => handleCheckboxChange("programDetails", detail.value)}
                        />
                        <span>{detail.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Destinations Filter */}
              <div className="border-b border-border pb-4">
                <button
                  onClick={() => toggleSection("destinations")}
                  className="w-full flex items-center justify-between text-base font-semibold text-foreground mb-3"
                >
                  <span>Destinations</span>
                  {openSections.destinations ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {openSections.destinations && (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {Object.entries(groupedDestinations).map(([region, dests]) => (
                      <div key={region}>
                        <div className="font-medium text-sm text-foreground mb-2">{region}</div>
                        <div className="space-y-2 pl-2">
                          {dests.map((dest) => (
                            <label
                              key={dest.value}
                              className="flex items-center gap-2 cursor-pointer text-sm"
                            >
                              <Checkbox
                                checked={filters.destinations.includes(dest.value)}
                                onCheckedChange={() => handleCheckboxChange("destinations", dest.value)}
                              />
                              <span>{dest.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Field of Study Filter */}
              <div className="border-b border-border pb-4">
                <button
                  onClick={() => toggleSection("fieldOfStudy")}
                  className="w-full flex items-center justify-between text-base font-semibold text-foreground mb-3"
                >
                  <span>Field of Study</span>
                  {openSections.fieldOfStudy ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {openSections.fieldOfStudy && (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {fieldOfStudy.map((field) => (
                      <label
                        key={field.value}
                        className="flex items-center gap-2 cursor-pointer text-sm"
                      >
                        <Checkbox
                          checked={filters.fieldOfStudy.includes(field.value)}
                          onCheckedChange={() => handleCheckboxChange("fieldOfStudy", field.value)}
                        />
                        <span>{field.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Term Filter */}
              <div className="border-b border-border pb-4">
                <button
                  onClick={() => toggleSection("term")}
                  className="w-full flex items-center justify-between text-base font-semibold text-foreground mb-3"
                >
                  <span>Term</span>
                  {openSections.term ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {openSections.term && (
                  <div className="space-y-2">
                    {terms.map((term) => (
                      <label
                        key={term.value}
                        className="flex items-center gap-2 cursor-pointer text-sm"
                      >
                        <input
                          type="radio"
                          name="term"
                          value={term.value}
                          checked={filters.term === term.value}
                          onChange={() => handleTermChange(term.value)}
                          className="w-4 h-4 text-[#1BB685]"
                        />
                        <span>{term.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Filter Buttons */}
              <div className="space-y-2 pt-4">
                <Button
                  onClick={applyFilters}
                  className="w-full bg-[#1BB685] hover:bg-[#1BB685]/90 text-white"
                >
                  Search for program
                </Button>
                {hasActiveFilters && (
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    className="w-full"
                  >
                    Clear all filters
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Programs Grid - Scrollable */}
          <div className="flex-1 min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
              {filteredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow group flex flex-col"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#424242] mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {program.duration}
                    </p>
                    <p className="text-base text-[#424242] leading-relaxed mb-4 flex-grow">
                      {program.description}
                    </p>
                    <div className="mt-auto">
                      <p className="text-lg font-semibold text-[#424242] bg-[#E7E7E7] px-4 py-2 rounded inline-block mb-4">
                        {program.price}
                      </p>
                      <Link href={`/programs/${program.slug}`}>
                        <Button className="w-full bg-[#22253D] hover:bg-[#22253D]/90 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No programs found for the selected filters. Please try different filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
