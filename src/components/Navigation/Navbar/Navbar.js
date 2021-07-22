import { scroller } from 'react-scroll'

import './Navbar.css'

function Navbar(props) {


    return (
        <div className="nav-wrapper">
        <div className='navbar'>
        <div className='nav-items'>
        <p onClick={() =>
            scroller.scrollTo("about", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          } className='nav-item'> ABOUT ME </p> 
        <p onClick={() =>
            scroller.scrollTo("skills", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          } className='nav-item'> SKILLS </p> 

        <p onClick={() =>
            scroller.scrollTo("education", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          } className='nav-item'> EDUCATION </p> 
        <p onClick={() =>
            scroller.scrollTo("contact", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          } className='nav-item'> CONTAC TME </p> 
        </div>

        </div>
            
        </div>
    )
}

export default Navbar
