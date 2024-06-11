import React, {useEffect}from 'react';
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
  useEffect(() => {
    let prevScrollpos = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementsByClassName("an__navbar")[0];
      
      if (navbar) {
        if (prevScrollpos > currentScrollPos || currentScrollPos < 100) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="an__navbar" style={{ transition: 'top 0.5s' }}>
      <div className="an__navbar-links">
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
