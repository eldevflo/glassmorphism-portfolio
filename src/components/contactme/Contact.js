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
                <CustomizedTooltips >
                    <img src={gmail}  alt="gmail"  onClick={(e) => {navigator.clipboard.writeText('f.zamanipour@gmail.com')}

                    } />
                </CustomizedTooltips>

                <CustomizedTooltips  >
                <img src={Octocat}  alt="git" 
                    onClick={(e) => {navigator.clipboard.writeText('https://github.com/fzmnpr')}}
                />
                </CustomizedTooltips>

                <CustomizedTooltips >
                <img src={instagram}  alt="instagram" 
                     onClick={(e) => {navigator.clipboard.writeText('https://www.instagram.com/fzmnpr/')}}
                />
                </CustomizedTooltips>

                <CustomizedTooltips >
                <img src={telegram}  alt="telegram"  
                 onClick={(e) => {navigator.clipboard.writeText('@fzmnpr')}}

                />
                </CustomizedTooltips>
            </div>
                        <p className="mobile-text">touch the icon to copy the link</p>

        </div>
        </Element>
    )
}

export default Contact
