import React from 'react'

export default function PlatinumBanner() {
  return (
    <div className="platinum-banner">
      {/* Card illustration */}
      <div className="platinum-card-icon">
        <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#c0c0c0" />
          <rect x="0" y="10" width="48" height="6" fill="#a0a0a8" />
          <rect x="4" y="20" width="14" height="2" rx="1" fill="#b8b8c0" />
          <text x="24" y="9" textAnchor="middle" fontSize="6" fill="#888" fontWeight="bold">PLATINUM</text>
        </svg>
      </div>

      <div className="platinum-text">
        <div className="platinum-title">プラチナカードへのご招待</div>
        <div className="platinum-sub">申込期限：2026/4/30 まで</div>
      </div>

      <span className="platinum-arrow">›</span>
    </div>
  )
}
