import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tip Calculator - Quick & Easy Bill Splitting',
  description: 'Calculate tips and split bills instantly. Free tip calculator with customizable percentages and group splitting features.',
  keywords: 'tip calculator, bill splitter, gratuity calculator, restaurant tip, service tip',
  openGraph: {
    title: 'Tip Calculator - Quick & Easy Bill Splitting',
    description: 'Calculate tips and split bills instantly. Free tip calculator with customizable percentages and group splitting features.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}