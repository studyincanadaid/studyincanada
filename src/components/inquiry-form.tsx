"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function InquiryForm() {
  const [consentChecked, setConsentChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
            First name <span className="text-destructive">*</span>
          </label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First"
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
            Last name <span className="text-destructive">*</span>
          </label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last"
            required
            className="w-full"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone <span className="text-destructive">*</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter phone number"
          required
          className="w-full"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email address"
          required
          className="w-full"
        />
      </div>

      {/* Destination Dropdown */}
      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
          What destination(s) are you interested in?
          <span className="text-muted-foreground text-xs font-normal"> (Optional)</span>
        </label>
        <select
          id="destination"
          name="destination"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Please choose</option>
          <option value="argentina">Argentina</option>
          <option value="bali">Bali, Indonesia</option>
          <option value="china">China</option>
          <option value="colombia">Colombia</option>
          <option value="costa-rica">Costa Rica</option>
          <option value="croatia">Croatia</option>
          <option value="cyprus">Cyprus</option>
          <option value="czech-republic">Czech Republic</option>
          <option value="england">England</option>
          <option value="france">France</option>
          <option value="georgia">Georgia</option>
          <option value="hungary">Hungary</option>
          <option value="ireland">Ireland</option>
          <option value="italy">Italy</option>
          <option value="japan">Japan</option>
          <option value="mexico">Mexico</option>
          <option value="morocco">Morocco</option>
          <option value="new-zealand">New Zealand</option>
          <option value="northern-ireland">Northern Ireland</option>
          <option value="portugal">Portugal</option>
          <option value="scotland">Scotland</option>
          <option value="south-africa">South Africa</option>
          <option value="south-korea">South Korea</option>
          <option value="spain">Spain</option>
          <option value="taiwan">Taiwan</option>
          <option value="thailand">Thailand</option>
          <option value="united-states">United States</option>
        </select>
      </div>

      {/* Academic Area Dropdown */}
      <div>
        <label htmlFor="academicArea" className="block text-sm font-medium text-foreground mb-2">
          What academic area(s) are important to you?
          <span className="text-muted-foreground text-xs font-normal"> (Optional)</span>
        </label>
        <select
          id="academicArea"
          name="academicArea"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Please choose</option>
          <option value="art-design">Art & Design</option>
          <option value="business-economics">Business & Economics</option>
          <option value="communications">Communications</option>
          <option value="education">Education</option>
          <option value="engineering">Engineering</option>
          <option value="health">Health</option>
          <option value="humanities">Humanities</option>
          <option value="international-studies">International Studies</option>
          <option value="math">Math</option>
          <option value="natural-applied-sciences">Natural & Applied Sciences</option>
          <option value="social-sciences">Social Sciences</option>
          <option value="tourism-hospitality">Tourism & Hospitality</option>
          <option value="visual-performing-arts">Visual & Performing Arts</option>
          <option value="world-languages">World Languages</option>
        </select>
      </div>

      {/* When to Go Dropdown */}
      <div>
        <label htmlFor="whenToGo" className="block text-sm font-medium text-foreground mb-2">
          When do you want to go?
          <span className="text-muted-foreground text-xs font-normal"> (Optional)</span>
        </label>
        <select
          id="whenToGo"
          name="whenToGo"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Please choose</option>
          <option value="fall-2024">Fall 2024</option>
          <option value="spring-2025">Spring 2025</option>
          <option value="fall-2025">Fall 2025</option>
          <option value="spring-2026">Spring 2026</option>
          <option value="summer-2024">Summer 2024</option>
          <option value="summer-2025">Summer 2025</option>
        </select>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 pt-2">
        <Checkbox 
          id="consent" 
          checked={consentChecked}
          onCheckedChange={setConsentChecked}
        />
        <label htmlFor="consent" className="text-sm text-foreground leading-relaxed cursor-pointer">
          <span className="text-destructive">*</span> By checking this box, I consent to StudyAbroad.com collecting and storing my data through the submission of this form, sending marketing communications, and I agree to the StudyAbroad.com Privacy Policy.
        </label>
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full mt-6">
        SEND ME THE INFO!
      </Button>
    </form>
  )
}

