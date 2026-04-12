import React from 'react'

function ActionBtn({ children, label }) {
  return (
    <button className="quick-action-btn">
      <div className="quick-action-circle">{children}</div>
      {label && <span className="quick-action-label">{label}</span>}
    </button>
  )
}

// Coin/Points icon
function PointsIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      {/* coin stack */}
      <ellipse cx="17" cy="26" rx="11" ry="4" fill="#f0b52e" />
      <rect x="6" y="18" width="22" height="8" fill="#f0b52e" />
      <ellipse cx="17" cy="18" rx="11" ry="4" fill="#f8d060" />
      <ellipse cx="17" cy="14" rx="11" ry="4" fill="#f0b52e" />
      <rect x="6" y="6" width="22" height="8" fill="#f0b52e" />
      <ellipse cx="17" cy="6" rx="11" ry="4" fill="#f8d060" />
      <text x="17" y="10" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">P</text>
    </svg>
  )
}

// Heart with hands icon
function BenefitIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      {/* hands */}
      <path d="M5,22 Q5,28 11,28 L23,28 Q29,28 29,22 L29,18 Q29,16 27,16 L26,16 Q25,14 23,14 L22,14" stroke="#e8607a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M12,14 L11,14 Q9,14 8,16 L7,16 Q5,16 5,18 L5,22" stroke="#e8607a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* heart */}
      <path d="M17,20 Q17,12 12,10 Q8,10 8,14 Q8,16 17,20 Q26,16 26,14 Q26,10 22,10 Q17,12 17,20z" fill="#e8607a" />
    </svg>
  )
}

// Sparkle/Star heart icon
function GiftIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      {/* heart */}
      <path d="M17,26 Q9,20 9,14 Q9,9 13,9 Q15,9 17,12 Q19,9 21,9 Q25,9 25,14 Q25,20 17,26z" fill="#e8607a" />
      {/* sparkles */}
      <line x1="27" y1="7" x2="27" y2="13" stroke="#f0b52e" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="24" y1="10" x2="30" y2="10" stroke="#f0b52e" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="5" y1="10" x2="5" y2="14" stroke="#5ac8d4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="12" x2="7" y2="12" stroke="#5ac8d4" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="29" cy="22" r="2" fill="#f0b52e" opacity="0.7" />
    </svg>
  )
}

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <ActionBtn><PointsIcon /></ActionBtn>
      <ActionBtn><BenefitIcon /></ActionBtn>
      <ActionBtn><GiftIcon /></ActionBtn>
    </div>
  )
}
