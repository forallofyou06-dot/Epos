import React from 'react'

export default function Banner({ shopping }) {
  return (
    <div className="banner-card">
      <span className="banner-text">
        {shopping ? '今日はおでかけをしたよ。' : '毎月第２日曜日はいつもよりポイントがたまるよ♪'}
      </span>
      <span className="banner-arrow">›</span>
    </div>
  )
}
