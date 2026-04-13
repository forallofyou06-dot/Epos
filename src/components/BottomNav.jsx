import React from 'react'

function HomeIcon({ active }) {
  const c = active ? '#5ac8d4' : '#aaa'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H5a1 1 0 01-1-1V10.5z"
        fill={active ? '#5ac8d4' : 'none'} stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="9" y="13" width="6" height="9" rx="0.5" fill={active ? 'white' : '#ccc'} />
    </svg>
  )
}

function PayIcon({ active }) {
  const c = active ? '#5ac8d4' : '#aaa'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={c} strokeWidth="1.8" />
      <line x1="3" y1="10" x2="21" y2="10" stroke={c} strokeWidth="1.8" />
      <text x="12" y="19" textAnchor="middle" fontSize="8" fill={c} fontWeight="bold">¥</text>
    </svg>
  )
}

function CardIcon({ active }) {
  const c = active ? '#5ac8d4' : '#aaa'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="13" rx="2.5" stroke={c} strokeWidth="1.8" />
      <line x1="2" y1="11" x2="22" y2="11" stroke={c} strokeWidth="2" />
      <rect x="4" y="14" width="6" height="2" rx="1" fill={active ? '#5ac8d4' : '#ccc'} />
    </svg>
  )
}

function QuestIcon({ active }) {
  const c = active ? '#5ac8d4' : '#aaa'
  const fill = active ? '#e8f9fb' : '#f5f5f5'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={c} strokeWidth="1.8" />
      <path d="M3 11 Q6 11 6 12 Q6 13 3 13" fill={fill} stroke={c} strokeWidth="1.2" />
      <path d="M21 11 Q18 11 18 12 Q18 13 21 13" fill={fill} stroke={c} strokeWidth="1.2" />
      <line x1="8" y1="9" x2="16" y2="9" stroke={active ? '#5ac8d4' : '#ccc'} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="12" x2="14" y2="12" stroke={active ? '#5ac8d4' : '#ccc'} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="15" x2="12" y2="15" stroke={active ? '#5ac8d4' : '#ccc'} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function BottomNav({ page, setPage }) {
  const items = [
    { label: 'ホーム',    Icon: HomeIcon },
    { label: 'お支払照会', Icon: PayIcon },
    { label: 'カード',    Icon: CardIcon },
    { label: 'クエスト',  Icon: QuestIcon },
  ]

  return (
    <nav className="bottom-nav">
      {items.map(({ label, Icon }, i) => (
        <button
          key={label}
          className={`nav-item ${page === i ? 'nav-active' : ''}`}
          onClick={() => setPage(i)}
        >
          <Icon active={page === i} />
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
