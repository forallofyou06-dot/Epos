import React from 'react'

/* ── SVG sub-parts ── */

function PendantLamp() {
  return (
    <g transform="translate(72, 0)">
      {/* cord */}
      <line x1="0" y1="0" x2="0" y2="50" stroke="#c0b8b0" strokeWidth="1.5" />
      {/* shade – narrow at top, flared at bottom */}
      <polygon points="-16,50 16,50 38,96 -38,96" fill="#e05050" />
      {/* shade rim */}
      <ellipse cx="0" cy="96" rx="38" ry="5.5" fill="#c03030" />
      {/* inner shadow */}
      <polygon points="-12,50 12,50 28,80 -28,80" fill="#c84040" opacity="0.45" />
      {/* bulb */}
      <circle cx="0" cy="101" r="7.5" fill="#f5e060" opacity="0.92" />
    </g>
  )
}

function NightWindow() {
  return (
    <g transform="translate(178, 4)">
      {/* window frame */}
      <rect x="0" y="0" width="132" height="115" rx="5" fill="#8b6f4e" />
      {/* glass */}
      <rect x="6" y="6" width="120" height="103" rx="3" fill="#2a4478" />
      <rect x="6" y="6" width="120" height="103" rx="3" fill="url(#skyGrad)" />
      {/* center bars */}
      <rect x="6"  y="57" width="120" height="6" fill="#8b6f4e" />
      <rect x="65" y="6"  width="6"  height="103" fill="#8b6f4e" />
      {/* moon */}
      <circle cx="97" cy="38" r="21" fill="#f5d76e" />
      <circle cx="107" cy="30" r="17" fill="#2a4478" />
      {/* stars */}
      <polygon points="44,22 45.8,27.5 51.5,27.5 47,31 48.8,36.5 44,33 39.2,36.5 41,31 36.5,27.5 42.2,27.5"
        fill="#f5d76e" opacity="0.9" />
      <circle cx="78" cy="16" r="2.2" fill="#f5d76e" />
      <circle cx="62" cy="30" r="1.6" fill="#f5d76e" opacity="0.8" />
      <circle cx="100" cy="62" r="1.5" fill="#f5d76e" opacity="0.7" />
      {/* clouds */}
      <ellipse cx="28" cy="78" rx="17" ry="9"  fill="white" opacity="0.85" />
      <ellipse cx="44" cy="73" rx="14" ry="8"  fill="white" opacity="0.85" />
      <ellipse cx="19" cy="82" rx="11" ry="7"  fill="white" opacity="0.8" />
      <ellipse cx="84" cy="84" rx="15" ry="8"  fill="white" opacity="0.8" />
      <ellipse cx="98" cy="80" rx="11" ry="7"  fill="white" opacity="0.8" />
    </g>
  )
}

/* ── EPOS wallet mascot (SVG) ── */
function Mascot() {
  const cx = 145, cy = 128
  return (
    <g>
      {/* Red card sticking out top at angle */}
      <rect
        x={cx + 4} y={cy - 58} width="22" height="36" rx="3"
        fill="#e03535"
        transform={`rotate(-12, ${cx + 15}, ${cy - 30})`}
      />
      {/* Wallet body */}
      <rect x={cx - 32} y={cy - 30} width="64" height="60" rx="10" fill="#f07060" />
      {/* Dashed stitching */}
      <rect x={cx - 28} y={cy - 26} width="56" height="52" rx="8"
        fill="none" stroke="white" strokeWidth="1.8" strokeDasharray="4.5,3" />
      {/* Eyes */}
      <circle cx={cx - 11} cy={cy - 6} r="4.2" fill="#333" />
      <circle cx={cx + 11} cy={cy - 6} r="4.2" fill="#333" />
      {/* Smile */}
      <path d={`M${cx - 11},${cy + 7} Q${cx},${cy + 17} ${cx + 11},${cy + 7}`}
        stroke="#333" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {/* Left arm */}
      <ellipse cx={cx - 41} cy={cy - 6} rx="11" ry="8" fill="#f07060" />
      {/* Right arm */}
      <ellipse cx={cx + 41} cy={cy - 6} rx="11" ry="8" fill="#f07060" />
      {/* Left leg */}
      <rect x={cx - 24} y={cy + 28} width="15" height="20" rx="7.5" fill="#f07060" />
      {/* Right leg */}
      <rect x={cx + 9}  y={cy + 28} width="15" height="20" rx="7.5" fill="#f07060" />
    </g>
  )
}

function Chair() {
  return (
    <g transform="translate(205, 92)">
      {/* seat */}
      <rect x="-25" y="0" width="50" height="12" rx="3" fill="#d4a82a" />
      {/* back rest */}
      <rect x="-21" y="-52" width="42" height="54" rx="5" fill="#d4a82a" />
      {/* long legs to reach illustration bottom */}
      <rect x="-21" y="10" width="9" height="80" rx="3" fill="#b88c20" />
      <rect x="12"  y="10" width="9" height="80" rx="3" fill="#b88c20" />
    </g>
  )
}

function Cabinet() {
  return (
    <g transform="translate(252, 65)">
      {/* cabinet body */}
      <rect x="0" y="30" width="92" height="82" rx="4" fill="#9b7a52" />
      {/* doors */}
      <rect x="4"  y="34" width="40" height="72" rx="2" fill="#b8956a" />
      <rect x="48" y="34" width="40" height="72" rx="2" fill="#b8956a" />
      {/* door knobs */}
      <circle cx="44" cy="71" r="3.5" fill="#7a5e3a" />
      <circle cx="48" cy="71" r="3.5" fill="#7a5e3a" />
      {/* top surface */}
      <rect x="-2" y="24" width="96" height="8" rx="2" fill="#7a5e3a" />
      {/* arch window decoration */}
      <rect x="18" y="2" width="56" height="24" rx="2" fill="#9b7a52" />
      <path d="M18,20 Q46,1 74,20" fill="#6a9ab8" stroke="#9b7a52" strokeWidth="1" />
      {/* Cat on top */}
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
        <path d="M42,22 Q56,10 52,0 Q48,-9 42,0"
          stroke="#222" strokeWidth="5.5" fill="none" strokeLinecap="round" />
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
            <stop offset="0%" stopColor="#1e3a70" />
            <stop offset="100%" stopColor="#2a5090" />
          </linearGradient>
        </defs>

        <PendantLamp />
        <NightWindow />
        <Chair />
        <Cabinet />
        <Mascot />
      </svg>

      <div className="illust-nub" />
    </div>
  )
}
