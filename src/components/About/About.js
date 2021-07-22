import React from 'react'
import './About.css'
import AlinaBalgimbaeva from '../../assets/AlinaBalgimbaeva .jpg'
import { Element } from 'react-scroll'


function About(props) {
    return (
        <Element name="about">
        <div className="about">
            <div className="about-img-section">
                <img src={AlinaBalgimbaeva} alt='about-img' className="about-img" />

            </div>
                <div className="aboutme">
                    <h3><em>Who</em> I am?</h3>
                <p>
                    as you know my name is fatemeh. but what you probably dont know is that I born at 1995, I am a sociologist But <em>I love Coding</em> . 
                    currently I don't have any work experience but I'm looking for job offers in <em>reactjs development positions</em>. 
                </p>
                </div>
                <div className="hireme">
                    <h3>
                   <em>Why</em>  you should hire me?</h3>
                
                <ul>
                    <li>I'm passionate about coding</li>
                    <li>I am an INFJ person so I have lots of greate ideas , i'm organized and loyal</li>
                    <li>I'm a good researcher</li>
                    <li>I love problrm solving</li>
                </ul>
                </div>
                
                
            
        </div>
        </Element>
    )
}

export default About
