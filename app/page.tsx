import TipCalculator from '@/components/TipCalculator'
import AdSense from '@/components/AdSense'
import BuyMeACoffee from '@/components/BuyMeACoffee'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Breadcrumbs />
        
        {/* Top Ad */}
        <AdSense slot="top-banner" format="horizontal" className="mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Tip Calculator
        </h1>

        <TipCalculator />

        {/* Mid-content Ad */}
        <div className="mt-6">
          <AdSense slot="mid-content" format="rectangle" />
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Tipping Guidelines
          </h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Restaurants:</strong> 15-20% for good service, 20-25% for excellent</p>
            <p><strong>Delivery:</strong> 15-20% (minimum $3-5)</p>
            <p><strong>Takeout:</strong> 10-15% for large orders</p>
            <p><strong>Bar:</strong> $1-2 per drink or 15-20% of tab</p>
            <p><strong>Hair/Beauty:</strong> 15-20%</p>
            <p><strong>Taxi/Uber:</strong> 15-20%</p>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
        
        {/* Bottom Ad */}
        <div className="mt-6">
          <AdSense slot="bottom-content" format="rectangle" />
        </div>
        
        {/* Support Section */}
        <BuyMeACoffee />
        
        {/* Footer */}
        <footer className="mt-8 py-4 text-center text-sm text-gray-600">
          <p>
            © 2026 Tip Calculator | 
            <a href="/privacy" className="ml-1 hover:text-gray-900 underline">Privacy Policy</a>
          </p>
        </footer>
      </div>
    </main>
  )
}