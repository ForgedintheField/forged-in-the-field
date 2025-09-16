// app/layout.tsx
import StructuredData from "./(seo)/StructuredData"
import "./globals.css"
import GA from "./google-analytics"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  metadataBase: new URL("https://forgedinthefield.com"),
  title: "Forged in the Field — Upland Hunter Fitness",
  description: "Field-ready strength, durability, and recovery for upland hunters.",
  openGraph: {
    title: "Forged in the Field",
    description:
      "Upland hunter fitness HQ — field-ready strength, durability, and recovery.",
    url: "https://forgedinthefield.com",
    siteName: "Forged in the Field",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forged in the Field",
    description: "Field-ready strength for upland hunters.",
    images: ["/og.jpg"],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Forged in the Field",
  url: "https://forgedinthefield.com",
  logo: "https://forgedinthefield.com/logo.png",
  description:
    "Forged in the Field provides field-ready fitness programs and resources for upland hunters and bird dog handlers.",
  sameAs: [
    "https://www.instagram.com/forgedinthefield",
    "https://www.youtube.com/@forgedinthefield",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full bg-bg text-text font-sans">
        {children}
        <StructuredData />
        <GA />
        <Analytics />
      </body>
    </html>
  )
}