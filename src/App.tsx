import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitCount, setVisitCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const stored = localStorage.getItem("visitCount");
    if (stored) {
      setVisitCount(parseInt(stored) + 1);
    }
    localStorage.setItem("visitCount", visitCount.toString());

    return () => clearInterval(timer);
  }, [visitCount]);

  const greeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning! 🌅";
    if (hour < 18) return "Good Afternoon! ☀️";
    return "Good Evening! 🌙";
  };

  return (
    <>
      <header className="welcome-header">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1 className="welcome-title">Welcome to My React App! 🎉</h1>
        <p className="greeting">{greeting()}</p>
        <p className="current-time">
          현재 시간: {currentTime.toLocaleTimeString("ko-KR")}
        </p>
      </header>

      <main className="main-content">
        <section className="welcome-card">
          <h2>안녕하세요! 👋</h2>
          <p>
            이 웹사이트에 오신 것을 환영합니다! React와 TypeScript로 만든 모던한
            웹 애플리케이션입니다.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">{visitCount}</span>
              <span className="stat-label">번째 방문</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">⚡</span>
              <span className="stat-label">Vite 빌드</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">⚛️</span>
              <span className="stat-label">React 19</span>
            </div>
          </div>
        </section>

        <section className="features">
          <h3>주요 기능</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>빠른 성능</h4>
              <p>Vite로 최적화된 빌드 시스템</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h4>모던 디자인</h4>
              <p>반응형 웹 디자인과 애니메이션</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h4>TypeScript</h4>
              <p>타입 안전성과 개발자 경험</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>GitHub Actions를 통해 자동 배포된 React 애플리케이션 💻</p>
      </footer>
    </>
  );
}

export default App;
