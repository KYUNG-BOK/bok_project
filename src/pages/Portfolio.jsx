import React, { useState } from 'react';
import './Portfolio.css'; // CSS 파일 임포트

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio / 과제</h1>
      <p className="portfolio-subtitle">React + Vite로 만든 프로젝트 및 과제입니다.</p>

      <button className="portfolio-button" onClick={() => setIsModalOpen(true)}>
        📝 TodoList 보기
      </button>

      {isModalOpen && (
        <div className="portfolio-overlay">
          <div className="portfolio-modal">
            <button className="portfolio-close-button" onClick={() => setIsModalOpen(false)}>❌</button>
            <iframe
              src="https://todolist-nine-drab-78.vercel.app/"
              title="TodoList"
              width="100%"
              height="100%"
              className="portfolio-iframe"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
