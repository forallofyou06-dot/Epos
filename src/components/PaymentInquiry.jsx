import React, { useState } from 'react'
import charaImg from './chara.png'


/* ── Bar chart ── */
function BarChart() {
  const cb  = 175          // chart bottom y
  const mxH = 110          // max bar height (px)
  const mxV = 108701
  const sc  = v => (v / mxV) * mxH

  const b0fH = sc(15000),  b0vH = sc(63000)
  const b1fH = sc(17995),  b1vH = sc(90706)
  const b2tH = sc(40000)

  const bW = 50
  const b0x = 38,  b1x = 145,  b2x = 252
  const b0cx = b0x + bW / 2   // 63
  const b1cx = b1x + bW / 2   // 170
  const b2cx = b2x + bW / 2   // 277

  const b1Top = cb - b1fH - b1vH  // top of tallest bar ≈ 65
  const refY  = cb - sc(80000)    // ≈ 94

  return (
    <svg width="100%" viewBox="0 0 340 212" style={{ display: 'block' }}>
      {/* dashed reference line */}
      <line x1="10" y1={refY} x2="330" y2={refY}
        stroke="#ccc" strokeWidth="1" strokeDasharray="5,4" />

      {/* 8万 indicator – mini mascot image */}
      <image href={charaImg} x="8" y={refY - 22} width="30" height="30" />
      <text x="46" y={refY + 4} fontSize="12" fontWeight="700" fill="#444">8万</text>
      <text x="64" y={refY + 4} fontSize="14" fill="#999">›</text>

      {/* 3/27 bar – variable (top) */}
      <rect x={b0x} y={cb - b0fH - b0vH} width={bW} height={b0vH} rx="5" fill="#a8d8e0" />
      {/* cover bottom radius seam */}
      <rect x={b0x} y={cb - b0fH - 5} width={bW} height={5} fill="#a8d8e0" />
      {/* 3/27 bar – fixed (bottom) */}
      <rect x={b0x} y={cb - b0fH} width={bW} height={b0fH} rx="3" fill="#e0b8cc" />

      {/* 4/27 bar – variable */}
      <rect x={b1x} y={b1Top} width={bW} height={b1vH} rx="5" fill="#3abdc8" />
      <rect x={b1x} y={cb - b1fH - 5} width={bW} height={5} fill="#3abdc8" />
      {/* 4/27 bar – fixed */}
      <rect x={b1x} y={cb - b1fH} width={bW} height={b1fH} rx="3" fill="#6e3070" />

      {/* 5/27 bar */}
      <rect x={b2x} y={cb - b2tH} width={bW} height={b2tH} rx="5" fill="#b8dde8" />

      {/* mascot on top of 4/27 bar */}
      <image href={charaImg} x={b1cx - 28} y={b1Top - 58} width="56" height="60" />

      {/* baseline */}
      <line x1="10" y1={cb} x2="330" y2={cb} stroke="#dde8ee" strokeWidth="1.5" />

      {/* bar labels */}
      <text x={b0cx} y="192" textAnchor="middle" fontSize="11.5" fill="#aaa">3/27</text>
      <circle cx={b1cx} cy="192" r="15" fill="#5ac8d4" />
      <text x={b1cx} y="197" textAnchor="middle" fontSize="10.5" fill="white" fontWeight="700">4/27</text>
      <text x={b2cx} y="192" textAnchor="middle" fontSize="11.5" fill="#aaa">5/27</text>
    </svg>
  )
}

/* ── Notice box mascot icon ── */
function NoticeMascotIcon() {
  return <img src={charaImg} width="30" height="30" style={{ objectFit: 'contain' }} alt="" />
}

/* ── Chevron down icon ── */
function ChevronDown() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M2 2L7 8L12 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Main screen ── */
export default function PaymentInquiry() {
  const [monthIdx, setMonthIdx] = useState(1)
  const [showNotice, setShowNotice] = useState(true)
  const months = ['3/27', '4/27', '5/27']

  return (
    <div className="pi-screen">
      {/* Header */}
      <header className="pi-header">
        <div style={{ width: 38 }} />
        <span className="pi-header-title">お支払照会</span>
        <button className="header-icon-btn icon-teal">
          <span className="help-text">?</span>
        </button>
      </header>

      {/* Month nav */}
      <div className="pi-month-nav">
        <button
          className="pi-nav-arrow"
          onClick={() => setMonthIdx(i => Math.max(0, i - 1))}
          disabled={monthIdx === 0}
        >◀</button>
        <span className="pi-month-label">{months[monthIdx]} お支払額</span>
        <button
          className="pi-nav-arrow"
          onClick={() => setMonthIdx(i => Math.min(2, i + 1))}
          disabled={monthIdx === 2}
        >▶</button>
      </div>

      {/* Scrollable content */}
      <div className="pi-scroll">

        {/* Main card */}
        <div className="pi-card">
          {/* Status row */}
          <div className="pi-status-row">
            <span className="pi-status-badge">確定</span>
            <span className="pi-status-date">{months[monthIdx]} のお支払額</span>
          </div>

          {/* Amount row */}
          <div className="pi-amount-row">
            <span className="pi-amount">¥108,701</span>
            <button className="pi-breakdown-btn">
              <div className="pi-breakdown-circle">
                <ChevronDown />
              </div>
              <span className="pi-breakdown-label">内訳</span>
            </button>
          </div>

          {/* Notice box */}
          {showNotice && (
            <div className="pi-notice">
              <div className="pi-notice-header">
                <NoticeMascotIcon />
                <span className="pi-notice-title">大切なおしらせ</span>
                <button className="pi-notice-close" onClick={() => setShowNotice(false)}>閉じる</button>
              </div>
              <p className="pi-notice-body">
                エポス家賃保証サービスまたは tsumiki証券をご利用の<br />
                お客さまは、月のお支払額が「確定」と表示された後<br />
                で、家賃・保証料等または tsumiki証券の金額がお支払<br />
                予定額に追加及び変更される場合があります。
              </p>
            </div>
          )}

          {/* Legend */}
          <div className="pi-legend">
            <div className="pi-legend-item">
              <div className="pi-legend-dot-row">
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" r="6" fill="#6e3070" />
                </svg>
                <span className="pi-legend-label">固定費</span>
              </div>
              <span className="pi-legend-value">¥17,995</span>
            </div>
            <div className="pi-legend-item">
              <div className="pi-legend-dot-row">
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" r="6" fill="#5ac8d4" />
                </svg>
                <span className="pi-legend-label">固定費以外</span>
              </div>
              <span className="pi-legend-value">¥90,706</span>
            </div>
          </div>

          {/* Bar chart */}
          <div className="pi-chart-wrap">
            <BarChart />
          </div>
        </div>

        {/* Pinch section */}
        <div className="pi-pinch">
          <div className="pi-pinch-header">
            <span className="pi-pinch-title">ピンチ回避</span>
            <button className="pi-pinch-link">
              <span>比較しながら選ぶ</span>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M1 1.5L6.5 6.5L1 11.5" stroke="#5ac8d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="pi-btn-group">
            <button className="pi-btn-group-item">リボ変更</button>
            <button className="pi-btn-group-item">分割変更</button>
            <button className="pi-btn-group-item pi-btn-bold">Net キャッシング</button>
          </div>
        </div>

        <div className="bottom-spacer" />
      </div>
    </div>
  )
}
