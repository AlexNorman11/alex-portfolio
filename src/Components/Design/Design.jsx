import React from 'react';
import './Design.css';
import './DesignResp.css';
import DesignImageOne from '/Users/alex/Desktop/Alex App/alex-app/src/Assets/images/ImageThree.webp';
import DesignImageLand from '/Users/alex/Desktop/Alex App/alex-app/src/Assets/images/ImageThree.webp';


const DesignImage = () => {
    return (
      <img className = "port" src={DesignImageOne} alt="About icon" />
    );
  }

const ImageLand = () => {
    return (
      <img className = "land" src={DesignImageLand} alt="About icon land" />
    );
  }
  
  
const Design = () => {
  return (
    <div className="an__design">
        
        <div className = "an__design-title_container">
            <div className = "design__title-background"></div>
            <h1 className = "design-text"> Design & Research</h1>
        </div>

        <div className="an__design-content__container">
            <div className="design__content-image__container">
                <div className="design__content-image">
                    <DesignImage/>
                    <ImageLand/>
               
                </div>
            </div>
            <div className="design__content-text__container">
            <h1 className = "content-heading">
                Explanation:
            </h1>
                <p className = "content-text">
                In the initial stage of my web development project, I focus on thorough design and research to lay a strong foundation. Utilizing Adobe XD, I create an extensive mood board filled with inspiration images, potential fonts, and a well-curated color palette. This process helps in visualizing the overall aesthetic and setting the tone for the website.<br/> Adobe XD is also instrumental in crafting the website layout, allowing me to design each web page meticulously. <br/> Additionally, I leverage Adobe Illustrator to design a distinctive brand logo, which is then converted into an SVG format. This ensures the logo can be easily manipulated and scaled without losing quality, maintaining a cohesive brand identity across the site.
                </p>
            </div>
        </div>



    </div>


);
}
export default Design