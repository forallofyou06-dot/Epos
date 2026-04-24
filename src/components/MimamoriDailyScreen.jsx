import React, { useState, useEffect } from 'react'

const TODAY = '2026年4月21日'

function WalkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="6" r="4" fill="#5ac8d4"/>
      <path d="M16 10 L13 20 L9 28" stroke="#5ac8d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M16 10 L19 20 L23 28" stroke="#5ac8d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M11 16 L21 16" stroke="#5ac8d4" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

function ShopIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M10 8 C10 5 13 3 16 3 C19 3 22 5 22 8" stroke="#6aba50" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <rect x="6" y="8" width="20" height="20" rx="4" fill="none" stroke="#6aba50" strokeWidth="2.2"/>
      <line x1="12" y1="14" x2="20" y2="14" stroke="#6aba50" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="19" x2="18" y2="19" stroke="#6aba50" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#9b70c8" strokeWidth="2.2"/>
      <line x1="16" y1="9" x2="16" y2="16" stroke="#9b70c8" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="16" y1="16" x2="21" y2="19" stroke="#9b70c8" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="2" fill="#9b70c8"/>
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="7" width="26" height="18" rx="4" stroke="#f0a030" strokeWidth="2.2"/>
      <rect x="3" y="11" width="26" height="5" fill="#f0a030" opacity="0.3"/>
      <rect x="6" y="20" width="8" height="2.5" rx="1.5" fill="#f0a030" opacity="0.6"/>
      <rect x="16" y="20" width="5" height="2.5" rx="1.5" fill="#f0a030" opacity="0.6"/>
    </svg>
  )
}

function SunStatusIcon({ color }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="9" fill={color}/>
      {rays.map((deg, i) => {
        const rad = deg * Math.PI / 180
        return (
          <line key={i}
            x1={22 + Math.cos(rad) * 13} y1={22 + Math.sin(rad) * 13}
            x2={22 + Math.cos(rad) * 17} y2={22 + Math.sin(rad) * 17}
            stroke={color} strokeWidth="2.2" strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}

function CloudRainStatusIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <ellipse cx="22" cy="17" rx="12" ry="7" fill="#90a4b8"/>
      <ellipse cx="14" cy="20" rx="8" ry="6" fill="#a8bac8"/>
      <ellipse cx="30" cy="19" rx="8" ry="6" fill="#a8bac8"/>
      <line x1="16" y1="28" x2="14" y2="35" stroke="#5a88b0" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="28" x2="20" y2="35" stroke="#5a88b0" strokeWidth="2" strokeLinecap="round"/>
      <line x1="28" y1="28" x2="26" y2="35" stroke="#5a88b0" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

const STATS = [
  {
    Icon: WalkIcon,  title: '外出',       color: '#5ac8d4',
    label: 'いつものペース', desc: '外出の様子に、大きな変化は見られません',
    alertLabel: '変化あり', alertDesc: '最近、外出が少ないようです。',
  },
  {
    Icon: ShopIcon,  title: '日用品の購入', color: '#6aba50',
    label: 'いつものペース', desc: '日用品の購入は、いつもと大きく変わらないペースです',
    alertLabel: '頻度が減少', alertDesc: '日用品の購入頻度が減っています。',
  },
  {
    Icon: ClockIcon, title: '生活時間',    color: '#9b70c8',
    label: 'いつもどおり',  desc: 'カードの利用時間帯に目立った変化は見られません',
    alertLabel: '時間帯に変化', alertDesc: '深夜や早朝の買い物が増えています。',
  },
  {
    Icon: CardIcon,  title: '利用金額',    color: '#f0a030',
    label: '変化なし',     desc: '利用金額は、これまでと大きく変わっていません',
    alertLabel: '高額取引', alertDesc: '高額なお買い物が発生しています。',
  },
]

const HISTORY = [
  { date: '4月20日', store: 'マルエツ中野店',    amount: '¥ 2,840' },
  { date: '4月19日', store: 'マルエツ中野店',    amount: '¥ 1,560' },
  { date: '4月16日', store: 'ファミリーマート',   amount: '¥   432' },
  { date: '4月14日', store: 'マルエツ中野店',    amount: '¥ 3,210' },
  { date: '4月11日', store: 'ダイソー',         amount: '¥   330' },
]

function StatCard({ Icon, title, color, label, desc, alertLabel, alertDesc, delay }) {
  const [visible, setVisible] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), delay) }, [delay])

  return (
    <div style={{
      background: isAlert ? '#f4f6fa' : 'white',
      borderRadius: 16,
      padding: '16px 12px 14px',
      boxShadow: isAlert
        ? '0 2px 12px rgba(90,136,176,0.14)'
        : '0 2px 12px rgba(0,0,0,0.07)',
      border: isAlert ? '1.5px solid #c8d8e8' : '1.5px solid transparent',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease, background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
    }}>
      <Icon />
      <div style={{ fontSize: 13, fontWeight: 700, color: '#333' }}>{title}</div>

      <button
        onClick={() => setIsAlert(v => !v)}
        title={isAlert ? '通常に戻す' : 'アラートを確認'}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 4, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          transform: isAlert ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        {isAlert ? <CloudRainStatusIcon /> : <SunStatusIcon color={color} />}
      </button>

      <div style={{
        fontSize: 10, fontWeight: 700, color: 'white',
        background: isAlert ? '#7a9ab8' : color,
        borderRadius: 20, padding: '2px 10px',
        transition: 'background 0.3s ease',
      }}>
        {isAlert ? alertLabel : label}
      </div>

      <div style={{
        fontSize: 11,
        color: isAlert ? '#7090a8' : '#888',
        textAlign: 'center', lineHeight: 1.5,
        transition: 'color 0.3s ease',
      }}>
        {isAlert ? alertDesc : desc}
      </div>
    </div>
  )
}

