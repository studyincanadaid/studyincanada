'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show widget after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = '+62881037405908' // StudyinCanada.ID WhatsApp number
  const whatsappMessage = 'Hi, I would like to know more about your study abroad programs.'

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Widget Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Chat Bubble */}
        {isOpen && (
          <div className="animate-fade-in bg-white rounded-2xl shadow-2xl p-5 w-80 md:w-96 mb-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              We typically reply within minutes during business hours. Feel free to message us anytime!
            </p>
            <button
              onClick={handleClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Start Conversation
            </button>
          </div>
        )}

        {/* Floating Button with Ripple Effect */}
        <div className="relative w-16 h-16">
          {/* Single Ripple Animation - starts from center */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-ripple-single"></div>
          </div>

          {/* Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute inset-0 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative z-10"
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle className="h-8 w-8" fill="currentColor" />
          </button>
        </div>

        {/* Mobile Badge */}
        <div className="md:hidden text-xs text-green-600 font-semibold bg-white rounded-full px-3 py-1 shadow-md">
          We're Online
        </div>
      </div>

      {/* Backdrop - only on mobile when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

