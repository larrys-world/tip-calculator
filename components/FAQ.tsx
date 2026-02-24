'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How much should I tip at a restaurant?",
    answer: "In the US, standard tipping is 15-20% for good service at restaurants. For excellent service, 20-25% is appreciated. For poor service, 10-15% is still customary. Remember that servers often rely on tips as a significant part of their income."
  },
  {
    question: "Should I tip on the pre-tax or post-tax amount?",
    answer: "Traditionally, tips are calculated on the pre-tax amount. However, many people tip on the post-tax total for simplicity. Either approach is acceptable - the difference is usually minimal. Our calculator lets you choose either option."
  },
  {
    question: "How do I split the tip among multiple people?",
    answer: "Divide the total bill (including tip) by the number of people. Our calculator automatically shows both the tip amount per person and the total amount each person should pay when you enter the party size."
  },
  {
    question: "What's the standard tip for delivery, takeout, and other services?",
    answer: "Delivery: 15-20% (minimum $3-5). Takeout: 10-15% for large orders. Hair salon: 15-20%. Taxi/Uber: 15-20%. Hotel housekeeping: $2-5 per night. Bartenders: $1-2 per drink or 15-20% of tab."
  },
  {
    question: "Do I need to tip in other countries?",
    answer: "Tipping customs vary greatly by country. In Japan and South Korea, tipping can be considered rude. In Europe, 5-10% is common. In Australia and New Zealand, tipping is optional. Always research local customs before traveling."
  },
  {
    question: "How do I calculate tip for large groups?",
    answer: "Many restaurants automatically add 18-20% gratuity for groups of 6-8 or more. Check your bill first. If no automatic gratuity, consider tipping 20% or more for large groups as they require more service. Our calculator handles any group size."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}