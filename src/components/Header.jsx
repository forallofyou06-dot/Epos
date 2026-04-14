import React from 'react'
import logoImg from './logo.jpg'

export default function Header() {
  return (
    <header className="header">
      {/* Mail icon */}
      <button className="header-icon-btn">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <rect x="1" y="1" width="20" height="16" rx="2" fill="#5ac8d4" />
          <polyline points="1,1 11,10 21,1" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* EPOS Logo */}
      <img src={logoImg} alt="EPOS" className="epos-logo-img" />

      {/* Settings + Help icons */}
      <div className="header-right-icons">
        <button className="header-icon-btn icon-gray">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="3" stroke="#888" strokeWidth="1.8" />
            <path
              d="M10 1v2M10 17v2M1 10h2M17 10h2M3.22 3.22l1.41 1.41M15.36 15.36l1.42 1.42M3.22 16.78l1.41-1.41M15.36 4.64l1.42-1.42"
              stroke="#888"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button className="header-icon-btn icon-teal">
          <span className="help-text">?</span>
        </button>
      </div>
    </header>
  )
}
