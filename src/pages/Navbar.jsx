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
          <span>홈</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/Home')}>홈</li>
          </ul>
        </li>

        <li className={isActive('/About') ? styles.active : ''}>
          <span>소개</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/About')}>소개</li>
          </ul>
        </li>

        <li className={isActive('/Contact') ? styles.active : ''}>
          <span>컨택</span>
          <ul className={styles.sub}>
            <li onClick={() => navigate('/Contact')}>컨택</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
