import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forged in the Field — Upland Hunter Fitness',
  description: 'Hunt longer. Hurt less. Keep up with your dog. Minimalist and strength training built for upland handlers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

