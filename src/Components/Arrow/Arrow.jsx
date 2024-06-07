import React from 'react';
import './Arrow.css';
import './ArrowResp.css';
import ArrowImage from'../../Assets/images/Asset 4arrow.svg';



const Arrow = () => {
  return (
    <div className="an__arrow">
        <div className="arrow__image">
        <img className = "arrow" src={ArrowImage} alt="About icon" />

        </div>
        <div className="arrow__text">
            <h1 className='arrow-text'>Demonstration of skills - ‘How I Built This Portfolio’</h1>

        </div>
    
    </div>

);
}

export default Arrow