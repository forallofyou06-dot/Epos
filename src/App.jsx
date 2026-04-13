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
      <Header />
      <div className="scroll-area">
        <Illustration />
        <div className="content-bg">
          <Banner />
          <PointsSection />
          <PaymentSection />
          <PlatinumBanner />
          <QuickActions />
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
