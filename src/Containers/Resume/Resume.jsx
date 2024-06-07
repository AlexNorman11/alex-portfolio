import React from 'react';
import "./Resume.css"
import "./ResumeResp.css"

const Resume = () => {
    return (
        <div className="an__resume" id="cv">
            <div className="an__resume-ls__box">
                <div className="an__resume-box__one">
                    <h1 className='box__one-text'>CV / <br/>Resume</h1>
                </div>

                    <div className="an__resume-box__two">
                    <h1 className="box__two-heading">Work History</h1>
                    <div className="box__two-text">
                    <p><br/></p>
                    <p><br/></p>
                    <h2>Leisure:</h2>
                    <p><br/></p>
                    <p>Keswick Leisure Centre &ndash; Lifeguard (Keswick)</p>
                    <p>June 2014 &ndash; April 2016</p>
                    <p>Served as a lifeguard, ensuring the safety of all swimmers and patrons. Duties included monitoring pool activities, providing first aid, and maintaining cleanliness around the pool area.</p>
                    <p><br/></p>
                    <p><br/></p>
                    <h2>Contracting:</h2>
                    <p><br/></p>
                    <p>AKN Developments &ndash; Contractor/Labourer (casual)</p>
                    <p>August 2016 &ndash; September 2022</p>
                    <p>Worked as a contractor and laborer on various construction and development projects. Responsibilities included general labor, assisting with building tasks, and ensuring site safety.</p>
                    <p><br/></p>
                    <p><br/></p>
                    <h2>Kitchens/Chef work:</h2>
                    <p><br/></p>
                    <p>Stoney Holme Restaurant &ndash; KP/Chef (Carlisle)</p>
                    <p>February 2018 &ndash; October 2018</p>
                    <p>Started as a kitchen porter and progressed to a chef role. Responsibilities included assisting in food preparation, maintaining kitchen cleanliness, and supporting the chef team until compulsory redundancy.</p>
                    <p><br/></p>
                    <p>Dutch Uncle/Club House/Kitchen Rebels - Chef (Carlisle)</p>
                    <p>July 2019 - September 2021</p>
                    <p>Worked across three different venues as a chef. Responsibilities included food preparation, cooking, and maintaining high standards of kitchen hygiene.</p>
                    <p><br/></p>
                    <p>Voodoo Rays &ndash; Pizza Chef</p>
                    <p>Part-time (while studying)</p>
                    <p>Specialized in pizza preparation and cooking. Handled dough, created a variety of pizzas, and ensured a consistent product quality.</p>
                    <p><br/></p>
                    <p>Muddled Olive &ndash; Chef (Carlisle)</p>
                    <p>October 2022 &ndash; February 2023</p>
                    <p>Operated as a chef, managing kitchen operations, preparing diverse dishes, and maintaining high culinary standards.</p>
                    <p><br/></p>
                    <p>Disorder/The Alan - Chef de Partie (Manchester)</p>
                    <p>July 2023 &ndash; October 2023 (Part-time while studying)</p>
                    <p>Worked part-time as a Chef de Partie at two different restaurants. Responsibilities included overseeing specific kitchen sections, preparing meals to order, and assisting with menu development.</p>
                    <p><br/></p>
                    </div>
                </div>
            </div>

            <div className="an__resume-rs__box">
                <div className="an__resume-box__three">
                    <article>
                    <h1 className = "box__three-heading"> Who I Am</h1>
                    <p className = "box__three-text">
                    I’m Alex, a passionate self-taught web developer and UI/UX designer. Although I initially studied music at Goldsmiths University and Manchester University, I’ve transitioned into web development, driven by my love for creating and learning new things.<br/>
                    <br/> I specialize in designing with Adobe Illustrator for logo designs and developing with React, JavaScript, CSS, and HTML for the web development. Currently, I’m working on a website for an engineering company and various personal projects. My adaptable nature and quick learning ability enable me to master new languages and frameworks efficiently.

                    <br/>
                    <br/>My approach to problem-solving involves thorough research, creative design in Adobe XD, and development using the best-suited technologies. With a strong foundation in music software and an AS level education in Physics, Maths and Futher Maths. I’m excited to combine these skills in innovative ways for future web development projects.
                    </p>
                    </article>
                </div>
                
                
                <div className="an__resume-box__four">
                    <article>
                        <h1 className="box__four-heading">Transferable skills</h1>
                        <p className="box__four-text">
                        Working as a chef in a high-stress environment equips one with a range of transferable skills that are highly beneficial in web development. Time management and attention to detail are critical in both roles; chefs must precisely coordinate tasks to ensure timely dish preparation, much like developers manage project deadlines and ensure code accuracy. The problem-solving skills honed in the kitchen, where quick resolutions to unexpected issues are essential, directly apply to debugging and optimizing code in development.

                        <br/><br/>Additionally, the collaborative nature of working in a kitchen fosters strong team coordination and communication skills, crucial for collaborating with designers, developers, and stakeholders in web projects. Adaptability, another key skill from the kitchen, helps developers quickly learn new technologies and respond to evolving project requirements. Stress management and creativity are also pivotal; the ability to remain calm under pressure and think creatively is invaluable in both high-stakes cooking and developing innovative digital solutions.
                        </p>

                    </article>
                </div>
               
               
                <div className="an__resume-box__five">
                    <article>
                        <h1 className="box__five-heading">Education</h1>
                        <p className="box__five-text">
                        Keswick School<br/>
                        2009 – 2014,<br/>
                        GCSE: 1 A, 5 B’s, 3 C’s<br/>
                        <br/>
                        Goldsmiths, University of London<br/>
                        2021 – 2022<br/>
                        (HSE) Foundation Degree in Music (Pass)<br/>
                        <br/>

                        The University of Manchester<br/>
                        Currently Paused<br/>
                        (Bmus)<br/>
                        <br/>
                        AS Level<br/>
                        Maths, Further Maths, and Physics<br/>
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Resume;