import React from 'react';
import './Building.css';
import './BuildingResp.css';
import BuildImageLand from '/Users/alex/Desktop/Alex App/alex-app/src/Assets/images/build.png';

const BuildImage = () => {
    return(
        <img className = "b-land" src={BuildImageLand} alt="Build Icon" />
    );
}





const Building = () => {
  return (

    <div className="an__building">
        
    <div className = "an__building-title_container">
        <div className = "building__title-background"></div>
        <h1 className = "building-text"> Building </h1>
    </div>

    <div className="an__building-content__container">
        <div className="building__content-image__container">
            <div className="building__content-image">
                <BuildImage />
            </div>
        </div>
        <div className="building__content-text__container">
        <h1 className = "content-heading">
            Explanation:
        </h1>
            <p className = "content-text">
                With a solid design and research foundation, I proceed to the coding and build process using the React framework. Utilizing Visual Studio Code as my editor, I create a dynamic web application with React's component-based architecture, enhancing code flexibility and maintainability. I make the website responsive by employing CSS3 media queries, ensuring it adapts seamlessly to various screen sizes. By structuring my code with components and containers, I ensure that each part of the application is isolated and can be developed independently, which simplifies debugging and testing.
                <br/><br/>Additionally, I manipulate and animate the SVG logo using CSS and JavaScript within React components, adding visual interest and enhancing user engagement. By leveraging React's powerful features and modern web development practices, I build a robust, responsive, and visually appealing website that aligns with the initial design vision.
           
            </p>
        </div>
    </div>



</div>




);
}
export default Building