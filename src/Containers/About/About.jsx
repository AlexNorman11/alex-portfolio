import React from 'react';
import './About.css';
import AboutIcon from '../../Assets/images/Asset 14aboutimageok.webp';

const AboutImage = () => {
  return (
    <img className='about-image' src={AboutIcon} alt="About icon" />
  );
}
const About = () => {
  return (
    
    <div className="an__about" id="About">
        <div className="about-card__one">
          <h1 className='about-header'>About Me</h1>
          <AboutImage/>
          <p>Keep Scrolling</p>
          <p>-_- </p>
        </div>


        <div className="about-card__two">
          <p className="about-text">
            I’m Alex, an enthusiastic and self-motivated web developer with a passion for UI/UX design and software development. 
            Although I’ve currently taken a step back from university, where I was studying music, I’ve redirected my focus towards a career in web development.
             My journey has been largely self-taught, driven by my curiosity and determination to master new skills.<br /><br />
            In my spare time, I’ve been working on a website for an engineering company and creating various personal projects. 
            My key skills include designing with Adobe Illustrator and developing with React, JavaScript,CSS, and HTML. I also have experience with tools and technologies like Node.js, GitHub, APIs,VScode, Adobe XD and SQL. 
            I pride myself on my adaptability and quick learning ability when it comes to new languages and frameworks.
          </p>
          <p>Keep Scrolling</p>
          <p>-_- </p>
        </div>

        
    </div>
  );
}

export default About;
