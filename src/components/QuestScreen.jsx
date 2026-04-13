import React, { useState } from 'react'

/* ── EPOS Quest scroll+quill icon ── */
function QuestScrollIcon({ size = 44 }) {
  const s = size / 44
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      {/* scroll body */}
      <rect x="9" y="9" width="22" height="28" rx="3" fill="#d4b896" />
      {/* top roll */}
      <rect x="7" y="7" width="26" height="6" rx="3" fill="#c4a07e" />
      {/* bottom roll */}
      <rect x="7" y="31" width="26" height="6" rx="3" fill="#c4a07e" />
      {/* scroll lines */}
      <line x1="13" y1="18" x2="27" y2="18" stroke="#b08860" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="23" x2="24" y2="23" stroke="#b08860" strokeWidth="1.5" strokeLinecap="round" />
      {/* quill – large feather overlapping from upper-right */}
      <path d="M28,4 Q40,2 37,18 Q34,12 29,16 L25,32 Q24,29 26,23 Q21,25 23,18 Q27,13 28,4Z" fill="#4ab8c8" />
      <path d="M28,4 Q34,8 29,16 L26,23 Q27,13 28,4Z" fill="#3aa8b8" opacity="0.6" />
    </svg>
  )
}

const QUESTS = [
  { category: 'おトク', color: 'otoku', title: 'ポイントのためかた・使いかたを見てみよう' },
  { category: 'べんり', color: 'benri', title: 'エポスカードの使い方を見てみよう' },
  { category: 'べんり', color: 'benri', title: 'エポスETCカードを見てみよう' },
  { category: 'あんしん', color: 'anshin', title: 'エポスNetログイン通知サービスを見てみよう' },
  { category: 'あんしん', color: 'anshin', title: 'セキュリティ強化のための本人確認サービスを見てみよう' },
  { category: 'あんしん', color: 'anshin', title: 'ネットショッピングの専用カードを見てみよう' },
]

export default function QuestScreen() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeFilter, setActiveFilter] = useState(1)

  return (
    <div className="quest-screen">
      {/* Header */}
      <header className="quest-header">
        <div className="quest-logo">
          <QuestScrollIcon size={38} />
          <span className="quest-logo-text">EPOS QUEST</span>
        </div>
      </header>

      {/* Tabs */}
      <div className="quest-tabs">
        {['クエスト一覧', 'アイテム一覧'].map((tab, i) => (
          <button
            key={tab}
            className={`quest-tab ${activeTab === i ? 'quest-tab-active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter pills */}
      <div className="quest-filters">
        {['すべて', '未クリア', 'クリア済'].map((f, i) => (
          <button
            key={f}
            className={`quest-filter-pill ${activeFilter === i ? 'quest-filter-active' : ''}`}
            onClick={() => setActiveFilter(i)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Quest list */}
      <div className="quest-scroll">
        {QUESTS.map((quest, i) => (
          <button key={i} className="quest-item">
            <QuestScrollIcon size={46} />
            <div className="quest-item-content">
              <span className={`quest-badge quest-badge-${quest.color}`}>{quest.category}</span>
              <span className="quest-item-title">{quest.title}</span>
            </div>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 1.5L6.5 7L1 12.5" stroke="#5ac8d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
        <div className="bottom-spacer" />
      </div>
    </div>
  )
}
