import './Layout.css';
import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';


const Layout = () => {

      return (
        <div className="layout">
          <header className="header">
            리액트 스터디
              <div className="header-info">
                ⭐ 하흥주님{' '} |
                우혜림님{' '} |
                
              </div>
          </header>
    
         <NavBar />

          <main className="content">
            <Outlet />
          </main>
    
        </div>
      );
    };
    
    export default Layout;
