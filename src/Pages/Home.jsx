import React, { useEffect, useRef } from 'react';
import { Home, About, Demo, Contact, Footer } from '../Containers';
import { useScroll } from '../Context/ScrollContext';

function HomePage() {
  const { scrollToContact, setScrollToContact } = useScroll();
  const contactRef = useRef(null);

  useEffect(() => {
    if (scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToContact(false);
    }
  }, [scrollToContact, setScrollToContact]);

  return (
    <>
      <Home />
      <About />
      <Demo />
      <div ref= {contactRef}>
      <Contact/>
      </div>

   

    </>
  );
}

export default HomePage;