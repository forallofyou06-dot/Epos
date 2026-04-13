import React from 'react'
import eposImg from './eposimage.png'

/* ── Icons: content-only SVGs (no outer circle) ── */

function EposPayIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      {/* top-left finder */}
      <rect x="1"  y="1"  width="13" height="13" rx="2.5" stroke="#e05050" strokeWidth="2" fill="none" />
      <rect x="4"  y="4"  width="7"  height="7"  rx="1.5" fill="#e05050" />
      {/* top-right finder */}
      <rect x="24" y="1"  width="13" height="13" rx="2.5" stroke="#e05050" strokeWidth="2" fill="none" />
      <rect x="27" y="4"  width="7"  height="7"  rx="1.5" fill="#e05050" />
      {/* bottom-left finder */}
      <rect x="1"  y="24" width="13" height="13" rx="2.5" stroke="#e05050" strokeWidth="2" fill="none" />
      <rect x="4"  y="27" width="7"  height="7"  rx="1.5" fill="#e05050" />
      {/* data modules – bottom right */}
      <rect x="24" y="24" width="5" height="5" rx="1" fill="#555" />
      <rect x="31" y="24" width="5" height="5" rx="1" fill="#555" />
      <rect x="24" y="31" width="5" height="5" rx="1" fill="#555" />
      <rect x="31" y="31" width="5" height="5" rx="1" fill="#555" />
      <rect x="17" y="17" width="5" height="5" rx="1" fill="#555" />
    </svg>
  )
}

function ApplePayIcon() {
  return (
    <svg width="44" height="26" viewBox="0 0 44 26" fill="none">
      <rect x="0" y="0" width="44" height="26" rx="5" fill="#111" />
      {/* Apple logo */}
      <path d="M13,8 Q13,6.5 14.3,6 Q13.4,7.4 14,9 Q13.1,9.5 13,8Z" fill="white"/>
      <path d="M14.5,5.8 Q15.4,4.8 17,5.4 Q15.9,6.6 14.5,5.8Z" fill="white"/>
      <path d="M13.2,9.5 Q13,11.5 14,13 Q14.6,14 15.6,13 Q16.1,12.4 16.7,13 Q17.4,14 18,13 Q19,11 18.8,8.5 Q17.4,9.5 15.6,9.5 Q14.2,9.5 13.2,9.5Z" fill="white"/>
      {/* Pay */}
      <text x="29" y="17" textAnchor="middle" fontSize="11" fontWeight="600" fill="white" fontFamily="-apple-system,Arial,sans-serif">Pay</text>
    </svg>
  )
}

function SeikyshoIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      {/* corner brackets */}
      <path d="M5,12 L5,5 L12,5"   stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26,5 L33,5 L33,12" stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5,26 L5,33 L12,33" stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33,26 L33,33 L26,33" stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* barcode */}
      <line x1="10" y1="15" x2="10" y2="24" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="15" x2="13" y2="24" stroke="#555" strokeWidth="3"   strokeLinecap="round"/>
      <line x1="16" y1="15" x2="16" y2="24" stroke="#555" strokeWidth="1"   strokeLinecap="round"/>
      <line x1="19" y1="15" x2="19" y2="24" stroke="#555" strokeWidth="2"   strokeLinecap="round"/>
      <line x1="22" y1="15" x2="22" y2="24" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="25" y1="15" x2="25" y2="24" stroke="#555" strokeWidth="1"   strokeLinecap="round"/>
      <line x1="28" y1="15" x2="28" y2="24" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

function CashingIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* ¥ at top */}
      <text x="16" y="11" textAnchor="middle" fontSize="10" fontWeight="800" fill="#e09020">¥</text>
      {/* arrow shaft */}
      <line x1="16" y1="10" x2="16" y2="24" stroke="#e09020" strokeWidth="2.2" strokeLinecap="round"/>
      {/* arrowhead */}
      <path d="M10,19 L16,25 L22,19" stroke="#e09020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

function RepayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* arrow shaft */}
      <line x1="16" y1="8" x2="16" y2="22" stroke="#9060c0" strokeWidth="2.2" strokeLinecap="round"/>
      {/* arrowhead */}
      <path d="M10,13 L16,7 L22,13" stroke="#9060c0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* ¥ at bottom */}
      <text x="16" y="30" textAnchor="middle" fontSize="10" fontWeight="800" fill="#9060c0">¥</text>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 5L17 12L9 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const ACTIONS = [
  { label: 'EPOS PAY',       Icon: EposPayIcon,  bold: true, bg: '#edf8fa' },
  { label: 'Apple Pay',      Icon: ApplePayIcon,             bg: '#eeeeee' },
  { label: '請求書払い',     Icon: SeikyshoIcon,             bg: '#edf8fa' },
  { label: 'キャッシング',   Icon: CashingIcon,              bg: '#fef4e0' },
  { label: 'ご返済\nお支払い', Icon: RepayIcon,              bg: '#f2eefb' },
  { label: 'メニュー・設定', Icon: MenuIcon,                 bg: '#5ac8d4' },
]

export default function CardScreen() {
  return (
    <div className="card-screen">
      {/* Teal gradient area */}
      <div className="card-visual-area">
        <div className="card-img-wrap">
          <img src={eposImg} className="card-main-img" alt="EPOSカード" />
        </div>
        <div className="card-btn-row">
          <button className="card-number-btn">カード番号</button>
        </div>
      </div>

      {/* White action panel */}
      <div className="card-actions-panel">
        <div className="card-actions-grid">
          {ACTIONS.map(({ label, Icon, bold, bg }) => (
            <button key={label} className="card-action-btn">
              <div className="card-action-circle" style={{ background: bg }}>
                <Icon />
              </div>
              <span className={`card-action-label${bold ? ' card-action-label-bold' : ''}`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
