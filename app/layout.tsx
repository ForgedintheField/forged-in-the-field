import './globals.css';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import GA from './google-analytics';
import StructuredData from './(seo)/StructuredData';

export const metadata = {
  title: {
    default: 'Forged in the Field',
    template: '%s | Forged in the Field',
  },
  description:
    'Upland hunter fitness HQ — programs, recovery, and community.',
  metadataBase: new URL('https://forgedinthefield.com'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-stone-50 text-stone-900">
        {/* Site-wide content */}
        {children}

        {/* Vercel Analytics - tracks page views and performance */}
        <StructuredData />
        <GA />
        <Analytics />
      </body>
    </html>
  );
}