import React from 'react'
import About from '../components/About/About'
import Contact from '../components/contactme/Contact'
import Education from '../components/Education/Education'
import FunFact from '../components/fact/FunFact'
import Skills from '../components/skills/Skills'
import './Content.css'


function Content(props) {
    return (
        <div className="content">
          <About/>
          <FunFact/>
          <Skills/>
          <Education/>
          <Contact/>
         </div>

    )
}

export default Content
