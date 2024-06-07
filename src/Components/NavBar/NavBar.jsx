import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useScroll } from '../../Context/ScrollContext';
import './NavBar.css';

const Menu = () => {
  const navigate = useNavigate();
  const { setScrollToContact } = useScroll();

  const handleContactClick = () => {
    setScrollToContact(true);
    navigate('/');
  };

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/ResumePage">CV</Link>
      <Link to="/ProjectsPage">Projects</Link>
      <p><a onClick={handleContactClick} style={{ cursor: 'pointer' }}>Contact</a></p>
    </>
  );
};

const NavBar = () => {
  return (
    <div className="an__navbar">
      <div className="an__navbar-links">
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;