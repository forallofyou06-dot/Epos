import React, { useState, useEffect } from 'react'

function EposLogoIcon() {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: 'linear-gradient(135deg, #5ac8d4, #3ab8c4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <span style={{ color: '#fff', fontWeight: 800, fontSize: 18, fontFamily: 'sans-serif' }}>E</span>
    </div>
  )
}

export function IosBanner({ onDismiss }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true))
    const dismiss = setTimeout(() => {
      setShow(false)
      setTimeout(onDismiss, 320)
    }, 3000)
    return () => { cancelAnimationFrame(t); clearTimeout(dismiss) }
  }, [onDismiss])

  return (
    <div style={{
      position: 'absolute', top: 12, left: 12, right: 12, zIndex: 200,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(16px)',
      borderRadius: 16, padding: '12px 14px',
      display: 'flex', alignItems: 'center', gap: 12,
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      transform: show ? 'translateY(0)' : 'translateY(-110px)',
      transition: 'transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)',
    }}>
      <EposLogoIcon />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#222', lineHeight: 1.3 }}>EPOS</div>
        <div style={{ fontSize: 13, color: '#444', marginTop: 2, lineHeight: 1.4 }}>みまもりレポートがとどきました</div>
      </div>
    </div>
  )
}

function EnvelopeBody() {
  return (
    <svg width="240" height="165" viewBox="0 0 240 165" fill="none">
      <rect x="2" y="35" width="236" height="128" rx="10" fill="#5ac8d4"/>
      <path d="M2 163 L120 105 L238 163" fill="#42c0cc"/>
      <path d="M2 35 L2 163 L120 105Z" fill="rgba(0,0,0,0.06)"/>
      <path d="M238 35 L238 163 L120 105Z" fill="rgba(0,0,0,0.06)"/>
      <circle cx="120" cy="128" r="8" fill="rgba(255,255,255,0.18)"/>
      <circle cx="120" cy="128" r="4.5" fill="rgba(255,255,255,0.28)"/>
    </svg>
  )
}

