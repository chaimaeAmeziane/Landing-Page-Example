import '../css/Footer.css';
import footerpic from '../images/bg/Image 28.png'
import logo1 from '../images/logos/1.png'
import logo2 from '../images/logos/e aviator.png'
const Footer = () => {
    return (
        <div className="footer">
            <img src={footerpic} className="footerpic"></img>
            <div className="footer-footer">
               <img src={logo1} className="logo1"></img>
               <img src={logo2} className="logo2"></img>
                 <div className="contact">
                      NZ 03 358 0477 (INTL +64 3 358 0477)<br></br>
                      <span>Copyright © 2018 All Rights Reserved IAANZ</span>
                 </div>
            </div>
        </div>
    )
}

export default Footer
