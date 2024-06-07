import React from 'react';
import './Demo.css';
import {Design, Building, ProblemS, Circles} from '../../Components';


const Demo= () => {
  return (
    <div className="an__demo">
        <Design/>
        <Circles/>
        <Building />
        <Circles/>
        <ProblemS/>
        <Circles/>
    </div>


);
}
export default Demo