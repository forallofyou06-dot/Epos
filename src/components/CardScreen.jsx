import React from 'react'
import eposImg from './eposimage.png'

/* ── Action icons (each 56×56 self-contained SVG) ── */

function EposPayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#edf8fa" />
      {/* top-left finder */}
      <rect x="9"  y="9"  width="13" height="13" rx="2.5" stroke="#e05050" strokeWidth="2" fill="none" />
      <rect x="12" y="12" width="7"  height="7"  rx="1.5" fill="#e05050" />
      {/* top-right finder */}
      <rect x="34" y="9"  width="13" height="13" rx="2.5" stroke="#e05050" strokeWidth="2" fill="none" />
      <rect x="37" y="12" width="7"  height="7"  rx="1.5" fill="#e05050" />
      {/* bottom-left finder */}
      <rect x="9"  y="34" width="13" height="13" rx="2.5" stroke="#e05050" strokeWidth="2" fill="none" />
      <rect x="12" y="37" width="7"  height="7"  rx="1.5" fill="#e05050" />
      {/* data modules – bottom right quadrant */}
      <rect x="34" y="34" width="5" height="5" rx="1" fill="#444" />
      <rect x="41" y="34" width="5" height="5" rx="1" fill="#444" />
      <rect x="34" y="41" width="5" height="5" rx="1" fill="#444" />
      <rect x="41" y="41" width="5" height="5" rx="1" fill="#444" />
      <rect x="47" y="34" width="3" height="3" rx="0.5" fill="#444" />
      <rect x="47" y="41" width="3" height="7" rx="0.5" fill="#444" />
      <rect x="34" y="47" width="7" height="3" rx="0.5" fill="#444" />
    </svg>
  )
}

function ApplePayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#f2f2f2" />
      {/* Apple Pay black button */}
      <rect x="9" y="19" width="38" height="18" rx="4" fill="#000" />
      {/* Apple logo (simplified) */}
      <path d="M19,25 Q19,23.2 20.6,22.6 Q19.6,24.2 20.2,25.8 Q19.1,26.3 19,25Z" fill="white" />
      <path d="M20.8,22.2 Q22,21.1 23.4,21.7 Q22.3,23 20.8,22.2Z" fill="white" />
      <path d="M19.2,26.3 Q19,28.8 20.2,30.5 Q20.8,31.5 21.8,30.5 Q22.4,29.9 23,30.5 Q23.8,31.5 24.4,30.5 Q25.6,28.5 25.2,25.8 Q23.8,26.8 22,26.8 Q20.6,26.8 19.2,26.3Z" fill="white" />
      {/* Pay text */}
      <text x="39" y="30.5" textAnchor="middle" fontSize="10" fontWeight="600" fill="white" fontFamily="-apple-system, Arial, sans-serif">Pay</text>
    </svg>
  )
}

function SeikyshoIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#edf8fa" />
      {/* corner brackets */}
      <path d="M13,19 L13,12 L20,12" stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36,12 L43,12 L43,19" stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13,37 L13,44 L20,44" stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43,37 L43,44 L36,44" stroke="#5ac8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* barcode lines */}
      <line x1="17" y1="22" x2="17" y2="34" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="22" x2="20" y2="34" stroke="#444" strokeWidth="3"   strokeLinecap="round" />
      <line x1="23" y1="22" x2="23" y2="34" stroke="#444" strokeWidth="1"   strokeLinecap="round" />
      <line x1="26" y1="22" x2="26" y2="34" stroke="#444" strokeWidth="2"   strokeLinecap="round" />
      <line x1="29" y1="22" x2="29" y2="34" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="22" x2="32" y2="34" stroke="#444" strokeWidth="1"   strokeLinecap="round" />
      <line x1="35" y1="22" x2="35" y2="34" stroke="#444" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="22" x2="38" y2="34" stroke="#444" strokeWidth="1"   strokeLinecap="round" />
    </svg>
  )
}

function CashingIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#fff6e0" />
      <circle cx="28" cy="28" r="18" fill="#fff3d6" stroke="#f5a830" strokeWidth="1.5" />
      {/* down arrow */}
      <line x1="28" y1="17" x2="28" y2="30" stroke="#f5a830" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22,25 L28,31 L34,25" stroke="#f5a830" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* ¥ symbol at top */}
      <text x="28" y="20" textAnchor="middle" fontSize="9" fontWeight="800" fill="#f5a830">¥</text>
    </svg>
  )
}

function RepayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#f3f0fb" />
      <circle cx="28" cy="28" r="18" fill="#f0edf8" stroke="#9b70c8" strokeWidth="1.5" />
      {/* up arrow */}
      <line x1="28" y1="39" x2="28" y2="25" stroke="#9b70c8" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22,30 L28,24 L34,30" stroke="#9b70c8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* ¥ symbol at bottom */}
      <text x="28" y="39" textAnchor="middle" fontSize="9" fontWeight="800" fill="#9b70c8">¥</text>
    </svg>
  )
}

function MenuSettingsIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#5ac8d4" />
      <path d="M23 18L33 28L23 38" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const ACTIONS = [
  { label: 'EPOS PAY',     Icon: EposPayIcon,       bold: true },
  { label: 'Apple Pay',    Icon: ApplePayIcon },
  { label: '請求書払い',   Icon: SeikyshoIcon },
  { label: 'キャッシング', Icon: CashingIcon },
  { label: 'ご返済\nお支払い', Icon: RepayIcon },
  { label: 'メニュー・設定', Icon: MenuSettingsIcon },
]

export default function CardScreen() {
  return (
    <div className="card-screen">
      {/* Teal gradient area with card image */}
      <div className="card-visual-area">
        <img src={eposImg} className="card-main-img" alt="EPOSカード" />
        <button className="card-number-btn">カード番号</button>
      </div>

      {/* White action panel */}
      <div className="card-actions-panel">
        <div className="card-actions-grid">
          {ACTIONS.map(({ label, Icon, bold }) => (
            <button key={label} className="card-action-btn">
              <Icon />
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
