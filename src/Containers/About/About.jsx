import React from 'react';
import './About.css';
import './AboutResp.css';
import AboutIcon from '../../Assets/images/Asset 14aboutimageok.webp';
import { Link } from 'react-router-dom';

const AboutImage = () => {
  return (
    <img src={AboutIcon} alt="About icon" />
  );
}

const About = () => {
  return (
    <div className="an__about" id="About">

      <div className="an__circles-container__one">
        <div className="circle circle-one" />
        <div className="circle circle-two" />
        <div className="circle circle-three" />
      </div>


      <div className="an__about-info__container">

        <div className="info-image__container">
          <div className="an__about-image">
            <AboutImage/>
          </div>
        </div>

        <div className="info-textbox__container">
          <h1 className='info__header'>About</h1>
          <p className="about__textbox-content">
            I’m Alex, an enthusiastic and self-motivated web developer with a passion for UI/UX design and software development. Although I’ve currently taken a step back from university, where I was studying music, I’ve redirected my focus towards a career in web development. My journey has been largely self-taught, driven by my curiosity and determination to master new skills.<br /><br />
            In my spare time, I’ve been working on a website for an engineering company and creating various personal projects. My key skills include designing with Adobe Illustrator and developing with React, JavaScript, CSS, and HTML. I also have experience with tools and technologies like Node.js, GitHub, Python, APIs, and SQL. I pride myself on my adaptability and quick learning ability when it comes to new languages and frameworks.
          </p>
          
          <Link to="/ResumePage" className="cv__button">Resume/CV</Link>
        
        </div>
      
      </div>





      <div className="an__circles-container__two">
        <div className="circle circle-one" />
        <div className="circle circle-two" />
        <div className="circle circle-three" />
      </div>





    </div>
  );
}

export default About;
