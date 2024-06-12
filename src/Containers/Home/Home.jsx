import React from 'react';
import './Home.css';
import { AnIcon } from '../../Components'



const Hero = () => {
  return (
    <div className='an__hero'>
      <div className="an__hero-container">
        <div className = "hero-image__container">
          <div className="hero-image">
            <AnIcon/>
            </div>
        </div>
        <div className="hero-text__container">
          <h1 className = "my-name">
            Alex Norman
          </h1>
          <p className="hero-text">Web Development Portfolio</p>


          <button className="contact-me"> <a href = "#contact">Contact Me</a></button>
          <p className="hero-text">Scroll for More</p>
        </div>

      </div>
    </div>

  );
};

export default Hero;