export default function MimamoriDailyScreen({ onBack }) {
  const [visible, setVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true)
      setTimeout(() => setHeroVisible(true), 150)
    })
  }, [])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      background: '#f4fbfa',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.3s ease',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 16px',
        background: 'white',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        flexShrink: 0,
      }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M9 1.5L2 9l7 7.5" stroke="#5ac8d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#333' }}>{TODAY}の様子</div>
        <div style={{ width: 34 }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Hero */}
        <div style={{
          background: 'linear-gradient(160deg, #e8fdf5 0%, #d0f0e8 100%)',
          padding: '24px 20px 20px',
          textAlign: 'center',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}>
          <div style={{ fontSize: 44, marginBottom: 8, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))' }}>☀️</div>
          <div style={{ fontSize: 19, fontWeight: 800, color: '#2a7a6a', marginBottom: 6 }}>
            いつもと変わらない、穏やかな一日です
          </div>
          <div style={{ fontSize: 12, color: '#5a9a8a', lineHeight: 1.6 }}>
            変わらない毎日が、一番の安心です
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%', background: '#5ac8d4',
              boxShadow: '0 0 0 6px rgba(90,200,212,0.2), 0 0 0 12px rgba(90,200,212,0.1)',
              animation: 'pulse-dot 2s ease infinite',
            }}/>
          </div>
        </div>

        {/* Hint */}
        <div style={{ padding: '10px 16px 0', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#aac', letterSpacing: '0.02em' }}>
            ☀️ アイコンをタップすると詳細を確認できます
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ padding: '12px 16px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} delay={200 + i * 80} />
          ))}
        </div>

        {/* Payment history */}
        <div style={{ margin: '16px 16px 16px' }}>
          <div style={{
            background: 'white', borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '16px 16px 12px',
              borderBottom: '1px solid #f0f0f0',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #5ac8d4, #3ab8c4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
              }}>🛒</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#333' }}>今月のお支払い履歴</div>
            </div>

            {HISTORY.map((h, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px',
                borderBottom: i < HISTORY.length - 1 ? '1px solid #f8f8f8' : 'none',
                animation: `slideUp 0.3s ease ${0.4 + i * 0.06}s both`,
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#5ac8d4', flexShrink: 0,
                }}/>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 12, color: '#aaa', marginRight: 6 }}>{h.date}</span>
                  <span style={{ fontSize: 13, color: '#444' }}>{h.store}でのお買い物がありました。</span>
                </div>
                <div style={{ fontSize: 12, color: '#888', fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>{h.amount}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 24 }} />
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 6px rgba(90,200,212,0.2), 0 0 0 12px rgba(90,200,212,0.1); }
          50% { box-shadow: 0 0 0 10px rgba(90,200,212,0.15), 0 0 0 20px rgba(90,200,212,0.05); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
