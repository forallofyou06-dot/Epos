import React from 'react'

function EposPointCard() {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="point-icon">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="10" fill="#f0b52e" />
            <text x="10" y="14" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">P</text>
          </svg>
        </span>
        <span className="stat-card-title">EPOS Point</span>
      </div>
      <div className="point-value">
        <span className="point-number">0</span>
        <span className="point-unit">P</span>
      </div>
    </div>
  )
}

function ToBonusCard() {
  const pct = (0 / 10000) * 100

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="bonus-flag-icon">
          <svg width="18" height="20" viewBox="0 0 18 20">
            <line x1="3" y1="0" x2="3" y2="20" stroke="#f0b52e" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="3,1 17,7 3,13" fill="#f0b52e" />
          </svg>
        </span>
        <span className="stat-card-title">To Bonus</span>
      </div>

      {/* milestone labels */}
      <div className="bonus-milestones">
        <span className="milestone">
          2,500
          <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginLeft: 2 }}>
            <polygon points="5,8 0,2 10,2" fill="#f0b52e" />
          </svg>
        </span>
        <span className="milestone">
          10,000
          <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginLeft: 2 }}>
            <polygon points="5,8 0,2 10,2" fill="#f0b52e" />
          </svg>
        </span>
      </div>

      {/* progress bar */}
      <div className="bonus-bar-wrap">
        <div className="bonus-bar-bg">
          <div className="bonus-bar-fill" style={{ width: `${pct}%` }} />
          {/* marker at 2500 = 25% */}
          <div className="bonus-marker" style={{ left: '25%' }} />
          {/* marker at 10000 = 100% */}
          <div className="bonus-marker" style={{ left: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default function PointsSection() {
  return (
    <div className="points-section">
      <EposPointCard />
      <ToBonusCard />
    </div>
  )
}
