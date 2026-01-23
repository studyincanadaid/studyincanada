import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { SocialCard } from "@/components/social-card";
import { AuthProviderWrapper } from "@/components/providers/AuthProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BideshStudy - Study Abroad Programs",
  description: "Your gateway to quality education and learning opportunities worldwide",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
