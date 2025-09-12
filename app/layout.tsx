import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Forged in the Field",
  description: "Upland hunter fitness and bird dog training platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Forged in the Field</h1>
            <nav className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        <footer className="bg-gray-100 mt-8">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Forged in the Field. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}