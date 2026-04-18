import React, { useState, useEffect } from 'react'

function EposLogoIcon() {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: 'linear-gradient(135deg, #5ac8d4 0%, #3ab8c4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
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
    return () => {
      cancelAnimationFrame(t)
      clearTimeout(dismiss)
    }
  }, [onDismiss])

  return (
    <div
      className={`ios-banner ${show ? 'ios-banner-show' : ''}`}
      style={{
        position: 'absolute',
        top: 12,
        left: 12,
        right: 12,
        zIndex: 200,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(16px)',
        borderRadius: 16,
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        transform: show ? 'translateY(0)' : 'translateY(-110px)',
        transition: 'transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <EposLogoIcon />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#222', lineHeight: 1.3 }}>EPOS</div>
        <div style={{ fontSize: 13, color: '#444', marginTop: 2, lineHeight: 1.4 }}>
          みまもりレポートがとどきました
        </div>
      </div>
    </div>
  )
}

export function NotifPopup({ onDetail, onDismiss }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <div
      className={`notif-overlay ${show ? 'notif-overlay-show' : ''}`}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 150,
        opacity: show ? 1 : 0,
        transition: 'opacity 0.25s ease',
        padding: '0 24px',
      }}
    >
      <div
        className="notif-popup"
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: '28px 24px 20px',
          width: '100%',
          maxWidth: 340,
          textAlign: 'center',
          transform: show ? 'scale(1)' : 'scale(0.8)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div style={{ fontSize: 36, marginBottom: 14 }}>💬</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#222', lineHeight: 1.5, marginBottom: 10 }}>
          お父さんと久しぶりに話してみませんか？
        </div>
        <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>
          特別な用事がなくても、声を聞かせるだけでお互い嬉しいものです。
        </div>
        <button
          onClick={onDetail}
          style={{
            width: '100%',
            padding: '13px 0',
            background: '#5ac8d4',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
            marginBottom: 8,
          }}
        >
          詳しくみる
        </button>
        <button
          onClick={onDismiss}
          style={{
            width: '100%',
            padding: '10px 0',
            background: 'transparent',
            color: '#888',
            border: 'none',
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          あとで
        </button>
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

  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const BAR_MAX_HEIGHT = 72

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: show ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0)',
        display: 'flex',
        alignItems: 'flex-end',
        zIndex: 150,
        transition: 'background 0.3s ease',
      }}
    >
      <div
        className="notif-detail-sheet"
        style={{
          background: '#fff',
          borderRadius: '22px 22px 0 0',
          width: '100%',
          padding: '14px 20px 28px',
          transform: show ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: '#ddd' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>最近のようす</div>
          <button
            onClick={() => { setShow(false); setTimeout(onClose, 320) }}
            style={{ background: 'none', border: 'none', fontSize: 18, color: '#999', cursor: 'pointer', padding: 4 }}
          >
            ✕
          </button>
        </div>

        <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 20 }}>
          心配しすぎないでください。少しだけ気にかけてあげましょう。
        </div>

        <div
          style={{
            background: '#f8fdfd',
            borderRadius: 14,
            padding: '16px 14px 12px',
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
              height: BAR_MAX_HEIGHT + 20,
              gap: 6,
            }}
          >
            {CHART_DATA.map((d, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: 4,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: Math.round(d.value * BAR_MAX_HEIGHT),
                    background: d.value >= 0.5 ? '#5ac8d4' : '#ffb56b',
                    borderRadius: '5px 5px 3px 3px',
                    transition: 'height 0.6s ease',
                  }}
                />
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

        <button
          style={{
            width: '100%',
            padding: '14px 0',
            background: '#5ac8d4',
            color: '#fff',
            border: 'none',
            borderRadius: 13,
            fontSize: 16,
            fontWeight: 700,
            cursor: 'pointer',
            marginBottom: 10,
          }}
        >
          📞 連絡してみる
        </button>
        <button
          onClick={() => { setShow(false); setTimeout(onClose, 320) }}
          style={{
            width: '100%',
            padding: '10px 0',
            background: 'transparent',
            color: '#999',
            border: 'none',
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          大丈夫そう
        </button>
      </div>
    </div>
  )
}
