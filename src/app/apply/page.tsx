"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Send, FileText } from "lucide-react"
import type { ApplyFormData } from "@/types/apply"
import { auth } from "@/lib/auth"

export default function ApplyPage() {
  const router = useRouter()
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [formData, setFormData] = useState<ApplyFormData>({
    legalFirstName: "",
    legalMiddleName: "",
    legalLastName: "",
    preferredFirstName: "",
    email: "",
    confirmEmail: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    zipCode: "",
    country: "",
    phone: "",
    genderOnPassport: "",
    dateOfBirth: "",
    genderIdentity: "",
    preferredPronouns: "",
    countryOfCitizenship: "",
    firstLanguage: "",
    otherLanguages: "",
    speakOtherLanguages: "",
    validPassport: "",
    currentlyStudent: "",
    sscGPA: "",
    sscMarksheet: null,
    hscGPA: "",
    hscMarksheet: null,
    bscDegree: "",
    bscGPA: "",
    bscMarksheet: null,
    mscDegree: "",
    mscGPA: "",
    mscMarksheet: null,
    studyAbroadLocation: "",
    studyAreas: "",
    programDuration: "",
    preferredStartMonth: "",
    preferredStartYear: "",
    specificProgram: "",
    specificQuestions: "",
    disabilitiesMedical: "",
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    // Check authentication on mount
    if (typeof window !== "undefined") {
      if (!auth.isAuthenticated()) {
        // Redirect to login with return URL
        router.push(`/login?redirect=${encodeURIComponent("/apply")}`)
      } else {
        setIsCheckingAuth(false)
      }
    }
  }, [router])

  // Show loading state while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    const files = (e.target as HTMLInputElement).files
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" && files ? files[0] || null : value,
    }))
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.legalFirstName.trim()) newErrors.legalFirstName = "Required"
    if (!formData.legalLastName.trim()) newErrors.legalLastName = "Required"
    if (!formData.preferredFirstName.trim()) newErrors.preferredFirstName = "Required"
    if (!formData.email.trim()) newErrors.email = "Required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email"
    if (formData.confirmEmail && formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Emails do not match"
    }
    if (!formData.streetAddress.trim()) newErrors.streetAddress = "Required"
    if (!formData.city.trim()) newErrors.city = "Required"
    if (!formData.stateProvince.trim()) newErrors.stateProvince = "Required"
    if (!formData.zipCode.trim()) newErrors.zipCode = "Required"
    if (!formData.country) newErrors.country = "Required"
    if (!formData.phone.trim()) newErrors.phone = "Required"
    if (!formData.genderOnPassport) newErrors.genderOnPassport = "Required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Required"
    if (!formData.countryOfCitizenship) newErrors.countryOfCitizenship = "Required"
    if (!formData.firstLanguage) newErrors.firstLanguage = "Required"
    if (!formData.speakOtherLanguages) newErrors.speakOtherLanguages = "Required"
    if (!formData.validPassport) newErrors.validPassport = "Required"
    if (!formData.currentlyStudent) newErrors.currentlyStudent = "Required"
    if (!formData.studyAbroadLocation) newErrors.studyAbroadLocation = "Required"
    if (!formData.studyAreas.trim()) newErrors.studyAreas = "Required"
    if (!formData.programDuration) newErrors.programDuration = "Required"
    if (!formData.preferredStartMonth) newErrors.preferredStartMonth = "Required"
    if (!formData.preferredStartYear) newErrors.preferredStartYear = "Required"
    if (!formData.specificProgram) newErrors.specificProgram = "Required"
    if (!formData.consent) newErrors.consent = "You must consent to proceed"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      alert("Please fill in all required fields correctly.")
      return
    }
    
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form submitted:", formData)
    alert("Application submitted successfully! Your advisor will be in touch soon.")
    setIsSubmitting(false)
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 5 }, (_, i) => currentYear + i)

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto  ">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apply to a Study Abroad Program
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Ready to apply? Complete the form below and your advisor will be in touch!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="bg-card border border-border rounded p-4 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                Personal Information
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="legalFirstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="legalFirstName"
                  name="legalFirstName"
                  value={formData.legalFirstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.legalFirstName ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.legalFirstName && (
                  <p className="text-sm text-destructive mt-1">{errors.legalFirstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="legalLastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="legalLastName"
                  name="legalLastName"
                  value={formData.legalLastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.legalLastName ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.legalLastName && (
                  <p className="text-sm text-destructive mt-1">{errors.legalLastName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.email ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>


              <div>
                <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                  City <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.city ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.city && (
                  <p className="text-sm text-destructive mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor="stateProvince" className="block text-sm font-medium text-foreground mb-2">
                  State/Province/Region <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="stateProvince"
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleChange}
                  placeholder="Enter State/Province/Region"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.stateProvince ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.stateProvince && (
                  <p className="text-sm text-destructive mt-1">{errors.stateProvince}</p>
                )}
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-foreground mb-2">
                  ZIP/Postal code <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP/Postal code"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.zipCode ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.zipCode && (
                  <p className="text-sm text-destructive mt-1">{errors.zipCode}</p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                  Country <span className="text-destructive">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.country ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please Choose</option>
                  <option value="united-states">United States</option>
                  <option value="united-kingdom">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="japan">Japan</option>
                  <option value="south-korea">South Korea</option>
                  <option value="other">Other</option>
                </select>
                {errors.country && (
                  <p className="text-sm text-destructive mt-1">{errors.country}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.phone ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="genderOnPassport" className="block text-sm font-medium text-foreground mb-2">
                  Gender on Passport/Birth Certificate <span className="text-destructive">*</span>
                </label>
                <select
                  id="genderOnPassport"
                  name="genderOnPassport"
                  value={formData.genderOnPassport}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.genderOnPassport ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please Choose</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.genderOnPassport && (
                  <p className="text-sm text-destructive mt-1">{errors.genderOnPassport}</p>
                )}
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-foreground mb-2">
                  Date of Birth <span className="text-destructive">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.dateOfBirth ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.dateOfBirth && (
                  <p className="text-sm text-destructive mt-1">{errors.dateOfBirth}</p>
                )}
              </div>

              <div>
                <label htmlFor="countryOfCitizenship" className="block text-sm font-medium text-foreground mb-2">
                  Country of Citizenship <span className="text-destructive">*</span>
                </label>
                <select
                  id="countryOfCitizenship"
                  name="countryOfCitizenship"
                  value={formData.countryOfCitizenship}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.countryOfCitizenship ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please Choose</option>
                  <option value="united-states">United States</option>
                  <option value="united-kingdom">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="japan">Japan</option>
                  <option value="south-korea">South Korea</option>
                  <option value="other">Other</option>
                </select>
                {errors.countryOfCitizenship && (
                  <p className="text-sm text-destructive mt-1">{errors.countryOfCitizenship}</p>
                )}
              </div>

              <div>
                <label htmlFor="firstLanguage" className="block text-sm font-medium text-foreground mb-2">
                  What is your first (native) language? <span className="text-destructive">*</span>
                </label>
                <select
                  id="firstLanguage"
                  name="firstLanguage"
                  value={formData.firstLanguage}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.firstLanguage ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please Choose</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="chinese">Chinese</option>
                  <option value="japanese">Japanese</option>
                  <option value="korean">Korean</option>
                  <option value="hindi">Hindi</option>
                  <option value="other">Other</option>
                </select>
                {errors.firstLanguage && (
                  <p className="text-sm text-destructive mt-1">{errors.firstLanguage}</p>
                )}
              </div>

              <div>
                <label htmlFor="speakOtherLanguages" className="block text-sm font-medium text-foreground mb-2">
                  Do you speak other language(s) fluently? <span className="text-destructive">*</span>
                </label>
                <select
                  id="speakOtherLanguages"
                  name="speakOtherLanguages"
                  value={formData.speakOtherLanguages}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.speakOtherLanguages ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.speakOtherLanguages && (
                  <p className="text-sm text-destructive mt-1">{errors.speakOtherLanguages}</p>
                )}
              </div>

              {formData.speakOtherLanguages === "yes" && (
                <div className="md:col-span-2">
                  <label htmlFor="otherLanguages" className="block text-sm font-medium text-foreground mb-2">
                    Please list the other languages you speak
                  </label>
                  <input
                    type="text"
                    id="otherLanguages"
                    name="otherLanguages"
                    value={formData.otherLanguages}
                    onChange={handleChange}
                    placeholder="Enter languages"
                    className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              )}

              <div>
                <label htmlFor="validPassport" className="block text-sm font-medium text-foreground mb-2">
                  Do you have a valid passport for travel? <span className="text-destructive">*</span>
                </label>
                <select
                  id="validPassport"
                  name="validPassport"
                  value={formData.validPassport}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.validPassport ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="applying">Currently applying</option>
                </select>
                {errors.validPassport && (
                  <p className="text-sm text-destructive mt-1">{errors.validPassport}</p>
                )}
              </div>
            </div>
          </section>

          {/* Education Information */}
          <section className="bg-card border border-border rounded p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Education Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="currentlyStudent" className="block text-sm font-medium text-foreground mb-2">
                  Are you currently a student? <span className="text-destructive">*</span>
                </label>
                <select
                  id="currentlyStudent"
                  name="currentlyStudent"
                  value={formData.currentlyStudent}
                  onChange={handleChange}
                  className={`w-full md:w-1/2 px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.currentlyStudent ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.currentlyStudent && (
                  <p className="text-sm text-destructive mt-1">{errors.currentlyStudent}</p>
                )}
              </div>

              {/* SSC */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">SSC (Secondary School Certificate)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="sscGPA" className="block text-sm font-medium text-foreground mb-2">
                      GPA/CGPA
                    </label>
                    <input
                      type="text"
                      id="sscGPA"
                      name="sscGPA"
                      value={formData.sscGPA}
                      onChange={handleChange}
                      placeholder="Enter GPA/CGPA"
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="sscMarksheet" className="block text-sm font-medium text-foreground mb-2">
                      Marksheet/Transcript
                    </label>
                    <input
                      type="file"
                      id="sscMarksheet"
                      name="sscMarksheet"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    {formData.sscMarksheet && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Selected: {formData.sscMarksheet.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* HSC */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">HSC (Higher Secondary Certificate)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hscGPA" className="block text-sm font-medium text-foreground mb-2">
                      GPA/CGPA
                    </label>
                    <input
                      type="text"
                      id="hscGPA"
                      name="hscGPA"
                      value={formData.hscGPA}
                      onChange={handleChange}
                      placeholder="Enter GPA/CGPA"
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="hscMarksheet" className="block text-sm font-medium text-foreground mb-2">
                      Marksheet/Transcript
                    </label>
                    <input
                      type="file"
                      id="hscMarksheet"
                      name="hscMarksheet"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    {formData.hscMarksheet && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Selected: {formData.hscMarksheet.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* BSc / Honors / Degree */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">BSc / Honors / Degree (Bachelor of Science / Honors / Degree)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <label htmlFor="bscDegree" className="block text-sm font-medium text-foreground mb-2">
                      Degree Name
                    </label>
                    <input
                      type="text"
                      id="bscDegree"
                      name="bscDegree"
                      value={formData.bscDegree}
                      onChange={handleChange}
                      placeholder="e.g., BSC, BBA, B.A., B.Eng, etc."
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="bscGPA" className="block text-sm font-medium text-foreground mb-2">
                      GPA/CGPA
                    </label>
                    <input
                      type="text"
                      id="bscGPA"
                      name="bscGPA"
                      value={formData.bscGPA}
                      onChange={handleChange}
                      placeholder="Enter GPA/CGPA"
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="bscMarksheet" className="block text-sm font-medium text-foreground mb-2">
                    Marksheet/Transcript
                  </label>
                  <input
                    type="file"
                    id="bscMarksheet"
                    name="bscMarksheet"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  {formData.bscMarksheet && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Selected: {formData.bscMarksheet.name}
                    </p>
                  )}
                </div>
              </div>

              {/* MSc or Equivalent */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">MSc or Equivalent (Master of Science or Equivalent)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <label htmlFor="mscDegree" className="block text-sm font-medium text-foreground mb-2">
                      Degree Name
                    </label>
                    <input
                      type="text"
                      id="mscDegree"
                      name="mscDegree"
                      value={formData.mscDegree}
                      onChange={handleChange}
                      placeholder="e.g., MSC, MBA, M.A., M.Eng, etc."
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="mscGPA" className="block text-sm font-medium text-foreground mb-2">
                      GPA/CGPA
                    </label>
                    <input
                      type="text"
                      id="mscGPA"
                      name="mscGPA"
                      value={formData.mscGPA}
                      onChange={handleChange}
                      placeholder="Enter GPA/CGPA"
                      className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mscMarksheet" className="block text-sm font-medium text-foreground mb-2">
                    Marksheet/Transcript
                  </label>
                  <input
                    type="file"
                    id="mscMarksheet"
                    name="mscMarksheet"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  {formData.mscMarksheet && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Selected: {formData.mscMarksheet.name}
                    </p>
                  )}
                </div>
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
                <label htmlFor="studyAbroadLocation" className="block text-sm font-medium text-foreground mb-2">
                  Where would you like to Study Abroad? <span className="text-destructive">*</span>
                </label>
                <select
                  id="studyAbroadLocation"
                  name="studyAbroadLocation"
                  value={formData.studyAbroadLocation}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.studyAbroadLocation ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please choose</option>
                  <option value="united-states">United States</option>
                  <option value="united-kingdom">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="japan">Japan</option>
                  <option value="south-korea">South Korea</option>
                  <option value="other">Other</option>
                </select>
                {errors.studyAbroadLocation && (
                  <p className="text-sm text-destructive mt-1">{errors.studyAbroadLocation}</p>
                )}
              </div>

              <div>
                <label htmlFor="studyAreas" className="block text-sm font-medium text-foreground mb-2">
                  What area(s) of study are you most interested in? <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="studyAreas"
                  name="studyAreas"
                  value={formData.studyAreas}
                  onChange={handleChange}
                  placeholder="Enter your preferences"
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.studyAreas ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.studyAreas && (
                  <p className="text-sm text-destructive mt-1">{errors.studyAreas}</p>
                )}
              </div>

              <div>
                <label htmlFor="programDuration" className="block text-sm font-medium text-foreground mb-2">
                  How long / when do you want to go abroad? <span className="text-destructive">*</span>
                </label>
                <select
                  id="programDuration"
                  name="programDuration"
                  value={formData.programDuration}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.programDuration ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please choose</option>
                  <option value="summer">Summer (2-3 months)</option>
                  <option value="semester">Semester (4-6 months)</option>
                  <option value="academic-year">Academic Year (9-12 months)</option>
                  <option value="full-degree">Full Degree Program</option>
                </select>
                {errors.programDuration && (
                  <p className="text-sm text-destructive mt-1">{errors.programDuration}</p>
                )}
              </div>

              <div>
                <label htmlFor="preferredStartMonth" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Start Month <span className="text-destructive">*</span>
                </label>
                <select
                  id="preferredStartMonth"
                  name="preferredStartMonth"
                  value={formData.preferredStartMonth}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.preferredStartMonth ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please choose</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
                {errors.preferredStartMonth && (
                  <p className="text-sm text-destructive mt-1">{errors.preferredStartMonth}</p>
                )}
              </div>

              <div>
                <label htmlFor="preferredStartYear" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Start Year <span className="text-destructive">*</span>
                </label>
                <select
                  id="preferredStartYear"
                  name="preferredStartYear"
                  value={formData.preferredStartYear}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.preferredStartYear ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please choose</option>
                  {years.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.preferredStartYear && (
                  <p className="text-sm text-destructive mt-1">{errors.preferredStartYear}</p>
                )}
              </div>

              <div>
                <label htmlFor="specificProgram" className="block text-sm font-medium text-foreground mb-2">
                  Do you know the specific program you&apos;d like to join? <span className="text-destructive">*</span>
                </label>
                <select
                  id="specificProgram"
                  name="specificProgram"
                  value={formData.specificProgram}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.specificProgram ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Please choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.specificProgram && (
                  <p className="text-sm text-destructive mt-1">{errors.specificProgram}</p>
                )}
              </div>
            </div>
          </section>

          {/* Other Information */}
          <section className="bg-card border border-border rounded p-4 md:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2 md:mb-6">
              Other Information
            </h2>
            
            <div className="space-y-2">
              <div>
                <label htmlFor="specificQuestions" className="block text-sm font-medium text-foreground mb-2">
                  Do you have any specific questions for us right now?
                </label>
                <textarea
                  id="specificQuestions"
                  name="specificQuestions"
                  rows={4}
                  value={formData.specificQuestions}
                  onChange={handleChange}
                  placeholder="Enter your questions"
                  className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <div>
                <label htmlFor="disabilitiesMedical" className="block text-sm font-medium text-foreground mb-2">
                  Do you have any disabilities or medical conditions you&apos;d like to tell us about?
                </label>
                <textarea
                  id="disabilitiesMedical"
                  name="disabilitiesMedical"
                  rows={4}
                  value={formData.disabilitiesMedical}
                  onChange={handleChange}
                  placeholder="Enter your information"
                  className="w-full px-4 py-2 border border-input rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
            </div>
          </section>

          {/* Consent */}
          <section className="bg-card border border-border rounded p-4 md:p-8">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-primary border-input rounded focus:ring-2 focus:ring-ring"
              />
              <label htmlFor="consent" className="text-sm text-foreground">
                By checking this box, I consent to StudyAbroad.com collecting and storing my data through the submission of this form, sending marketing communications, and I agree to the StudyAbroad.com Privacy Policy.{" "}
                <span className="text-destructive">*</span>
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-destructive mt-2">{errors.consent}</p>
            )}
          </section>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="min-w-[250px]"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  SUBMIT APPLICATION
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

