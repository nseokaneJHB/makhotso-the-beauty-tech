import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"

import "./globals.css"

import { ThemeWrapper } from "@/wrappers/ThemeWrapper"

import { Footer } from "@/components/server/footer"

import { cn } from "@/lib/utils"
import { Navigation } from "@/components/server/navigation"
import { AuthProvider } from "@/wrappers/AuthContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  description:
    "Professional nail designs, lash extensions, and makeup services customized for your unique style. Our skilled beauty experts deliver premium, long-lasting results using quality products for any occasion. Transform your look with Makhotso The Beauty Tech.",
  title: {
    default: "Makhotso The Beauty Tech",
    template: "%s | Makhotso The Beauty Tech"
  }
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "dark:bg-background text-foreground flex min-h-screen flex-col bg-pink-100 font-sans antialiased"
        )}
      >
        <ThemeWrapper>
          <AuthProvider>
            <Navigation />
            <main className="grow pt-36 pb-16">{children}</main>
            <Footer />
            <Analytics />
          </AuthProvider>
        </ThemeWrapper>
      </body>
    </html>
  )
}
