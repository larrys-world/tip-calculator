'use client'

import { useState, useEffect } from 'react'
import { AdSenseDisplay } from 'monetization-components'
import { EmailCapturePopup } from 'monetization-components'
import { PremiumUpgradeBanner } from 'monetization-components'
import { useUsageTracking } from 'monetization-components'

// Import original page component
import OriginalPage from './page-original'

export default function MonetizedPage() {
  const { trackEvent, checkLimit } = useUsageTracking('${tool}', 10)
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  
  useEffect(() => {
    // Show email capture after 30 seconds
    const timer = setTimeout(() => setShowEmailCapture(true), 30000)
    return () => clearTimeout(timer)
  }, [])
  
  // Track page view
  useEffect(() => {
    trackEvent('page_view')
  }, [])
  
  return (
    <div className="min-h-screen">
      {/* Top Ad */}
      <AdSenseDisplay 
        client="ca-pub-XXXXXXXXXX"
        slot="1234567890"
        format="horizontal"
      />
      
      {/* Premium Banner */}
      <PremiumUpgradeBanner
        features={[
          'Unlimited calculations',
          'No ads',
          'Export results',
          'Priority support'
        ]}
        ctaText="Upgrade to Premium"
        ctaLink="/premium"
      />
      
      {/* Original Tool Content */}
      <OriginalPage />
      
      {/* Bottom Ad */}
      <AdSenseDisplay 
        client="ca-pub-XXXXXXXXXX"
        slot="0987654321"
        format="rectangle"
      />
      
      {/* Email Capture Popup */}
      {showEmailCapture && (
        <EmailCapturePopup
          onSubmit={(email) => {
            console.log('Email captured:', email)
            trackEvent('email_captured')
            setShowEmailCapture(false)
          }}
          onClose={() => setShowEmailCapture(false)}
        />
      )}
    </div>
  )
}
