"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Save, LogOut, GraduationCap, BookOpen, Award, Briefcase, TrendingUp, User, Mail, Calendar } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

interface ProfileData {
  ssc?: string
  hsc?: string
  bsc?: string
  msc?: string
  projects?: string
}

export default function ProfilePage() {
  const router = useRouter()
  const { user, token, logout } = useAuth()
  
  // Initialize state first
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  
  // Use user directly from context
  const currentUser = user
  
  const [formData, setFormData] = useState<ProfileData>({
    ssc: "",
    hsc: "",
    bsc: "",
    msc: "",
    projects: "",
  })
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [completionPercentage, setCompletionPercentage] = useState(0)

  useEffect(() => {
    if (!user || !token) {
      router.push("/login?redirect=/profile")
      return
    }

    // Stop loading and fetch profile data
    setIsLoading(false)
    fetchProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, token, router])

  // Calculate completion percentage
  useEffect(() => {
    const fields = [formData.ssc, formData.hsc, formData.bsc, formData.msc, formData.projects]
    const filledFields = fields.filter((field) => field && field.trim() !== "").length
    const percentage = Math.round((filledFields / fields.length) * 100)
    setCompletionPercentage(percentage)
  }, [formData])

  const fetchProfile = async () => {
    if (!token) {
      setIsLoading(false)
      return
    }

    try {
      const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
      
      const response = await fetch(`${baseUrl}/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success && data.profile) {
          setFormData({
            ssc: data.profile.ssc || "",
            hsc: data.profile.hsc || "",
            bsc: data.profile.bsc || "",
            msc: data.profile.msc || "",
            projects: data.profile.projects || "",
          })
        }
      } else {
        // If profile doesn't exist yet, that's okay - user can create it
      }
    } catch (error) {
      console.error("Error fetching profile:", error)
      // Don't redirect on error, just log it - user might not have profile yet
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear messages when user starts typing
    if (error) setError("")
    if (successMessage) setSuccessMessage("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccessMessage("")
    setIsSaving(true)

    try {
      if (!token) {
        setError("You must be logged in to save your profile")
        setIsSaving(false)
        return
      }

      const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

      // Check if profile exists (GET request)
      const checkResponse = await fetch(`${baseUrl}/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const method = checkResponse.ok ? "PUT" : "POST"

      const response = await fetch(`${baseUrl}/api/profile`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      let data
      try {
        const text = await response.text()
        data = text ? JSON.parse(text) : {}
      } catch (parseError) {
        setError("Invalid response from server. Please try again.")
        setIsSaving(false)
        return
      }

      if (!response.ok) {
        setError(data.message || "Failed to save profile. Please try again.")
        setIsSaving(false)
        return
      }

      if (data.success) {
        setSuccessMessage("Profile saved successfully!")
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(""), 3000)
      }
    } catch (error) {
      console.error("Error saving profile:", error)
      setError("An error occurred while saving your profile. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1BB685] mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-200px)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#424242]">My Profile</h1>
            <p className="text-muted-foreground mt-1">
              Complete your academic profile to get personalized recommendations
            </p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* User Information Card */}
        <Card className="border-2 shadow-lg bg-gradient-to-br from-[#1BB685]/5 to-[#0D9488]/5">
          <CardHeader>
            <CardTitle className="text-xl text-[#424242] flex items-center gap-2">
              <User className="h-5 w-5 text-[#1BB685]" />
              User Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>Full Name</span>
                </div>
                <p className="text-lg font-semibold text-[#424242]">
                  {user?.name || "Not provided"}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>Email Address</span>
                </div>
                <p className="text-lg font-semibold text-[#424242]">
                  {user?.email || "Not provided"}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Account Status</span>
                </div>
                <p className="text-lg font-semibold text-green-600">
                  {user && token ? "Active" : "Inactive"}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>User ID</span>
                </div>
                <p className="text-lg font-semibold text-[#424242]">
                  {user?.id || user?.email?.split("@")[0] || "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Completion Card */}
        <Card className="border-2 shadow-lg bg-gradient-to-r from-[#1BB685]/10 to-[#0D9488]/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-[#1BB685]" />
                <div>
                  <h3 className="font-semibold text-lg text-[#424242]">
                    Profile Completion
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill in all fields to complete your profile
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#1BB685]">
                  {completionPercentage}%
                </div>
                <div className="text-xs text-muted-foreground">Complete</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-[#1BB685] to-[#0D9488] h-3 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Profile Form */}
        <Card className="border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#424242]">Academic Information</CardTitle>
            <CardDescription>
              Add your educational qualifications and projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {successMessage && (
                <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
                  {successMessage}
                </div>
              )}

              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SSC */}
                <div className="space-y-2">
                  <Label htmlFor="ssc" className="text-[#424242] font-medium flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[#1BB685]" />
                    SSC (Secondary School Certificate)
                  </Label>
                  <Input
                    id="ssc"
                    name="ssc"
                    type="text"
                    placeholder="e.g., GPA 5.00, Division: First"
                    value={formData.ssc}
                    onChange={handleChange}
                    className="h-12 text-base"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your SSC results or grades
                  </p>
                </div>

                {/* HSC */}
                <div className="space-y-2">
                  <Label htmlFor="hsc" className="text-[#424242] font-medium flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[#1BB685]" />
                    HSC (Higher Secondary Certificate)
                  </Label>
                  <Input
                    id="hsc"
                    name="hsc"
                    type="text"
                    placeholder="e.g., GPA 5.00, Division: First"
                    value={formData.hsc}
                    onChange={handleChange}
                    className="h-12 text-base"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your HSC results or grades
                  </p>
                </div>

                {/* BSc */}
                <div className="space-y-2">
                  <Label htmlFor="bsc" className="text-[#424242] font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#1BB685]" />
                    BSc (Bachelor of Science)
                  </Label>
                  <Input
                    id="bsc"
                    name="bsc"
                    type="text"
                    placeholder="e.g., CGPA 3.75, Major: Computer Science"
                    value={formData.bsc}
                    onChange={handleChange}
                    className="h-12 text-base"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your BSc degree details
                  </p>
                </div>

                {/* MSc */}
                <div className="space-y-2">
                  <Label htmlFor="msc" className="text-[#424242] font-medium flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#1BB685]" />
                    MSc (Master of Science)
                  </Label>
                  <Input
                    id="msc"
                    name="msc"
                    type="text"
                    placeholder="e.g., CGPA 3.80, Major: Data Science"
                    value={formData.msc}
                    onChange={handleChange}
                    className="h-12 text-base"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your MSc degree details (if applicable)
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-2">
                <Label htmlFor="projects" className="text-[#424242] font-medium flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-[#1BB685]" />
                  Projects
                </Label>
                <textarea
                  id="projects"
                  name="projects"
                  rows={6}
                  placeholder="Describe your projects, research work, or any relevant experience..."
                  value={formData.projects}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border border-input bg-background rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <p className="text-xs text-muted-foreground">
                  List your projects, research, internships, or any relevant experience
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 h-12 text-base font-semibold bg-[#1BB685] hover:bg-[#1BB685]/90 text-white transition-colors"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <span className="mr-2">Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Profile
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="border-2 bg-blue-50/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Award className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#424242] mb-1">
                  Why complete your profile?
                </h3>
                <p className="text-sm text-muted-foreground">
                  A complete profile helps us provide better program recommendations and scholarship opportunities tailored to your academic background.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
