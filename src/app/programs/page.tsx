"use client"

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, DollarSign, Clock, GraduationCap, Filter, X, ChevronDown, ChevronUp, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Sample program images - you can replace these with actual images
import universityTokyo from "@/assests/UniversityFreeImage/universityTokyo.jpg"
import wasedaUniversity from "@/assests/UniversityFreeImage/wasedaUniversity.jpg"
import kyotoUniversity from "@/assests/UniversityFreeImage/kyotoUniversity.jpg"

type Program = {
  id: string
  title: string
  university: string
  destination: string
  destinationSlug: string
  field: string
  fieldSlug: string
  term: 'academic' | 'fall' | 'spring' | 'summer' | 'winter'
  budget: 'under-5000' | 'under-10000' | '10000-20000' | 'over-20000'
  programType: 'undergraduate' | 'postgraduate' | 'diploma'
  duration: string
  startDate: string
  image: any
  price: string
}

// Sample programs data
const allPrograms: Program[] = [
  {
    id: '1',
    title: 'Computer Science & Engineering',
    university: 'University of Tokyo',
    destination: 'Japan',
    destinationSlug: 'japan',
    field: 'Engineering',
    fieldSlug: 'engineering',
    term: 'academic',
    budget: '10000-20000',
    programType: 'undergraduate',
    duration: '4 years',
    startDate: 'September 2024',
    image: universityTokyo,
    price: '$15,000'
  },
  {
    id: '2',
    title: 'Business Administration',
    university: 'Waseda University',
    destination: 'Japan',
    destinationSlug: 'japan',
    field: 'Business & Economics',
    fieldSlug: 'business-economics',
    term: 'fall',
    budget: 'over-20000',
    programType: 'postgraduate',
    duration: '2 years',
    startDate: 'September 2024',
    image: wasedaUniversity,
    price: '$25,000'
  },
  {
    id: '3',
    title: 'International Relations',
    university: 'Kyoto University',
    destination: 'Japan',
    destinationSlug: 'japan',
    field: 'International Studies',
    fieldSlug: 'international-studies',
    term: 'spring',
    budget: 'under-10000',
    programType: 'undergraduate',
    duration: '4 years',
    startDate: 'April 2025',
    image: kyotoUniversity,
    price: '$8,000'
  },
  {
    id: '4',
    title: 'Mechanical Engineering',
    university: 'Oxford University',
    destination: 'United Kingdom',
    destinationSlug: 'united-kingdom',
    field: 'Engineering',
    fieldSlug: 'engineering',
    term: 'academic',
    budget: 'over-20000',
    programType: 'undergraduate',
    duration: '3 years',
    startDate: 'September 2024',
    image: universityTokyo,
    price: '$30,000'
  },
  {
    id: '5',
    title: 'Art & Design',
    university: 'Sorbonne University',
    destination: 'France',
    destinationSlug: 'france',
    field: 'Art & Design',
    fieldSlug: 'art-design',
    term: 'fall',
    budget: '10000-20000',
    programType: 'undergraduate',
    duration: '3 years',
    startDate: 'September 2024',
    image: wasedaUniversity,
    price: '$18,000'
  },
  {
    id: '6',
    title: 'Health Sciences',
    university: 'Harvard University',
    destination: 'United States',
    destinationSlug: 'united-states',
    field: 'Health',
    fieldSlug: 'health',
    term: 'spring',
    budget: 'over-20000',
    programType: 'postgraduate',
    duration: '2 years',
    startDate: 'January 2025',
    image: kyotoUniversity,
    price: '$35,000'
  },
  {
    id: '7',
    title: 'Communications',
    university: 'University of Sydney',
    destination: 'Australia',
    destinationSlug: 'australia',
    field: 'Communications',
    fieldSlug: 'communications',
    term: 'academic',
    budget: 'under-10000',
    programType: 'undergraduate',
    duration: '3 years',
    startDate: 'February 2025',
    image: universityTokyo,
    price: '$9,000'
  },
  {
    id: '8',
    title: 'Tourism & Hospitality',
    university: 'University of Auckland',
    destination: 'New Zealand',
    destinationSlug: 'new-zealand',
    field: 'Tourism and Hospitality',
    fieldSlug: 'tourism-hospitality',
    term: 'fall',
    budget: '10000-20000',
    programType: 'diploma',
    duration: '1 year',
    startDate: 'September 2024',
    image: wasedaUniversity,
    price: '$12,000'
  },
  {
    id: '9',
    title: 'Mathematics',
    university: 'University of Toronto',
    destination: 'Canada',
    destinationSlug: 'canada',
    field: 'Math',
    fieldSlug: 'math',
    term: 'spring',
    budget: 'under-5000',
    programType: 'undergraduate',
    duration: '4 years',
    startDate: 'May 2025',
    image: kyotoUniversity,
    price: '$4,500'
  },
  {
    id: '10',
    title: 'Social Sciences',
    university: 'University of Berlin',
    destination: 'Germany',
    destinationSlug: 'germany',
    field: 'Social Sciences',
    fieldSlug: 'social-sciences',
    term: 'academic',
    budget: 'under-10000',
    programType: 'postgraduate',
    duration: '2 years',
    startDate: 'October 2024',
    image: universityTokyo,
    price: '$7,500'
  },
  {
    id: '11',
    title: 'Visual Arts',
    university: 'University of Rome',
    destination: 'Italy',
    destinationSlug: 'italy',
    field: 'Visual and Performing Arts',
    fieldSlug: 'visual-performing-arts',
    term: 'fall',
    budget: '10000-20000',
    programType: 'undergraduate',
    duration: '3 years',
    startDate: 'September 2024',
    image: wasedaUniversity,
    price: '$16,000'
  },
  {
    id: '12',
    title: 'World Languages',
    university: 'Peking University',
    destination: 'China',
    destinationSlug: 'china',
    field: 'World Languages',
    fieldSlug: 'world-languages',
    term: 'spring',
    budget: 'under-10000',
    programType: 'diploma',
    duration: '1 year',
    startDate: 'March 2025',
    image: kyotoUniversity,
    price: '$6,000'
  },
  {
    id: '13',
    title: 'Marine Biology',
    university: 'University of Queensland',
    destination: 'Australia',
    destinationSlug: 'australia',
    field: 'Natural & Applied Sciences',
    fieldSlug: 'natural-applied-sciences',
    term: 'summer',
    budget: 'under-10000',
    programType: 'undergraduate',
    duration: '3 months',
    startDate: 'June 2025',
    image: universityTokyo,
    price: '$7,500'
  },
  {
    id: '14',
    title: 'Ski Resort Management',
    university: 'University of British Columbia',
    destination: 'Canada',
    destinationSlug: 'canada',
    field: 'Tourism and Hospitality',
    fieldSlug: 'tourism-hospitality',
    term: 'winter',
    budget: '10000-20000',
    programType: 'diploma',
    duration: '4 months',
    startDate: 'December 2024',
    image: wasedaUniversity,
    price: '$15,000'
  },
]

