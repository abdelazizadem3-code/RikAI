import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RikAI - Din AI-Assistent för Ekonomi & Affärer',
  description: 'En mörk, modern AI-app med 5 kraftfulla verktyg för ekonomi, affärsidéer och marknadsföring.',
  generator: 'Next.js',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>
        {children}
      </body>
    </html>
  )
}
