import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import './Skills.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import {Element } from 'react-scroll'
function Skills() {
    return (
        <Element name="skills">
        <div className="container">
            <h1> my skills</h1>
            <div className='skills'>
                <div className="html">
                    <img src={html} alt="html" /> 
                    <ProgressBar percentage={80}/>
                </div>
                <div className="css">
                 <img src={css} alt="css" /> 
                 <ProgressBar percentage={80}/>
                </div>
                <div className="js">
                 <img src={javascript} alt="js" />
                 <ProgressBar percentage={70} /> 
                </div>
                <div className="react">
                 <img src={react} alt="react" /> 
                 <ProgressBar percentage={70} />
                </div>
            </div>
        </div>
        </Element>
    )
}

export default Skills
