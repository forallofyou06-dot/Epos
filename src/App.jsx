import React from 'react'
import './App.css'
import Header from './components/Header'
import Illustration from './components/Illustration'
import Banner from './components/Banner'
import PointsSection from './components/PointsSection'
import PaymentSection from './components/PaymentSection'
import PlatinumBanner from './components/PlatinumBanner'
import QuickActions from './components/QuickActions'
import BottomNav from './components/BottomNav'

export default function App() {
  return (
    <div className="phone-frame">
      {/* status bar */}
      <div className="status-bar">
        <span className="status-time">9:21</span>
        <div className="status-icons">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0" y="6" width="3" height="6" rx="0.5" fill="#333" />
            <rect x="4" y="4" width="3" height="8" rx="0.5" fill="#333" />
            <rect x="8" y="2" width="3" height="10" rx="0.5" fill="#333" />
            <rect x="12" y="0" width="3" height="12" rx="0.5" fill="#333" />
          </svg>
          <span className="status-4g">4G</span>
          <div className="battery">
            <div className="battery-body">
              <div className="battery-fill" style={{ width: '69%' }} />
            </div>
            <div className="battery-tip" />
          </div>
        </div>
      </div>

      <Header />

      {/* scrollable content */}
      <div className="scroll-area">
        <Illustration />
        <Banner />
        <PointsSection />
        <PaymentSection />
        <PlatinumBanner />
        <QuickActions />
        <div className="bottom-spacer" />
      </div>

      <BottomNav />
    </div>
  )
}
