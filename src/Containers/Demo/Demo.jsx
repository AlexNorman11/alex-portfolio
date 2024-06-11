import React, {useRef} from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import './Demo.css';
import DesignImage from '../../Assets/images/ImageThree.webp'
import Build from '../../Assets/images/Screenshot 2024-06-11 at 02.52.58.png';


const Demo = () =>{
    return(
        <section className='an__demo'>
        <HorizontalScrollCarousel />
        </section>
    );
};


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-10", "-170%"]); 

    return (
        <section ref={targetRef} className='an__demo-container'>
            <div className='demo-slider__container'>
                <motion.div  style={{ x }}>
                    <DemoCards />
                </motion.div>
            </div>
        </section>
    );
};
const DemoCards = () => {
    return (
        <div className='demo__cards'>
            <div className='demo__card-one'>
                <h1 className='card__header'>Demonstration of Skills </h1>
                 <p className='card__text'>‘How I Built This Portfolio’</p>
            </div>

            <div className='demo__card-two'>
                <h1 className='card__header'>
                    Design & Research
                </h1>
                <p className='card__text'>
                In the initial stage of my web development project, I focus on thorough design and research to lay a strong foundation. Utilizing Adobe XD, I create an extensive mood board filled with inspiration images, potential fonts, and a well-curated color palette. 
                This process helps in visualizing the overall aesthetic and setting the tone for the website.<br/> 
                Adobe XD is also instrumental in crafting the website layout, allowing me to design each web page meticulously. <br/> 
                Additionally, I leverage Adobe Illustrator to design a distinctive brand logo, which is then converted into an SVG format. 
                This ensures the logo can be easily manipulated and scaled without losing quality, maintaining a cohesive brand identity across the site.
                </p>
            </div>

            <div className='demo__card-three'>
                <img className = "design-image" src={DesignImage} alt="Design" />
            </div>

            <div className='demo__card-four'>
                <h1 className='card__header'>
                        Building
                </h1>
                <p className='card__text'>
                I built my portfolio project using React to create a dynamic and interactive user interface. 
                To challenge myself and master CSS, I opted to use pure CSS for styling rather than relying on libraries or frameworks, which allowed me to deepen my understanding of CSS fundamentals. 
                Additionally, I utilized Framer Motion and worked with SVGs to create smooth and engaging animations, enhancing the visual appeal of the site. 
                JavaScript was employed alongside React to manage state, handle events, and create seamless navigation links, ensuring a responsive and user-friendly experience.

                </p>
            </div>

            <div className="demo__card-five">
                <img className = "build-image" src={Build} alt="build" />
            </div>

            <div className="demo__card-six">
            <h1 className='card__header'>
                        De-Bugging & Problem Solving
                </h1>
                <p className='card__text'>
                Ensuring responsiveness with pure CSS was a significant challenge in developing my portfolio. I encountered issues with layouts on different screen sizes, which I resolved using extensive media queries and testing on various devices. Linking pages within the React application required careful debugging to ensure smooth navigation and proper routing. 
                Working with SVGs for animations posed scaling and performance challenges, which I addressed by optimizing SVG files. 
                Overflow issues, particularly with dynamic content, were managed by using appropriate CSS overflow properties and flexbox layouts. 
                </p>

            </div>
        </div>
    );
};
export default Demo


