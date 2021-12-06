import React, { useState } from 'react'
import './Header.css'
import Jobriver from '../../assets/Jobriver.png'
import { scroller } from 'react-scroll'
function Header() {
  
  const [copy, setCopy] = useState(false);
  const onCopyHandler=()=>{
    navigator.clipboard.writeText('+989909345731');
    setCopy(true);
    setTimeout(()=>{
      setCopy(false);
    } , 5000)
  }
    return (
        <div className='header'>
            <div  className="snippet" data-title=".dot-falling">
                  <h2>Hello</h2>
                <div  className="snippet" data-title=".dot-falling">
                <div  className="stage">
                 <div  className="dot-falling"></div>
                </div>
              </div>
             </div>
             <h2 className="full-name">I'm Fatemeh Zamanipour</h2>
            <p>Front-End Developer</p>
            <div className='btn-section'>
                <button 
                onClick={() =>
            scroller.scrollTo("skills", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }> my skills</button>
                <button 
                 onClick={onCopyHandler}>
                 {copy ? 'phone number copied!' : 'call me now!'}
                 </button>
            </div>
            <div className='img-section'>
                <img src={Jobriver} alt='header-img' className="header-img"/>
            </div>
        </div>
    )
}

export default Header
