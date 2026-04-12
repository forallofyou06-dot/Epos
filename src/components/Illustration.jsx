import React from 'react'

/* ── SVG sub-parts ── */

function PendantLamp() {
  return (
    <g transform="translate(60, 0)">
      {/* cord */}
      <line x1="0" y1="0" x2="0" y2="68" stroke="#bbb" strokeWidth="1.5" />
      {/* shade */}
      <polygon points="-32,68 32,68 22,108 -22,108" fill="#e05050" />
      {/* bottom rim highlight */}
      <ellipse cx="0" cy="108" rx="22" ry="5" fill="#c84040" />
      {/* bulb glow */}
      <circle cx="0" cy="116" r="7" fill="#f5e88a" opacity="0.9" />
    </g>
  )
}

function NightWindow() {
  return (
    <g transform="translate(182, 8)">
      {/* window frame outer */}
      <rect x="0" y="0" width="120" height="110" rx="4" fill="#8b6f4e" />
      {/* window glass area */}
      <rect x="6" y="6" width="108" height="98" rx="2" fill="#4a7bb5" />
      {/* night sky gradient */}
      <rect x="6" y="6" width="108" height="98" rx="2" fill="url(#skyGrad)" />
      {/* center bar (horizontal) */}
      <rect x="6" y="54" width="108" height="6" fill="#8b6f4e" />
      {/* center bar (vertical) */}
      <rect x="58" y="6" width="6" height="98" fill="#8b6f4e" />
      {/* moon */}
      <circle cx="88" cy="38" r="18" fill="#f5d76e" />
      <circle cx="96" cy="32" r="14" fill="#4a7bb5" />
      {/* stars */}
      <polygon points="40,20 41.5,25 46,25 42.5,28 44,33 40,30 36,33 37.5,28 34,25 38.5,25" fill="#f5d76e" opacity="0.9" />
      <circle cx="72" cy="16" r="2" fill="#f5d76e" />
      <circle cx="60" cy="28" r="1.5" fill="#f5d76e" opacity="0.8" />
      <circle cx="96" cy="58" r="1.5" fill="#f5d76e" opacity="0.7" />
      {/* clouds */}
      <ellipse cx="28" cy="72" rx="16" ry="9" fill="white" opacity="0.85" />
      <ellipse cx="42" cy="68" rx="12" ry="8" fill="white" opacity="0.85" />
      <ellipse cx="20" cy="76" rx="10" ry="7" fill="white" opacity="0.8" />
      <ellipse cx="80" cy="82" rx="14" ry="8" fill="white" opacity="0.8" />
      <ellipse cx="92" cy="78" rx="10" ry="7" fill="white" opacity="0.8" />
    </g>
  )
}

function Mascot() {
  return (
    <g transform="translate(118, 82)">
      {/* red flat hat brim */}
      <ellipse cx="0" cy="-4" rx="32" ry="7" fill="#d94040" />
      {/* hat top */}
      <rect x="-20" y="-16" width="40" height="14" rx="3" fill="#d94040" />
      {/* body */}
      <ellipse cx="0" cy="34" rx="34" ry="36" fill="#e8968a" />
      {/* stitching lines on body */}
      <path d="M-28,18 Q0,10 28,18" stroke="#d07a72" strokeWidth="1.5" fill="none" />
      <path d="M-30,34 Q0,26 30,34" stroke="#d07a72" strokeWidth="1.5" fill="none" />
      <path d="M-28,50 Q0,42 28,50" stroke="#d07a72" strokeWidth="1.5" fill="none" />
      {/* face - eyes */}
      <circle cx="-10" cy="24" r="4" fill="#5a3030" />
      <circle cx="10" cy="24" r="4" fill="#5a3030" />
      <circle cx="-8" cy="22" r="1.5" fill="white" />
      <circle cx="12" cy="22" r="1.5" fill="white" />
      {/* face - smile */}
      <path d="M-8,34 Q0,42 8,34" stroke="#c06058" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* legs */}
      <rect x="-20" y="66" width="16" height="22" rx="8" fill="#e8968a" />
      <rect x="4" y="66" width="16" height="22" rx="8" fill="#e8968a" />
    </g>
  )
}

function Chair() {
  return (
    <g transform="translate(208, 108)">
      {/* seat */}
      <rect x="-22" y="0" width="44" height="10" rx="3" fill="#d4a82a" />
      {/* back rest */}
      <rect x="-18" y="-42" width="36" height="44" rx="4" fill="#d4a82a" />
      {/* back legs */}
      <rect x="-18" y="8" width="8" height="48" rx="3" fill="#b88c20" />
      <rect x="10" y="8" width="8" height="48" rx="3" fill="#b88c20" />
    </g>
  )
}

function Cabinet() {
  return (
    <g transform="translate(254, 68)">
      {/* cabinet body */}
      <rect x="0" y="28" width="90" height="80" rx="4" fill="#9b7a52" />
      {/* doors */}
      <rect x="4" y="32" width="39" height="70" rx="2" fill="#b8956a" />
      <rect x="47" y="32" width="39" height="70" rx="2" fill="#b8956a" />
      {/* door knobs */}
      <circle cx="43" cy="68" r="3" fill="#8b6f4e" />
      <circle cx="47" cy="68" r="3" fill="#8b6f4e" />
      {/* top surface */}
      <rect x="-2" y="22" width="94" height="8" rx="2" fill="#7a5e3a" />
      {/* arch window on top of cabinet (decorative) */}
      <rect x="18" y="2" width="54" height="22" rx="2" fill="#9b7a52" />
      <path d="M18,18 Q45,0 72,18" fill="#6a9ab8" stroke="#9b7a52" strokeWidth="1" />
      {/* Cat on top */}
      <g transform="translate(28, -28)">
        {/* body */}
        <ellipse cx="18" cy="20" rx="20" ry="14" fill="#222" />
        {/* head */}
        <circle cx="18" cy="6" r="13" fill="#222" />
        {/* ears */}
        <polygon points="8,0 4,-12 14,-4" fill="#222" />
        <polygon points="28,0 32,-12 22,-4" fill="#222" />
        {/* inner ears */}
        <polygon points="9,0 6,-8 13,-3" fill="#5a1a1a" />
        <polygon points="27,0 30,-8 23,-3" fill="#5a1a1a" />
        {/* eyes */}
        <ellipse cx="12" cy="6" rx="3" ry="4" fill="#4a9a4a" />
        <ellipse cx="24" cy="6" rx="3" ry="4" fill="#4a9a4a" />
        <ellipse cx="12" cy="7" rx="1.2" ry="3" fill="#111" />
        <ellipse cx="24" cy="7" rx="1.2" ry="3" fill="#111" />
        {/* tail */}
        <path d="M38,20 Q52,10 48,0 Q44,-8 38,0" stroke="#222" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </g>
  )
}

export default function Illustration() {
  return (
    <div className="illustration-wrap">
      <svg
        viewBox="0 0 360 200"
        width="100%"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a4a80" />
            <stop offset="100%" stopColor="#3a6aaa" />
          </linearGradient>
        </defs>

        <PendantLamp />
        <NightWindow />
        <Mascot />
        <Chair />
        <Cabinet />
      </svg>

      {/* scroll indicator nub */}
      <div className="illust-nub" />
    </div>
  )
}
