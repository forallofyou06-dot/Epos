import React from 'react'

function YenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="#5ac8d4" />
      <text x="10" y="14.5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">¥</text>
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <path d="M10 1C5 1 1 7 1 7s4 6 9 6 9-6 9-6-4-6-9-6z" stroke="#5ac8d4" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="7" r="3" stroke="#5ac8d4" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function PaymentCard({ date, status, confirmed }) {
  return (
    <div className="payment-card">
      <div className="payment-date">{date} のお支払額</div>
      <div className="payment-row">
        <span className={`payment-badge ${confirmed ? 'confirmed' : 'unconfirmed'}`}>
          {status}
        </span>
        <span className="payment-amount">¥ &bull;&bull;&bull;</span>
      </div>
    </div>
  )
}

export default function PaymentSection() {
  return (
    <div className="payment-section">
      <div className="payment-header">
        <div className="payment-header-left">
          <YenIcon />
          <span className="payment-title">お支払照会</span>
        </div>
        <div className="payment-header-right">
          <EyeIcon />
          <span className="payment-show-label">表示</span>
        </div>
      </div>

      <div className="payment-cards-row">
        <PaymentCard date="2026/04/27" status="確定" confirmed={true} />
        <PaymentCard date="2026/05/27" status="未確定" confirmed={false} />
      </div>
    </div>
  )
}
