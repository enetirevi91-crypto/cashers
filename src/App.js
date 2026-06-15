import React from 'react';
import './App.css';

const TG_URL = "https://kieerj.lol/l/lyr8wxvqmkfr";

function App() {
  return (
    <div className="page">
      <div className="bg-glow" />
      <div className="bg-nebula" />
      <div className="bg-vignette" />

      <div className="container">
        <header className="header">
          <div className="header-left">
            <div className="logo-box">
              <span className="logo-letter">C</span>
            </div>

            <div className="header-text">
              <div className="header-title">CASHERS</div>
              <div className="header-sub">
                Обмен криптовалют
              </div>
            </div>
          </div>

          <div className="header-badge">
            <ShieldIcon className="icon-teal" />
            <div className="badge-text-red">
              ВАЖНО! Перевод средств строго<br />
              при личной встрече у нас в отделении
            </div>
          </div>
        </header>

        <section className="hero">
          <h1 className="hero-title">
            Обмен криптовалют
          </h1>

          <h2 className="hero-subtitle">
            по лучшему курсу
          </h2>

          <div className="hero-coins">
            USDT <span className="dot">•</span>
            BTC <span className="dot">•</span>
            ETH
          </div>

          <div className="hero-image">
            <img
              src="/ChatGPT Image 11 июн. 2026 г., 11_12_19.png"
              alt="Coins"
              className="shark-img"
              draggable={false}
            />
          </div>

          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <TelegramIcon className="icon-teal-lg" />
            <span>Получить курс в Telegram</span>
          </a>

          <div className="hero-tags">
            Быстро <span className="dot">•</span>
            Безопасно <span className="dot">•</span>
            Без комиссий
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <BoltIcon className="icon-feature" />
            <div className="feature-title">Быстро</div>
            <div className="feature-desc">
              Обмен за 10 минут
            </div>
          </div>

          <div className="feature">
            <ShieldCheckIcon className="icon-feature" />
            <div className="feature-title">
              Безопасно
            </div>
            <div className="feature-desc">
              Только личная встреча
            </div>
          </div>

          <div className="feature">
            <PercentIcon className="icon-feature" />
            <div className="feature-title">
              Выгодно
            </div>
            <div className="feature-desc">
              Лучшие курсы в городе
            </div>
          </div>
        </section>

        <footer className="footer">
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <TelegramIcon className="icon-teal-sm" />
            <span>@cashers_exchange_manager</span>
          </a>

          <div className="footer-hours">
            Работаем ежедневно с
            <span className="teal"> 09:00 </span>
            до
            <span className="teal"> 20:00</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function PercentIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  );
}

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.5 3.5L2.5 11l5.5 2 2 6 3-3.5 5 4 3.5-16zM10 14l8-7-10 6.5z" />
    </svg>
  );
}

export default App;