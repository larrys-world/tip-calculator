'use client'

import { useState, useEffect } from 'react'
import AdSense from '../components/AdSense'
import BuyMeACoffee from '../components/BuyMeACoffee'

export default function Home() {
  const [billAmount, setBillAmount] = useState('')
  const [tipPercent, setTipPercent] = useState(18)
  const [customTip, setCustomTip] = useState('')
  const [splitCount, setSplitCount] = useState(1)
  const [isCustom, setIsCustom] = useState(false)

  const tipPresets = [10, 15, 18, 20, 25]

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0
    const tip = isCustom ? (parseFloat(customTip) || 0) : tipPercent
    const tipAmount = (bill * tip) / 100
    const total = bill + tipAmount
    const perPerson = total / splitCount

    return {
      tipAmount: tipAmount.toFixed(2),
      total: total.toFixed(2),
      perPerson: perPerson.toFixed(2),
      tipPerPerson: (tipAmount / splitCount).toFixed(2)
    }
  }

  const results = calculateTip()

  const handleTipSelect = (percent: number) => {
    setTipPercent(percent)
    setIsCustom(false)
    setCustomTip('')
  }

  const handleCustomTip = (value: string) => {
    setCustomTip(value)
    setIsCustom(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Top Ad */}
        <AdSense slot="top-banner" format="horizontal" className="mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Tip Calculator
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          {/* Bill Amount */}
          <div>
            <label htmlFor="bill" className="block text-sm font-medium text-gray-700 mb-2">
              Bill Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                id="bill"
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
                step="0.01"
              />
            </div>
          </div>

          {/* Tip Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tip Percentage
            </label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {tipPresets.map((percent) => (
                <button
                  key={percent}
                  onClick={() => handleTipSelect(percent)}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    !isCustom && tipPercent === percent
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {percent}%
                </button>
              ))}
              <button
                onClick={() => setIsCustom(true)}
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isCustom
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Custom
              </button>
            </div>
            {isCustom && (
              <div className="relative">
                <input
                  type="number"
                  value={customTip}
                  onChange={(e) => handleCustomTip(e.target.value)}
                  className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter custom tip %"
                  step="0.1"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  %
                </span>
              </div>
            )}
          </div>

          {/* Split Bill */}
          <div>
            <label htmlFor="split" className="block text-sm font-medium text-gray-700 mb-2">
              Split Between
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSplitCount(Math.max(1, splitCount - 1))}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 font-medium"
              >
                -
              </button>
              <div className="flex-1 text-center">
                <span className="text-2xl font-semibold text-gray-900">{splitCount}</span>
                <span className="text-sm text-gray-500 ml-2">
                  {splitCount === 1 ? 'person' : 'people'}
                </span>
              </div>
              <button
                onClick={() => setSplitCount(splitCount + 1)}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 font-medium"
              >
                +
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tip Amount</span>
              <span className="text-xl font-semibold text-gray-900">
                ${results.tipAmount}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ${results.total}
              </span>
            </div>
            {splitCount > 1 && (
              <>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Per Person</span>
                    <span className="text-xl font-semibold text-blue-600">
                      ${results.perPerson}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Tip per person</span>
                    <span className="text-gray-700">
                      ${results.tipPerPerson}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mid-content Ad */}
        <div className="mt-6">
          <AdSense slot="mid-content" format="rectangle" />
        </div>

        {/* Info Section */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Quick tip: In the US, 15-20% is standard for good service.
            Adjust based on your experience!
          </p>
        </div>
        
        {/* Bottom Ad */}
        <div className="mt-6">
          <AdSense slot="bottom-content" format="rectangle" />
        
        {/* Support Section */}
        <BuyMeACoffee />        </div>
        
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