"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    destination: "",
    academicArea: "",
    whenToGo: "",
    consent: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }))
    if (errors.consent) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.consent
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.consent) {
      newErrors.consent = "You must consent to proceed"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Handle form submission here
      console.log("Form submitted:", formData)
      // You can add API call here
      alert("Thank you! Your inquiry has been submitted.")
    }
  }

  const destinations = [
    "Argentina",
    "Bali, Indonesia",
    "China",
    "Colombia",
    "Costa Rica",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "England",
    "France",
    "Georgia",
    "Hungary",
    "Ireland",
    "Italy",
    "Mexico",
    "Morocco",
    "New Zealand",
    "Northern Ireland",
    "Portugal",
    "Scotland",
    "South Africa",
    "South Korea",
    "Spain",
    "Taiwan",
    "Thailand",
    "United States",
  ]

  const academicAreas = [
    "Art & Design",
    "Business & Economics",
    "Communications",
    "Education",
    "Engineering",
    "Health",
    "Humanities",
    "International Studies",
    "Math",
    "Natural & Applied Sciences",
    "Social Sciences",
    "Tourism & Hospitality",
    "Visual & Performing Arts",
    "World Languages",
  ]

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get more information
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="bg-card border border-border rounded p-4 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                Personal Information
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.firstName ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-card border border-border rounded p-4 md:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.phone ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.email ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </section>

          {/* Program Preferences */}
          <section className="bg-card border border-border rounded p-4 md:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2 md:mb-6">
              Program Preferences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                  What destination(s) are you interested in?
                  <span className="text-muted-foreground text-sm font-normal ml-1">
                    (Optional)
                  </span>
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Please choose</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="academicArea" className="block text-sm font-medium text-foreground mb-2">
                  What academic area(s) are important to you?
                  <span className="text-muted-foreground text-sm font-normal ml-1">
                    (Optional)
                  </span>
                </label>
                <select
                  id="academicArea"
                  name="academicArea"
                  value={formData.academicArea}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Please choose</option>
                  {academicAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="whenToGo" className="block text-sm font-medium text-foreground mb-2">
                  When do you want to go?
                  <span className="text-muted-foreground text-sm font-normal ml-1">
                    (Optional)
                  </span>
                </label>
                <select
                  id="whenToGo"
                  name="whenToGo"
                  value={formData.whenToGo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Please choose</option>
                  <option value="Fall 2024">Fall 2024</option>
                  <option value="Spring 2025">Spring 2025</option>
                  <option value="Summer 2025">Summer 2025</option>
                  <option value="Fall 2025">Fall 2025</option>
                  <option value="Spring 2026">Spring 2026</option>
                  <option value="Summer 2026">Summer 2026</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>
          </section>

          {/* Consent */}
          <section className="bg-card border border-border rounded p-4 md:p-8">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => handleCheckboxChange(e.target.checked)}
                className={`mt-1 h-4 w-4 rounded border border-primary ${
                  errors.consent ? "border-destructive" : ""
                }`}
              />
              <div className="flex-1">
                <label
                  htmlFor="consent"
                  className="text-sm font-normal text-foreground cursor-pointer"
                >
                  <span className="text-destructive">*</span> By checking this
                  box, I consent to StudyAbroad.com collecting and storing my
                  data through the submission of this form, sending marketing
                  communications, and I agree to the StudyAbroad.com Privacy
                  Policy.
                </label>
                {errors.consent && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto text-base font-semibold"
          >
            SEND ME THE INFO!
          </Button>
        </form>
      </div>
    </div>
  )
}

