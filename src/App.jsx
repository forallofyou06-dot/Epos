import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Illustration from './components/Illustration'
import Banner from './components/Banner'
import PointsSection from './components/PointsSection'
import PaymentSection from './components/PaymentSection'
import PlatinumBanner from './components/PlatinumBanner'
import QuickActions from './components/QuickActions'
import BottomNav from './components/BottomNav'
import PaymentInquiry from './components/PaymentInquiry'
import QuestScreen from './components/QuestScreen'
import CardScreen from './components/CardScreen'

export default function App() {
  const [page, setPage] = useState(0)

  return (
    <div className="phone-frame">
      {page === 0 ? (
        <>
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
        </>
      ) : page === 1 ? (
        <PaymentInquiry />
      ) : page === 2 ? (
        <CardScreen />
      ) : page === 3 ? (
        <QuestScreen />
      ) : null}
      <BottomNav page={page} setPage={setPage} />
    </div>
  )
}
