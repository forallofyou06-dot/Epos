import React, { useState, useRef } from 'react'
import charaImg from './chara.png'

function PendantLamp() {
  return (
    <g transform="translate(72, 0)">
      <line x1="0" y1="0" x2="0" y2="50" stroke="#c0b8b0" strokeWidth="1.5" />
      <polygon points="-16,50 16,50 38,96 -38,96" fill="#e05050" />
      <ellipse cx="0" cy="96" rx="38" ry="5.5" fill="#c03030" />
      <polygon points="-12,50 12,50 28,80 -28,80" fill="#c84040" opacity="0.45" />
      <circle cx="0" cy="101" r="7.5" fill="#f5e060" opacity="0.92" />
    </g>
  )
}

function NightWindow() {
  return (
    <g transform="translate(178, 4)">
      <rect x="0" y="0" width="132" height="115" rx="5" fill="#8b6f4e" />
      <rect x="6" y="6" width="120" height="103" rx="3" fill="#2a4478" />
      <rect x="6" y="6" width="120" height="103" rx="3" fill="url(#skyGrad)" />
      <rect x="6"  y="57" width="120" height="6" fill="#8b6f4e" />
      <rect x="65" y="6"  width="6"  height="103" fill="#8b6f4e" />
      <circle cx="97" cy="38" r="21" fill="#f5d76e" />
      <circle cx="107" cy="30" r="17" fill="#2a4478" />
      <polygon points="44,22 45.8,27.5 51.5,27.5 47,31 48.8,36.5 44,33 39.2,36.5 41,31 36.5,27.5 42.2,27.5" fill="#f5d76e" opacity="0.9" />
      <circle cx="78" cy="16" r="2.2" fill="#f5d76e" />
      <circle cx="62" cy="30" r="1.6" fill="#f5d76e" opacity="0.8" />
      <circle cx="100" cy="62" r="1.5" fill="#f5d76e" opacity="0.7" />
      <ellipse cx="28" cy="78" rx="17" ry="9"  fill="white" opacity="0.85" />
      <ellipse cx="44" cy="73" rx="14" ry="8"  fill="white" opacity="0.85" />
      <ellipse cx="19" cy="82" rx="11" ry="7"  fill="white" opacity="0.8" />
      <ellipse cx="84" cy="84" rx="15" ry="8"  fill="white" opacity="0.8" />
      <ellipse cx="98" cy="80" rx="11" ry="7"  fill="white" opacity="0.8" />
    </g>
  )
}

function DayWindow() {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <g transform="translate(178, 4)">
      <rect x="0" y="0" width="132" height="115" rx="5" fill="#8b6f4e" />
      <rect x="6" y="6" width="120" height="103" rx="3" fill="#87ceeb" />
      <rect x="6"  y="57" width="120" height="6" fill="#8b6f4e" />
      <rect x="65" y="6"  width="6"  height="103" fill="#8b6f4e" />
      {/* sun */}
      <circle cx="95" cy="28" r="13" fill="#f5d030" />
      {rays.map((deg, i) => {
        const r = deg * Math.PI / 180
        return <line key={i}
          x1={95 + Math.cos(r) * 16} y1={28 + Math.sin(r) * 16}
          x2={95 + Math.cos(r) * 22} y2={28 + Math.sin(r) * 22}
          stroke="#f5d030" strokeWidth="2" strokeLinecap="round" />
      })}
      {/* clouds */}
      <ellipse cx="30" cy="22" rx="15" ry="8"  fill="white" opacity="0.92" />
      <ellipse cx="43" cy="18" rx="12" ry="7"  fill="white" opacity="0.9" />
      <ellipse cx="22" cy="26" rx="10" ry="6"  fill="white" opacity="0.85" />
      {/* ground */}
      <rect x="6" y="94" width="120" height="15" rx="2" fill="#7ac86a" />
      {/* buildings */}
      <rect x="12" y="60" width="20" height="34" fill="#c8d8e8" />
      <rect x="16" y="64" width="5"  height="7"  fill="#87ceeb" opacity="0.7" />
      <rect x="24" y="64" width="5"  height="7"  fill="#87ceeb" opacity="0.7" />
      {/* shop */}
      <rect x="76" y="70" width="32" height="24" fill="#edd4a4" />
      <rect x="74" y="65" width="36" height="7"  fill="#e05050" opacity="0.75" />
      <rect x="82" y="76" width="8"  height="10" fill="#c8a870" />
    </g>
  )
}

