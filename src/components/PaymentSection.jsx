import React, { useState } from 'react'

function YenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="#5ac8d4" />
      <text x="10" y="14.5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">¥</text>
    </svg>
  )
}

function EyeIcon({ crossed }) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <path d="M10 1C5 1 1 7 1 7s4 6 9 6 9-6 9-6-4-6-9-6z" stroke="#5ac8d4" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="7" r="3" stroke="#5ac8d4" strokeWidth="1.5" fill="none" />
      {crossed && (
        <line x1="3" y1="1" x2="17" y2="13" stroke="#5ac8d4" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  )
}

function PaymentCard({ date, status, confirmed, amount, visible }) {
  return (
    <div className="payment-card">
      <div className="payment-date">{date} のお支払額</div>
      <div className="payment-row">
        <span className={`payment-badge ${confirmed ? 'confirmed' : 'unconfirmed'}`}>
          {status}
        </span>
        <span className="payment-amount">
          {visible ? `¥ ${amount.toLocaleString()}` : '¥ •••'}
        </span>
      </div>
    </div>
  )
}

export default function PaymentSection() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="payment-section">
      <div className="payment-header">
        <div className="payment-header-left">
          <YenIcon />
          <span className="payment-title">お支払照会</span>
        </div>
        <button className="payment-toggle-btn" onClick={() => setVisible(v => !v)}>
          <EyeIcon crossed={visible} />
          <span className="payment-show-label">{visible ? '非表示' : '表示'}</span>
        </button>
      </div>

      <div className="payment-cards-row">
        <PaymentCard
          date="2026/04/27" status="確定" confirmed={true}
          amount={4000} visible={visible}
        />
        <PaymentCard
          date="2026/05/27" status="未確定" confirmed={false}
          amount={3000} visible={visible}
        />
      </div>
    </div>
  )
}
