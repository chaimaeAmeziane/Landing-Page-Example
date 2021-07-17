import '../css/Header.css';
import logo1 from '../images/logos/1.png'
import logo2 from '../images/logos/e aviator.png'
import Ellipse from '../images/ellipse/Tracé 614.png'
import Plane from '../images/video/Groupe de masques 9.png'
import VideoPlayer from 'react-video-js-player'
import yoursource from '../video/video.mp4'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const Header = () => {
    const videoSrc = yoursource ;
    const poster = Plane ;

    return (

        <div className="header">
        <img src={Ellipse} className="ellipse"></img>
           <div className="navbar">
               <img src={logo1} className="logo1"></img>
               <img src={logo2} className="logo2"></img>
               <ul>
                   <li className="about"><a href="#">About</a></li>
                   <li className="courses"><a href="#">Courses<ArrowDropDownIcon className="expand"/></a>
                      <ul>
                          <li>Course 1</li>
                          <li>Course 2</li>
                          <li>Course 3</li>
                      </ul>
                   </li>
                   <li className="contact"><a href="#">Contact</a></li>
               </ul>
               <button className="register">Register Now</button>
           </div>
           <p><span>IAANZ IS PROUD TO</span><span>
                BRING TO YOU AN eLEARNING COURSE</span></p>
          <div className="subtitle">Designed and developed by Industry professionals and subject matter experts.</div>
          <div className="divbutton"><button>YES! I WANT TO ENROLL NOW </button></div>
          <VideoPlayer src={videoSrc} poster={poster} width='980' height='550'></VideoPlayer> 
        </div>
        
    )
}

export default Header
