// src/components/Header.jsx

import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';
// Re-add user and onLogout to props
function Header({ currentPage, user, onLogout }) {  
  const onNavigate = useNavigate();
  return (
    <header className="app-header">
      <div className="header-top-bar">
        <h1 className="app-title" onClick={() => onNavigate('/')}>AgriConnect</h1>
        <nav className="main-nav">
          <ul>
            <li><button className={currentPage === 'home' ? 'active' : ''} onClick={() => onNavigate('/')}>Home</button></li>
            <li><button className={currentPage === 'research' ? 'active' : ''} onClick={() => onNavigate('/research')}>Research</button></li>
            <li><button className={currentPage === 'resources' ? 'active' : ''} onClick={() => onNavigate('/resources')}>Resources</button></li>
            <li><button className={currentPage === 'weather' ? 'active' : ''} onClick={() => onNavigate('/weather')}>Weather</button></li>
            <li><button className={currentPage === 'ideas' ? 'active' : ''} onClick={() => onNavigate('/business-ideas')}>Business Ideas</button></li>
            <li><button className={currentPage === 'news' ? 'active' : ''} onClick={() => onNavigate('/news')}>News & Updates</button></li>
            <li><button className={currentPage === 'crops' ? 'active' : ''} onClick={() => onNavigate('/crops')}>Crops</button></li>
            <li><button className={currentPage === 'about' ? 'active' : ''} onClick={() => onNavigate('/about')}>About Us</button></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {user ? (
            // If user is logged in (demo user exists)
            <>
              <span className="user-email">{user.email}</span>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            // If no user is logged in
            <>
              <button onClick={() => onNavigate('login')}>Login</button>
              <button onClick={() => onNavigate('signup')}>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;