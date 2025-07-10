import './Layout.css';
import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import StudyPartnersModal from './StudyPartnersModal';



const Layout = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

      return (
        <div className="layout">
          <header className="header">
            <div className="header-title">BOK's React Project</div>
              <div
          className="header-info"
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          onClick={() => setModalVisible(true)}
          title="My Study Partners 보기"
        >
          ⭐ My Study Partners
        </div>
          </header>
    
         <NavBar />

          <main className="content">
            <Outlet />
          </main>

          <StudyPartnersModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)} 
          />

        </div>
      );
    };
    
    export default Layout;
