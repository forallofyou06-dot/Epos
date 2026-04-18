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
import MimamoriScreen from './components/MimamoriScreen'
import { IosBanner, NotifPopup, NotifDetail } from './components/NotificationDemo'

export default function App() {
  const [page, setPage] = useState(0)
  const [notif, setNotif] = useState(null) // null | 'banner' | 'popup' | 'detail'

  const triggerTestNotif = () => {
    setNotif('banner')
    setTimeout(() => setNotif('popup'), 3500)
  }

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
              <QuickActions setPage={setPage} onTestNotif={triggerTestNotif} />
            </div>
          </div>
        </>
      ) : page === 1 ? (
        <PaymentInquiry />
      ) : page === 2 ? (
        <CardScreen />
      ) : page === 3 ? (
        <QuestScreen />
      ) : page === 4 ? (
        <MimamoriScreen onBack={() => setPage(0)} />
      ) : null}

      <BottomNav page={page} setPage={setPage} />

      {notif === 'banner' && (
        <IosBanner onDismiss={() => {}} />
      )}
      {notif === 'popup' && (
        <NotifPopup
          onDetail={() => setNotif('detail')}
          onDismiss={() => setNotif(null)}
        />
      )}
      {notif === 'detail' && (
        <NotifDetail onClose={() => setNotif(null)} />
      )}
    </div>
  )
}
