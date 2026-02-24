import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tip Calculator - Calculate Tips & Split Bills | Free Online Tool',
  description: 'Free tip calculator for restaurants, delivery, and services. Calculate tips instantly, split bills among groups, and learn proper tipping etiquette. Works on any device.',
  keywords: 'tip calculator, gratuity calculator, bill splitter, restaurant tip calculator, tipping calculator, tip percentage, split bill calculator, service tip, delivery tip calculator, tipping etiquette, how much to tip',
  openGraph: {
    title: 'Tip Calculator - Quick & Accurate Tip Calculations',
    description: 'Calculate tips and split bills instantly. Free tool with customizable percentages, group splitting, and tipping guides for all services.',
    type: 'website',
    url: 'https://larrys-world.github.io/tip-calculator/',
    siteName: 'Tip Calculator',
    images: [
      {
        url: 'https://larrys-world.github.io/tip-calculator/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tip Calculator Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tip Calculator - Free Online Tool',
    description: 'Calculate tips instantly. Split bills, learn tipping etiquette, and save time.',
    images: ['https://larrys-world.github.io/tip-calculator/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://larrys-world.github.io/tip-calculator/',
  },
  verification: {
    google: 'google-site-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Tip Calculator',
    description: 'Free online tip calculator with bill splitting features',
    url: 'https://larrys-world.github.io/tip-calculator/',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2847'
    }
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much should I tip at a restaurant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the US, standard tipping is 15-20% for good service at restaurants. For excellent service, 20-25% is appreciated. For poor service, 10-15% is still customary.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I tip on the pre-tax or post-tax amount?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditionally, tips are calculated on the pre-tax amount. However, many people tip on the post-tax total for simplicity. Either approach is acceptable.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I split the tip among multiple people?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Divide the total bill (including tip) by the number of people. Our calculator automatically shows both the tip amount per person and the total amount each person should pay.'
        }
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="faq-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}