export function NotifPopup({ onDetail, onDismiss }) {
  const [phase, setPhase] = useState(0)
  // 0=hidden 1=envelope-in 2=flap-open 3=letter-rise 4=content-show

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const envIn    = phase >= 1
  const flapOpen = phase >= 2
  const letterUp = phase >= 3
  const content  = phase >= 4

  return (
    <div
      onClick={content ? onDismiss : undefined}
      style={{
        position: 'absolute', inset: 0, zIndex: 150,
        background: envIn ? 'rgba(0,0,0,0.52)' : 'rgba(0,0,0,0)',
        transition: 'background 0.5s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: 260, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* ── Letter card (rises from envelope) ── */}
        <div style={{
          width: 230, background: 'white', borderRadius: 20,
          padding: '30px 22px 22px', textAlign: 'center',
          boxShadow: '0 16px 48px rgba(0,0,0,0.22)',
          position: 'relative', zIndex: 3,
          transform: letterUp ? 'translateY(0) scale(1)' : 'translateY(95px) scale(0.92)',
          opacity: letterUp ? 1 : 0,
          transition: 'transform 0.8s cubic-bezier(0.34,1.56,0.64,1), opacity 0.45s ease',
        }}>
          {/* Faint ruled lines on "paper" */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 20, overflow: 'hidden', pointerEvents: 'none' }}>
            {[68, 90, 112].map(y => (
              <div key={y} style={{ position: 'absolute', top: y, left: 22, right: 22, height: 1, background: '#eaf8fa' }} />
            ))}
          </div>

          <div style={{ fontSize: 38, marginBottom: 12, filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.12))' }}>💌</div>

          <div style={{
            fontSize: 17, fontWeight: 700, color: '#222', lineHeight: 1.55, marginBottom: 10,
            opacity: content ? 1 : 0,
            transform: content ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s 0.1s, transform 0.4s 0.1s',
          }}>
            お父さんと久しぶりに<br />話してみませんか？
          </div>

          <div style={{
            fontSize: 13, color: '#777', lineHeight: 1.8, marginBottom: 24,
            opacity: content ? 1 : 0,
            transition: 'opacity 0.4s 0.2s',
          }}>
            特別な用事がなくても、<br />声を聞かせるだけでお互い嬉しいものです。
          </div>

          <button onClick={onDetail} style={{
            width: '100%', padding: '14px 0',
            background: 'linear-gradient(135deg, #5ac8d4, #3ab8c4)',
            color: 'white', border: 'none', borderRadius: 13,
            fontSize: 15, fontWeight: 700, cursor: 'pointer', marginBottom: 8,
            boxShadow: '0 4px 14px rgba(90,200,212,0.45)',
            opacity: content ? 1 : 0,
            transform: content ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.35s 0.3s, transform 0.35s 0.3s',
          }}>
            詳しくみる
          </button>

          <button onClick={onDismiss} style={{
            width: '100%', padding: '10px 0',
            background: 'transparent', color: '#aaa',
            border: 'none', fontSize: 14, cursor: 'pointer',
            opacity: content ? 1 : 0,
            transition: 'opacity 0.35s 0.4s',
          }}>
            あとで
          </button>
        </div>

        {/* ── Envelope ── */}
        <div style={{
          position: 'absolute',
          bottom: -55,
          zIndex: 1,
          transform: envIn
            ? letterUp ? 'scale(1) translateY(20px)' : 'scale(1) translateY(0)'
            : 'scale(0.3) translateY(100px)',
          opacity: envIn ? (letterUp ? 0 : 1) : 0,
          transition: letterUp
            ? 'opacity 0.5s ease 0.1s, transform 0.5s ease'
            : envIn
              ? 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s'
              : 'none',
        }}>
          <div style={{ position: 'relative', width: 240, height: 165 }}>
            {/* Envelope body */}
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
              <EnvelopeBody />
            </div>

            {/* Flap with 3D perspective rotation */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: 240, height: 120, perspective: '600px' }}>
              <div style={{
                width: 240, height: 120,
                transformOrigin: '50% 29%',
                transformStyle: 'preserve-3d',
                transform: flapOpen ? 'rotateX(-188deg)' : 'rotateX(0deg)',
                transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
              }}>
                {/* Flap front */}
                <svg width="240" height="120" viewBox="0 0 240 120" fill="none"
                  style={{ position: 'absolute', top: 0, left: 0, backfaceVisibility: 'hidden' }}>
                  <path d="M2 35 L120 118 L238 35Z" fill="#62d0dc"/>
                  <circle cx="120" cy="74" r="20" fill="rgba(255,255,255,0.18)"/>
                  <text x="120" y="80" textAnchor="middle" fontSize="15" fontWeight="900" fill="white" fontFamily="sans-serif">E</text>
                </svg>
                {/* Flap inside (cream) */}
                <svg width="240" height="120" viewBox="0 0 240 120" fill="none"
                  style={{ position: 'absolute', top: 0, left: 0, transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}>
                  <path d="M2 35 L120 118 L238 35Z" fill="#edf9fb"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CHART_DATA = [
  { label: '4週前', value: 0.85 },
  { label: '3週前', value: 0.90 },
  { label: '2週前', value: 0.80 },
  { label: '先週',  value: 0.40 },
  { label: '今週',  value: 0.25 },
]

export function NotifDetail({ onClose }) {
  const [show, setShow] = useState(false)
  useEffect(() => { const t = requestAnimationFrame(() => setShow(true)); return () => cancelAnimationFrame(t) }, [])

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: show ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0)',
      display: 'flex', alignItems: 'flex-end',
      zIndex: 150, transition: 'background 0.3s',
    }}>
      <div style={{
        background: '#fff', borderRadius: '22px 22px 0 0',
        width: '100%', padding: '14px 20px 28px',
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.38s cubic-bezier(0.32,0.72,0,1)',
        maxHeight: '85vh', overflowY: 'auto',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: '#ddd' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>最近のようす</div>
          <button onClick={() => { setShow(false); setTimeout(onClose, 320) }}
            style={{ background: 'none', border: 'none', fontSize: 18, color: '#999', cursor: 'pointer', padding: 4 }}>✕</button>
        </div>
        <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 20 }}>
          心配しすぎないでください。少しだけ気にかけてあげましょう。
        </div>
        <div style={{ background: '#f8fdfd', borderRadius: 14, padding: '16px 14px 12px', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: 92, gap: 6 }}>
            {CHART_DATA.map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                <div style={{
                  width: '100%', height: Math.round(d.value * 72),
                  background: d.value >= 0.5 ? '#5ac8d4' : '#ffb56b',
                  borderRadius: '5px 5px 3px 3px', transition: 'height 0.6s ease',
                }} />
                <div style={{ fontSize: 10, color: '#888', whiteSpace: 'nowrap' }}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 12, color: '#aaa', marginBottom: 20, paddingLeft: 4 }}>
          ここ2週間、いつもより少し静かな感じがします
        </div>
        <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
          特別なことがなくても、声を聞かせるだけでお互い嬉しいものです。折を見て、連絡してみましょう。
        </div>
        <button style={{
          width: '100%', padding: '14px 0', background: '#5ac8d4', color: '#fff',
          border: 'none', borderRadius: 13, fontSize: 16, fontWeight: 700, cursor: 'pointer', marginBottom: 10,
        }}>📞 連絡してみる</button>
        <button onClick={() => { setShow(false); setTimeout(onClose, 320) }}
          style={{ width: '100%', padding: '10px 0', background: 'transparent', color: '#999', border: 'none', fontSize: 14, cursor: 'pointer' }}>
          大丈夫そう
        </button>
      </div>
    </div>
  )
}
