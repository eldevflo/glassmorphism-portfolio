import './Contact.css'
import gmail from '../../assets/gmail.png'
import Octocat from '../../assets/Octocat.png'
import instagram from '../../assets/instagram.png'
import telegram from '../../assets/telegram.png'
import CustomizedTooltips from './CustomizedTimeLine'
import { Element } from 'react-scroll'


function Contact() {  
 
    return (
        <Element name="contact">
        <div className="contact-container">
            <h2>How to contact me</h2>

            <div className="contact">  
            <a href="mailto:f.zamanipour@gmail.com">
                <img src={gmail}  alt="gmail"/> 
            </a>  

                   
            
                <img src={Octocat}  alt="git" 
                    onClick={(e) => {window.open('https://github.com/fzmnpr')}}
                />

                <img src={instagram}  alt="instagram" 
                     onClick={(e) => {window.open('https://www.instagram.com/fzmnpr/')}}
                />

                <img src={telegram}  alt="telegram"  
                 onClick={(e) => {window.open('https://t.me/fzmnpr')}}

                />
            </div>
        </div>
        </Element>
    )
}

export default Contact