const destinations = [
  { name: 'Japan', slug: 'japan' },
  { name: 'China', slug: 'china' },
  { name: 'South Korea', slug: 'south-korea' },
  { name: 'United Kingdom', slug: 'united-kingdom' },
  { name: 'France', slug: 'france' },
  { name: 'Germany', slug: 'germany' },
  { name: 'Italy', slug: 'italy' },
  { name: 'United States', slug: 'united-states' },
  { name: 'Canada', slug: 'canada' },
  { name: 'Mexico', slug: 'mexico' },
  { name: 'Costa Rica', slug: 'costa-rica' },
  { name: 'Argentina', slug: 'argentina' },
  { name: 'Brazil', slug: 'brazil' },
  { name: 'Chile', slug: 'chile' },
  { name: 'Colombia', slug: 'colombia' },
  { name: 'Australia', slug: 'australia' },
  { name: 'New Zealand', slug: 'new-zealand' },
]

const fieldsOfStudy = [
  'Art & Design',
  'Business & Economics',
  'Communications',
  'Education',
  'Engineering',
  'Health',
  'Humanities',
  'International Studies',
  'Math',
  'Natural & Applied Sciences',
  'Social Sciences',
  'Tourism and Hospitality',
  'Visual and Performing Arts',
  'World Languages',
]

