import React, { useState, useEffect } from 'react'

const MONTHS = [
  { year: 2026, month: 4, mood: '☀️', label: 'いつもの春らしい毎日', events: [
    { date: '4月3日', icon: '👟', text: 'いつものコースをお散歩されました' },
    { date: '4月7日', icon: '🛒', text: 'スーパーでお買い物されました' },
    { date: '4月11日', icon: '👟', text: '午前中にお出かけされました' },
    { date: '4月16日', icon: '🛒', text: 'お近くのお店へ立ち寄られました' },
    { date: '4月20日', icon: '☀️', text: '晴れの日にお散歩されました' },
  ]},
  { year: 2026, month: 3, mood: '🌸', label: '穏やかな日々が続きました', events: [
    { date: '3月4日', icon: '🛒', text: 'お買い物に行かれました' },
    { date: '3月9日', icon: '👟', text: 'いつもの時間にお出かけ' },
    { date: '3月15日', icon: '🛒', text: 'スーパーでお買い物' },
    { date: '3月21日', icon: '👟', text: '午後にお散歩されました' },
    { date: '3月26日', icon: '🛒', text: 'お近くのお店へ' },
  ]},
  { year: 2026, month: 2, mood: '⛄', label: 'いつものペースで過ごされました', events: [
    { date: '2月2日', icon: '🛒', text: 'お買い物に行かれました' },
    { date: '2月8日', icon: '👟', text: 'お散歩されました' },
    { date: '2月14日', icon: '🛒', text: 'スーパーへ' },
    { date: '2月20日', icon: '👟', text: 'いつもの時間にお出かけ' },
  ]},
  { year: 2026, month: 1, mood: '🎍', label: '新年も元気に過ごされました', events: [
    { date: '1月5日', icon: '👟', text: '初散歩に出かけられました' },
    { date: '1月10日', icon: '🛒', text: 'お買い物へ' },
    { date: '1月17日', icon: '👟', text: '午前中にお出かけ' },
    { date: '1月23日', icon: '🛒', text: 'スーパーで買い物' },
  ]},
]

function MonthDetail({ data, onBack }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const walkCount = data.events.filter(e => e.icon === '👟').length
  const shopCount = data.events.filter(e => e.icon === '🛒').length

  return (
    <div
      className="mimamori-screen"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(40px)',
        transition: 'opacity 0.32s ease, transform 0.32s ease',
      }}
    >
      <header className="mimamori-screen__header">
        <button className="mimamori-screen__back-btn" onClick={onBack} aria-label="戻る">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M9 1.5L2 9l7 7.5" stroke="#5ac8d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="mimamori-screen__title">{data.year}/{data.month}月のようす</span>
        <div style={{ width: 32 }} />
      </header>

      <div className="mimamori-screen__scroll">
        <div className="mim-detail-summary">
          <div className="mim-detail-summary__mood">{data.mood}</div>
          <div className="mim-detail-summary__label">{data.label}</div>
          <div className="mim-detail-summary__note">いつもと変わらない毎日が、一番の安心です</div>
        </div>

        <div className="mim-stat-row">
          <div className="mim-stat-card">
            <div className="mim-stat-card__icon">👟</div>
            <div className="mim-stat-card__name">お出かけ</div>
            <div className="mim-stat-bar-wrap">
              <div className="mim-stat-bar mim-stat-bar--teal" style={{ width: '70%' }} />
            </div>
            <div className="mim-stat-card__count">{walkCount}回</div>
          </div>
          <div className="mim-stat-card">
            <div className="mim-stat-card__icon">🛒</div>
            <div className="mim-stat-card__name">お買い物</div>
            <div className="mim-stat-bar-wrap">
              <div className="mim-stat-bar mim-stat-bar--orange" style={{ width: '55%' }} />
            </div>
            <div className="mim-stat-card__count">{shopCount}回</div>
          </div>
        </div>

        <div className="mim-timeline">
          <div className="mim-timeline__line" />
          {data.events.map((ev, i) => (
            <div key={i} className="mim-timeline-item">
              <div className="mim-timeline-item__dot" />
              <div className="mim-timeline-item__date">{ev.date}</div>
              <div className="mim-timeline-item__body">
                <span className="mim-timeline-item__icon">{ev.icon}</span>
                <span className="mim-timeline-item__text">{ev.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mim-detail-footer">見守っているよ、という気持ちが伝わりますように 💚</div>
        <div className="bottom-spacer" />
      </div>
    </div>
  )
}

export default function MimamoriScreen({ onBack }) {
  const [selected, setSelected] = useState(null)
  const [visible, setVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      setVisible(true)
      setTimeout(() => setCardsVisible(true), 80)
    })
    return () => cancelAnimationFrame(t)
  }, [])

  if (selected !== null) {
    return <MonthDetail data={MONTHS[selected]} onBack={() => setSelected(null)} />
  }

  return (
    <div
      className="mimamori-screen"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-24px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <header className="mimamori-screen__header">
        <button className="mimamori-screen__back-btn" onClick={onBack} aria-label="戻る">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M9 1.5L2 9l7 7.5" stroke="#5ac8d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="mimamori-screen__title">見守りレポート</span>
        <div style={{ width: 32 }} />
      </header>

      <div className="mimamori-screen__scroll">
        <div
          className="mim-hero"
          style={{ background: 'linear-gradient(160deg, #e8fdf8 0%, #d4f5ec 100%)' }}
        >
          <div className="mim-hero__icon">🏡</div>
          <div className="mim-hero__main">いつもの生活が続いています</div>
          <div className="mim-hero__sub">変わらない毎日が、一番のしあわせ</div>
        </div>

        <div className="mim-month-list">
          {MONTHS.map((m, i) => (
            <button
              key={i}
              className="mim-month-card"
              onClick={() => setSelected(i)}
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 0.35s ease ${i * 70}ms, transform 0.35s ease ${i * 70}ms`,
              }}
            >
              <div className="mim-month-card__emoji">{m.mood}</div>
              <div className="mim-month-card__info">
                <div className="mim-month-card__title">{m.year}/{m.month}月</div>
                <div className="mim-month-card__label">{m.label}</div>
              </div>
              <div className="mim-month-card__check">✓</div>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 1.5L6.5 7L1 12.5" stroke="#5ac8d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
        <div className="bottom-spacer" />
      </div>
    </div>
  )
}
