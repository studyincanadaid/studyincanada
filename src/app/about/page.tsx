"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Globe, Users, Award, Target, Heart, CheckCircle2, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: GraduationCap,
      title: "Excellence in Education",
      description: "We are committed to providing the highest quality educational opportunities and guidance to help students achieve their academic goals."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our extensive network spans across countries, connecting students with premier educational institutions worldwide."
    },
    {
      icon: Users,
      title: "Student-Centered",
      description: "Every decision we make is focused on empowering students and helping them succeed in their study abroad journey."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "With years of experience, we have successfully helped thousands of students achieve their dreams of studying abroad."
    }
  ]

  const stats = [
    { number: "10,000+", label: "Students Helped" },
    { number: "50+", label: "Partner Universities" },
    { number: "20+", label: "Countries" },
    { number: "95%", label: "Success Rate" }
  ]

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description: "Our experienced team provides personalized counseling to help you choose the right program and destination."
    },
    {
      title: "End-to-End Support",
      description: "From application to visa processing, we're with you every step of the way."
    },
    {
      title: "Financial Assistance",
      description: "We help you explore scholarships and funding options to make studying abroad affordable."
    },
    {
      title: "Cultural Preparation",
      description: "Get ready for your international experience with our comprehensive cultural orientation programs."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1BB685]/10 via-background to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#424242] mb-4">
              About BideshStudy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students to achieve their dreams of studying abroad with expert guidance, comprehensive support, and global opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>About Us</span>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-[#1BB685] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story Section */}
        <section className="mb-12">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-4">
              Our Story
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                BideshStudy was founded with a simple yet powerful mission: to make quality international education accessible to students everywhere. We believe that studying abroad is a transformative experience that opens doors to new opportunities, cultures, and perspectives.
              </p>
              <p>
                What started as a small team passionate about education has grown into a trusted partner for thousands of students worldwide. We've built strong relationships with premier universities and institutions across the globe, enabling us to offer a wide range of study abroad programs.
              </p>
              <p>
                Our commitment goes beyond just helping students find programs. We provide comprehensive support throughout the entire journey - from choosing the right destination and program to navigating applications, visas, and cultural adaptation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-[#1BB685]" />
                  <h3 className="text-xl md:text-2xl font-bold text-[#424242]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower students with the knowledge, resources, and support they need to successfully pursue their educational dreams abroad, making quality international education accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-[#1BB685]" />
                  <h3 className="text-xl md:text-2xl font-bold text-[#424242]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading study abroad consultancy, recognized for our commitment to student success and our ability to connect students with life-changing educational opportunities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-6 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[#1BB685]/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-[#1BB685]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#424242] mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-6 text-center">
            Why Choose BideshStudy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 border border-border/50 rounded-lg hover:border-[#1BB685]/50 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-[#1BB685] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#424242] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#1BB685]/10 to-[#1BB685]/5 border border-[#1BB685]/20 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#424242] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of students who have successfully realized their dreams of studying abroad with our expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-[#1BB685] hover:bg-[#1BB685]/90 text-white">
                Apply Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

