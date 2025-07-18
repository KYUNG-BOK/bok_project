import styles from './NavBar.module.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = ({ user, company }) => {
  const navigate = useNavigate();
  const location = useLocation();


  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className={styles.header_content__nav}>
      <ul>
        <li className={isActive('/Home') ? styles.active : ''}>
          <span>Home</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/')}>Home</li>
          </ul>
        </li>

        <li className={isActive('/About') ? styles.active : ''}>
          <span>Introduce</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/About')}>Introduce</li>
          </ul>
        </li>

        <li className={isActive('/VercelGuide') ? styles.active : ''}>
          <span>Guide</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/VercelGuide')}>Vercel 새로고침 404 오류</li>
            <li onClick={() => navigate('/VercelUpload')}>Vercel Upload Error</li>
            <li onClick={() => navigate('/EnvGuide')}>Env설정하기</li>
          </ul>
        </li>

        <li className={isActive('/Portfolio') ? styles.active : ''}>
          <span>Portfolio</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/Portfolio')}>Portfolio</li>
          </ul>
        </li>

        <li className={isActive('/Contact') ? styles.active : ''}>
          <span>Contact</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/Contact')}>Contact</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
