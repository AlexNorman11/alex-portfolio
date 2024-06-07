import React from 'react';
import './Contact.css';
import './ContactResp.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope , faPhone, faEarthEurope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Eyes = () => {
        return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_2"
            data-name="Layer 2"
            viewBox="0 0 218.63 145.75"
          >
            <defs>
              <style>
                {`
                  .cls-1, .cls-2 {
                    fill: #000;
                    stroke: #000;
                    stroke-miterlimit: 10;
                  }
                  .cls-2 {
                    fill: none;
                    stroke: #00f;
                  }
                  @keyframes blink {
                    0%, 20%, 40%, 60%, 80%, 100% {
                      fill: #000; 
                    }
                    10%, 30%, 50%, 70%, 90% {
                      fill: #a7f39b; 
                    }
                  }
                  .cls-el, .cls-er {
                    animation: blink 120s infinite;
                  }
                `}
              </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M134.91 81.61c8.6 1.91 19.08 2.06 30.78 1.19 12.56-.93 23.66-3.47 32.89-6.37.23-.29 1.16-1.55 1.35-3.57.17-1.87-.41-3.19-.58-3.54-9.1-3.14-20.09-5.92-32.71-7.15-11.23-1.09-21.41-.71-30.17.3-4.12 1.45-3.83 4.22-5.91 8.38 1.19 3.23 1.05 7.26 4.34 10.75Z"
                className="cls-er"
              />
              <path
                d="M92.58 95.74c-.08 3.64-.16 6.7-.36 6.7s-.29-3.22-.38-6.7c-.09-3.68.18-6.41.36-6.7s.46 3.02.38 6.7ZM124.69 95.65c-.04 3.64-.08 6.7-.2 6.7s-.16-3.22-.21-6.7c-.05-3.68.09-6.41.2-6.7s.25 3.02.21 6.7Z"
                className="cls-1"
              />
              <path
                d="M81.7 81.76c-8.59 1.96-19.07 2.16-30.78 1.36-12.56-.86-23.68-3.34-32.92-6.19-.23-.29-1.17-1.54-1.37-3.56-.18-1.87.39-3.19.56-3.54 9.08-3.19 20.06-6.03 32.67-7.33 11.22-1.15 21.4-.83 30.17.13 4.13 1.43 3.85 4.2 5.96 8.35-1.17 3.23-1.01 7.27-4.28 10.78Z"
                className="cls-el"
              />
              <path d="M108.86 0v145.75M0 70.63l218.63.9" className="cls-2" />
            </g>
          </svg>
        );
      };
      



const Contact = () => {
  return (

    <div className="an__contact" id = "contact">
         <h1 className='resp-header'>Contact - Hire Me</h1>
        <div className="an__contact-container">
            <div className="contact-container__ls">

                <div className="container__ls-heading">
                    <h1 className='ls-header'>Contact - Hire Me</h1>
                </div>
                <div className="container__ls-image">
                    <Eyes/>
                </div>

            </div>




            <div className="contact-container__rs">
                <div className="container__rs">
                    <ul className='rs-list'>
                        <li className='rs-email'><a className= 'mail__icon' href = 'mailto:alexnmn11@gmail.com'><FontAwesomeIcon icon ={faEnvelope} /></a><p>alexnorman11@gmail.com</p></li>
                        <li className='rs-telephone'><a className= 'contact__icon' href = '#contact'><FontAwesomeIcon icon ={faPhone} /></a><p>Available on Request</p></li>
                        <li className='rs-uk'><a className= 'contact__icon' href = '#contact'><FontAwesomeIcon icon ={faEarthEurope} /></a><p>UK Based</p></li>
                        <li className='rs-linkedin'><a className= 'linkedin__icon' href = '*'><FontAwesomeIcon icon ={faLinkedin} /></a><p></p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

);
}
export default Contact