const fieldSlugMap: Record<string, string> = {
  'art-design': 'Art & Design',
  'business-economics': 'Business & Economics',
  'communications': 'Communications',
  'education': 'Education',
  'engineering': 'Engineering',
  'health': 'Health',
  'humanities': 'Humanities',
  'international-studies': 'International Studies',
  'math': 'Math',
  'natural-applied-sciences': 'Natural & Applied Sciences',
  'social-sciences': 'Social Sciences',
  'tourism-hospitality': 'Tourism and Hospitality',
  'visual-performing-arts': 'Visual and Performing Arts',
  'world-languages': 'World Languages',
}

function ProgramsPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Get initial filters from URL
  const urlDestination = searchParams.get('destination')
  const urlField = searchParams.get('field')
  
  const [filters, setFilters] = useState({
    budget: [] as string[],
    programType: [] as string[],
    destination: [] as string[],
    field: [] as string[],
    term: 'academic' as 'academic' | 'fall' | 'spring' | 'summer' | 'winter',
  })
  
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    budget: true,
    programType: true,
    destination: false,
    field: false,
    term: true,
  })

  // Update filters when URL params change
  useEffect(() => {
    const urlDestination = searchParams.get('destination')
    const urlField = searchParams.get('field')
    
    // Only update if URL params exist
    if (urlDestination || urlField) {
      setFilters(prev => ({
        ...prev,
        destination: urlDestination ? [urlDestination] : prev.destination,
        field: urlField ? [fieldSlugMap[urlField] || urlField] : prev.field,
      }))
    }
  }, [searchParams])

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => {
      if (category === 'term') {
        const newTerm = value as 'academic' | 'fall' | 'spring' | 'summer' | 'winter'
        // When Academic Year is selected, clear destination and field filters to show all programs
        if (newTerm === 'academic') {
          return { 
            ...prev, 
            term: newTerm,
            destination: [],
            field: []
          }
        }
        return { ...prev, term: newTerm }
      }
      
      const currentValues = prev[category] as string[]
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      
      return { ...prev, [category]: newValues }
    })
  }

  const clearFilters = () => {
    setFilters({
      budget: [],
      programType: [],
      destination: [],
      field: [],
      term: 'academic',
    })
    setSearchQuery('')
    router.push('/programs')
  }

  const filteredPrograms = useMemo(() => {
    // Start with ALL programs - make sure we have the array
    if (!allPrograms || allPrograms.length === 0) {
      return []
    }
    
    let filtered = [...allPrograms]
    
    // Term filter - Academic shows ALL programs (no term filtering), others show only matching
    if (filters.term !== 'academic') {
      filtered = filtered.filter(program => program.term === filters.term)
    }
    // If Academic Year, don't filter by term - show all programs
    
    // Search query filter
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(program => {
        const matchesTitle = program.title.toLowerCase().includes(query)
        const matchesUniversity = program.university.toLowerCase().includes(query)
        const matchesDestination = program.destination.toLowerCase().includes(query)
        const matchesField = program.field.toLowerCase().includes(query)
        return matchesTitle || matchesUniversity || matchesDestination || matchesField
      })
    }
    
    // Budget filter
    if (filters.budget && filters.budget.length > 0) {
      filtered = filtered.filter(program => filters.budget.includes(program.budget))
    }
    
    // Program type filter
    if (filters.programType && filters.programType.length > 0) {
      filtered = filtered.filter(program => filters.programType.includes(program.programType))
    }
    
    // Destination filter
    if (filters.destination && filters.destination.length > 0) {
      filtered = filtered.filter(program => filters.destination.includes(program.destinationSlug))
    }
    
    // Field filter
    if (filters.field && filters.field.length > 0) {
      filtered = filtered.filter(program => filters.field.includes(program.field))
    }
    
    return filtered
  }, [filters, searchQuery])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const getTermBadgeColor = (term: string) => {
    switch (term) {
      case 'academic':
        return 'bg-blue-100 text-blue-800'
      case 'fall':
        return 'bg-orange-100 text-orange-800'
      case 'spring':
        return 'bg-green-100 text-green-800'
      case 'summer':
        return 'bg-yellow-100 text-yellow-800'
      case 'winter':
        return 'bg-cyan-100 text-cyan-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTermLabel = (term: string) => {
    switch (term) {
      case 'academic':
        return 'Academic Year'
      case 'fall':
        return 'Fall Semester'
      case 'spring':
        return 'Spring Semester'
      case 'summer':
        return 'Summer Break'
      case 'winter':
        return 'Winter Break'
      default:
        return term
    }
  }

  const FilterSection = ({ 
    title, 
    sectionKey, 
    children 
  }: { 
    title: string
    sectionKey: string
    children: React.ReactNode 
  }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between mb-3 text-left"
      >
        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
          {title}
        </h3>
        {expandedSections[sectionKey] ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      {expandedSections[sectionKey] && (
        <div className="space-y-2">
          {children}
        </div>
      )}
    </div>
  )

  const FilterCheckbox = ({ 
    label, 
    value, 
    checked, 
    onChange 
  }: { 
    label: string
    value: string
    checked: boolean
    onChange: () => void 
  }) => (
    <label className="flex items-center space-x-2 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
      />
      <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
        {label}
      </span>
    </label>
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Programs
          </h1>
          
          {/* Search Bar */}
          <div className="relative mb-6 w-full">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search programs by title, university, destination, or field..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-gray-900 placeholder-gray-400 shadow-sm hover:border-gray-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
          
          <p className="text-gray-600">
            {searchQuery ? (
              <>Showing {filteredPrograms.length} result{filteredPrograms.length !== 1 ? 's' : ''} for "{searchQuery}"</>
            ) : filters.budget.length === 0 && filters.programType.length === 0 && filters.destination.length === 0 && filters.field.length === 0 && filters.term === 'academic' ? (
              <>Showing all {filteredPrograms.length} study abroad program{filteredPrograms.length !== 1 ? 's' : ''} (Academic Year - All Programs)</>
            ) : filters.term === 'fall' && filters.budget.length === 0 && filters.programType.length === 0 && filters.destination.length === 0 && filters.field.length === 0 ? (
              <>Showing {filteredPrograms.length} Fall Semester program{filteredPrograms.length !== 1 ? 's' : ''}</>
            ) : filters.term === 'spring' && filters.budget.length === 0 && filters.programType.length === 0 && filters.destination.length === 0 && filters.field.length === 0 ? (
              <>Showing {filteredPrograms.length} Spring Semester program{filteredPrograms.length !== 1 ? 's' : ''}</>
            ) : filters.term === 'summer' && filters.budget.length === 0 && filters.programType.length === 0 && filters.destination.length === 0 && filters.field.length === 0 ? (
              <>Showing {filteredPrograms.length} Summer Break program{filteredPrograms.length !== 1 ? 's' : ''}</>
            ) : filters.term === 'winter' && filters.budget.length === 0 && filters.programType.length === 0 && filters.destination.length === 0 && filters.field.length === 0 ? (
              <>Showing {filteredPrograms.length} Winter Break program{filteredPrograms.length !== 1 ? 's' : ''}</>
            ) : (
              <>Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''} matching your filters</>
            )}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            variant="outline"
            className="w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter Results
            </span>
            {isMobileFiltersOpen ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <aside
            className={`lg:sticky lg:top-8 lg:h-fit ${
              isMobileFiltersOpen ? 'block' : 'hidden lg:block'
            } w-full lg:w-80 bg-gray-50 rounded-lg p-6`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Filter results by
              </h2>
              <button
                onClick={clearFilters}
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear all
              </button>
            </div>

            {/* Budget Filter */}
            <FilterSection title="Budget" sectionKey="budget">
              <FilterCheckbox
                label="Under $5,000"
                value="under-5000"
                checked={filters.budget.includes('under-5000')}
                onChange={() => toggleFilter('budget', 'under-5000')}
              />
              <FilterCheckbox
                label="Under $10,000"
                value="under-10000"
                checked={filters.budget.includes('under-10000')}
                onChange={() => toggleFilter('budget', 'under-10000')}
              />
              <FilterCheckbox
                label="$10,000 – $20,000"
                value="10000-20000"
                checked={filters.budget.includes('10000-20000')}
                onChange={() => toggleFilter('budget', '10000-20000')}
              />
              <FilterCheckbox
                label="Over $20,000"
                value="over-20000"
                checked={filters.budget.includes('over-20000')}
                onChange={() => toggleFilter('budget', 'over-20000')}
              />
            </FilterSection>

            {/* Program Details Filter */}
            <FilterSection title="Program Details" sectionKey="programType">
              <FilterCheckbox
                label="Undergraduate"
                value="undergraduate"
                checked={filters.programType.includes('undergraduate')}
                onChange={() => toggleFilter('programType', 'undergraduate')}
              />
              <FilterCheckbox
                label="Postgraduate"
                value="postgraduate"
                checked={filters.programType.includes('postgraduate')}
                onChange={() => toggleFilter('programType', 'postgraduate')}
              />
              <FilterCheckbox
                label="Diploma"
                value="diploma"
                checked={filters.programType.includes('diploma')}
                onChange={() => toggleFilter('programType', 'diploma')}
              />
            </FilterSection>

            {/* Destination Filter */}
            <FilterSection title="Destination" sectionKey="destination">
              <div className="max-h-64 overflow-y-auto space-y-2">
                {destinations.map(dest => (
                  <FilterCheckbox
                    key={dest.slug}
                    label={dest.name}
                    value={dest.slug}
                    checked={filters.destination.includes(dest.slug)}
                    onChange={() => toggleFilter('destination', dest.slug)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Field of Study Filter */}
            <FilterSection title="Field of Study" sectionKey="field">
              <div className="max-h-64 overflow-y-auto space-y-2">
                {fieldsOfStudy.map(field => (
                  <FilterCheckbox
                    key={field}
                    label={field}
                    value={field}
                    checked={filters.field.includes(field)}
                    onChange={() => toggleFilter('field', field)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Term Filter */}
            <FilterSection title="Term" sectionKey="term">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="term"
                    value="academic"
                    checked={filters.term === 'academic'}
                    onChange={(e) => toggleFilter('term', e.target.value)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
                    Academic Year
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="term"
                    value="fall"
                    checked={filters.term === 'fall'}
                    onChange={(e) => toggleFilter('term', e.target.value)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
                    Fall Semester
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="term"
                    value="spring"
                    checked={filters.term === 'spring'}
                    onChange={(e) => toggleFilter('term', e.target.value)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
                    Spring Semester
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="term"
                    value="summer"
                    checked={filters.term === 'summer'}
                    onChange={(e) => toggleFilter('term', e.target.value)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
                    Summer Break
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="term"
                    value="winter"
                    checked={filters.term === 'winter'}
                    onChange={(e) => toggleFilter('term', e.target.value)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
                    Winter Break
                  </span>
                </label>
              </div>
            </FilterSection>
          </aside>

          {/* Right Side - Programs Grid */}
          <main className="flex-1">
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">No programs found matching your criteria.</p>
                <p className="text-sm text-gray-400 mb-4">
                  Total programs available: {allPrograms.length} | 
                  Current term: {filters.term} | 
                  Active filters: {JSON.stringify(filters)}
                </p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {filteredPrograms.map((program, index) => (
                  <Link
                    key={program.id}
                    href={`/programs/${program.university.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                      data-term={program.term}
                      data-destination={program.destinationSlug}
                      data-budget={program.budget}
                      data-field={program.fieldSlug}
                    >
                      {/* Program Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Term Badge */}
                        <div className="absolute top-3 right-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTermBadgeColor(program.term)}`}>
                            {getTermLabel(program.term)}
                          </span>
                        </div>
                      </div>

                      {/* Program Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 font-medium">
                          {program.university}
                        </p>

                        {/* Program Details */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                            {program.destination}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <GraduationCap className="h-4 w-4 mr-2 text-teal-600" />
                            {program.field}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-teal-600" />
                            {program.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                            {program.startDate}
                          </div>
                        </div>

                        {/* Price and Program Type */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center text-teal-600 font-bold">
                            <DollarSign className="h-5 w-5 mr-1" />
                            {program.price}
                          </div>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {program.programType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default function ProgramsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <ProgramsPageContent />
    </Suspense>
  )
}