function Chair() {
  return (
    <g transform="translate(205, 92)">
      <rect x="-25" y="0" width="50" height="12" rx="3" fill="#d4a82a" />
      <rect x="-21" y="-52" width="42" height="54" rx="5" fill="#d4a82a" />
      <rect x="-21" y="10" width="9" height="80" rx="3" fill="#b88c20" />
      <rect x="12"  y="10" width="9" height="80" rx="3" fill="#b88c20" />
    </g>
  )
}

function Cabinet() {
  return (
    <g transform="translate(252, 65)">
      <rect x="0" y="30" width="92" height="82" rx="4" fill="#9b7a52" />
      <rect x="4"  y="34" width="40" height="72" rx="2" fill="#b8956a" />
      <rect x="48" y="34" width="40" height="72" rx="2" fill="#b8956a" />
      <circle cx="44" cy="71" r="3.5" fill="#7a5e3a" />
      <circle cx="48" cy="71" r="3.5" fill="#7a5e3a" />
      <rect x="-2" y="24" width="96" height="8" rx="2" fill="#7a5e3a" />
      <rect x="18" y="2" width="56" height="24" rx="2" fill="#9b7a52" />
      <path d="M18,20 Q46,1 74,20" fill="#6a9ab8" stroke="#9b7a52" strokeWidth="1" />
      <g transform="translate(26, -30)">
        <ellipse cx="20" cy="22" rx="21" ry="14" fill="#222" />
        <circle cx="20" cy="6" r="14" fill="#222" />
        <polygon points="9,0 4,-14 15,-5" fill="#222" />
        <polygon points="31,0 36,-14 25,-5" fill="#222" />
        <polygon points="10,0 6,-9 14,-4" fill="#5a1a1a" />
        <polygon points="30,0 34,-9 26,-4" fill="#5a1a1a" />
        <ellipse cx="14" cy="6" rx="3.2" ry="4.2" fill="#4a9a4a" />
        <ellipse cx="26" cy="6" rx="3.2" ry="4.2" fill="#4a9a4a" />
        <ellipse cx="14" cy="7" rx="1.3" ry="3.2" fill="#111" />
        <ellipse cx="26" cy="7" rx="1.3" ry="3.2" fill="#111" />
        <path d="M42,22 Q56,10 52,0 Q48,-9 42,0" stroke="#222" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      </g>
    </g>
  )
}

function ShoppingBag() {
  return (
    <g transform="translate(218, 148)">
      <path d="M-7,-2 C-7,-14 7,-14 7,-2" stroke="#e87080" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="-13" y="-4" width="26" height="22" rx="3" fill="#ff9aaa" />
      <rect x="-13" y="-4" width="26" height="6" rx="2" fill="#e87080" />
      <text x="0" y="14" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">★</text>
    </g>
  )
}

function MotionLines() {
  return (
    <g opacity="0.3">
      <line x1="80" y1="135" x2="122" y2="135" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="74" y1="148" x2="122" y2="148" stroke="#aaa" strokeWidth="3"   strokeLinecap="round" />
      <line x1="82" y1="161" x2="122" y2="161" stroke="#aaa" strokeWidth="2"   strokeLinecap="round" />
      <line x1="88" y1="172" x2="122" y2="172" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  )
}

export default function Illustration() {
  const [shopping, setShopping] = useState(false)
  const tapCount = useRef(0)
  const tapTimer = useRef(null)

  const handleTap = () => {
    tapCount.current += 1
    clearTimeout(tapTimer.current)
    if (tapCount.current >= 3) {
      setShopping(v => !v)
      tapCount.current = 0
    } else {
      tapTimer.current = setTimeout(() => { tapCount.current = 0 }, 500)
    }
  }

  return (
    <div className="illustration-wrap" onClick={handleTap} style={{ cursor: 'pointer' }}>
      <svg
        viewBox="0 0 360 200"
        width="100%"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a70" />
            <stop offset="100%" stopColor="#2a5090" />
          </linearGradient>
        </defs>

        <PendantLamp />
        <g transform="translate(99, 7) scale(0.65)">
          {shopping ? <DayWindow /> : <NightWindow />}
          <Chair />
          <Cabinet />
        </g>

        {shopping && <MotionLines />}

        <g className={shopping ? 'mascot-walk' : ''}>
          <image
            href={charaImg}
            x="130" y="120"
            width="100" height="67"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {shopping && <ShoppingBag />}
      </svg>
    </div>
  )
}
