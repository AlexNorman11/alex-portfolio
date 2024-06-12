import React from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import { useEffect, useRef , useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5} // value adjust
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 4, bounce: 0 },
          opacity: { delay, duration: 0 },
        },
      };
    },
  };

  return (
    <div className="an__contact" id = "contact" >
      <div className="contact-container" ref={containerRef}>
      <motion.svg
        className="contact-svg"
        width="90vh"
        height="100%"
        viewBox="0 0 600 600"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.rect
          width="100%"
          height="100%"
          x="0"
          y="0"
          stroke="#a7f39b"
          fill="none"
          variants={draw}
          custom={3}
        />
      </motion.svg>
      </div>
      <section className="contact-content">
        <h1 className='contact-header'>Contact me</h1>
        <p className = 'contact-text'>Email: alexnmn11@gmail.com</p>
        <p className='contact-text'>Phone Number: On Request</p>
        <p className='contact-text'>UK Based</p>

           <div className="contact-icons">
            <a className= 'linkedin__icon' href = 'https://www.linkedin.com/in/alex-norman-71b46b308'><FontAwesomeIcon icon ={faLinkedin} /></a>
            <a className= 'contact__icon' href = 'https://github.com/alexnorman11'><FontAwesomeIcon icon ={faGithub} /></a>
            <a className= 'mail__icon' href = 'mailto:alexnmn11@gmail.com'><FontAwesomeIcon icon ={faEnvelope} /></a>
           </div>

      </section>
    </div>
  );
};

export default Contact;




