import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Portfolio.scss';

const portfolioItems = [
  {
    id: 1,
    title: 'TodoList',
    description: '리액트 상태관리, 커스텀 훅 응용 제작',
    github: 'https://github.com/KYUNG-BOK/todolist',
    demo: 'https://todolist-nine-drab-78.vercel.app/',
  },
  {
    id: 2,
    title: 'weather app',
    description: '외부 api연동하여 Weather App제작',
    github: 'https://github.com/KYUNG-BOK/weather',
    demo: 'https://weather-vert-two-35.vercel.app/',
  },
];

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  const openModal = (url) => {
    setSelectedUrl(url);
    setIsModalOpen(true);
  };

  return (
    <div className="portfolio-page">
      <h1 className="portfolio-title">📁 Portfolio</h1>
      <p className="portfolio-subtitle">React + Vite 프로젝트 모음입니다.</p>

      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-card">
            <h3 className="portfolio-project-title">{item.title}</h3>
            <p className="portfolio-description">{item.description}</p>
            <div className="portfolio-actions">
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button"
              >
                🔗 GitHub 가기
              </a>
              <button
                className="portfolio-button"
                onClick={() => openModal(item.demo)}
              >
                ▶️ 미리 보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="portfolio-overlay">
            <div className="portfolio-modal">
              <button
                className="portfolio-close-button"
                onClick={() => setIsModalOpen(false)}
              >
                ❌
              </button>
              <iframe
                src={selectedUrl}
                title="Demo"
                className="portfolio-iframe"
              />
            </div>
          </div>,
          document.body
        )
      }
    </div>
  );
}

export default Portfolio;
