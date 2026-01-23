import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { SocialCard } from "@/components/social-card";
import { AuthProviderWrapper } from "@/components/providers/AuthProviderWrapper";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyinCanada.ID - Study Abroad Programs",
  description: "Your gateway to quality education and learning opportunities worldwide. StudyinCanada.ID - Expert study abroad guidance for Indonesian students",
  keywords: "study abroad, education, international students, Canada, StudyinCanada.ID",
  authors: [{ name: "StudyinCanada.ID" }],
  creator: "StudyinCanada.ID",
  publisher: "StudyinCanada.ID",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studyincanada.id",
    siteName: "StudyinCanada.ID",
    title: "StudyinCanada.ID - Study Abroad Programs",
    description: "Your gateway to quality education and learning opportunities worldwide",
    images: [
      {
        url: "https://studyincanada.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StudyinCanada.ID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyinCanada.ID - Study Abroad Programs",
    description: "Your gateway to quality education and learning opportunities worldwide",
    creator: "@StudyinCanadaID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProviderWrapper>
          <Navbar/>
          <main className="min-h-screen max-w-7xl mx-auto px-4 pt-16">
          {children}
          </main>
          <SocialCard />
          <WhatsAppWidget />
          <Footer/>
        </AuthProviderWrapper>
        {/* Cloudinary Upload Widget */}
        <Script 
          src="https://widget.cloudinary.com/v2.0/global/all.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

