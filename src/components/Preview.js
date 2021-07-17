import '../css/Preview.css';

import Plane from '../images/courses/Flight Radio.png'
import VideoPlayer from 'react-video-js-player'
import yoursource from '../video/video.mp4'

const Preview = () => {
    const videoSrc = yoursource ;
    const poster = Plane ;
    
    return (
        <div className="previews">
            <div className="preview1">
                  
                  <div className="text">
                  <h4>WANT TO SEE WHAT OUR eLEARNING COURSE LOOKS LIKE?</h4>
                  <h1>HERE'S A SNEAK PREVIEW JUST FOR YOU!</h1>
                  <button>YES! I WANT TO ENROLL NOW</button>
                  </div>

                  <div className="video">
                  <VideoPlayer src={videoSrc} poster={poster} width='470' height='290'></VideoPlayer>
                  </div>
            </div>



            <div className="preview2">
            Through our online environment and resources, we can help you prepare for your PPL theory examinations with Aviation Services Limited (ASL). These will count towards gaining a New Zealand Private Pilot Licence, provide you a taste of the aviation world and if required credits towards your NCEA.<br></br>

For International students, this is an opportunity for you to start Aviation learning from the comfort of your home try aviation learning before you enrol on the full course.
            </div>

        </div>
    )
}

export default Preview
