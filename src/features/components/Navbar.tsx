import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSmartphone, FiInfo, FiBox, FiLifeBuoy, FiUser } from 'react-icons/fi';
import './Navbar.css';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="glass-navbar">
      <div className="nav-brand">
        <span className="logo">AI Glass</span>
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item">
          <FiSmartphone className="nav-icon" />
          <span>首页</span>
        </Link>
        <Link to="/products" className="nav-item">
          <FiBox className="nav-icon" />
          <span>产品</span>
        </Link>
        <Link to="/info" className="nav-item">
          <FiInfo className="nav-icon" />
          <span>资讯</span>
        </Link>
        <Link to="/support" className="nav-item">
          <FiLifeBuoy className="nav-icon" />
          <span>支持</span>
        </Link>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="auth-link">
          <FiUser className="auth-icon" />
          <span>登录/注册</span>
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;