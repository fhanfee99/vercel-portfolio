import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackgroundEffects } from "@/components/background-effects"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Farhan A Hanfee | Senior Full-Stack Developer | Shopify & E-Commerce Specialist",
description:
  "Senior Full-Stack Developer and Shopify Expert with 7+ years of experience building scalable eCommerce platforms, custom Shopify themes, high-performance storefronts, and modern web applications using React, Node.js, and modern frontend technologies.",
  generator: "v0.app",
  metadataBase: new URL("https://your-domain.vercel.app"),
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased relative overflow-x-hidden`}
      >
        <BackgroundEffects />
        
        <div className="relative z-20">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  )
}
