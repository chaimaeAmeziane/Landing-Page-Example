import '../css/Course.css';
import nuages from '../images/courses/nuages.png'
import livre from '../images/courses/livre.png'
import aviationsafety from '../images/courses/aviation safety.png'
import aip from '../images/courses/aip.png'
import plane from '../images/courses/plane.png'
import pilote from '../images/courses/pilotes.png'
const Course = () => {
    return (
        <div>
            <div className="title">
               <h3>eLEARNING COURSES OFFERED BY US<br></br>
               <span>THE FOLLOWING 6 PRIVATE PILOT LICENCE THEORY SUBJECTS ARE AVAILABLE NOW</span></h3>
            </div>
          
          <div className="container-grid">

                <div className="picture1">
                    <img src={nuages} className="nuages" alt='nuages'></img>
                    <div className="picture1container">
                    <h3>PPL Meteorology</h3>
                    <p>Learn how to demonstrate knowledge of meteorology for private aircraft operations.</p>
                    <p>Price: NZD$275.00<br></br>Unit standard: 23428</p>
                    <button>ENROLL NOW</button>
                    </div>
                </div>

                <div className="picture2">
                    <img src={livre} className="livre" alt='livre'></img>
                    <div className="picture2container">
                    <h3>PPL Air Law</h3>
                    <p>Learn how to demonstration aviation legislation,  general operation and flight rules.</p>
                    <p>Price: NZD$250.00<br></br>Unit standard: 23427</p>
                    <button>ENROLL NOW</button>
                    </div>
                </div>

                <div className="picture3">
                    <img src={aviationsafety} className="aviationsafety" alt='aviationsafety'></img>
                    <div className="picture3container">
                    <h3>PPL Human Factors</h3>
                    <p>Learn about human performance and human limitations in both air and on the ground.</p>
                    <p>Price: NZD$250.00<br></br>Unit standard: 23425</p>
                    <button>ENROLL NOW</button>
                    </div>
                </div>

                <div className="picture4">
                     <img src={aip} className="aip" alt='aip'></img> 
                     <div className="picture4container">
                    <h3>Flight Navigation</h3>
                    <p>Learn the fundamentals of air navigation, aeronautical maps and charts and flight planning.</p>
                    <p>Price: NZD$275.00<br></br>Unit standard: 23426</p>
                    <button>ENROLL NOW</button>
                    </div>
                    
                </div>

                <div className="picture5">
                     <img src={plane} className="plane" alt='plane'></img>
                     <div className="picture5container">
                    <h3>Flight Radio</h3>
                    <p>Learn the knowledge of basic radio wave propagation and radio equipment.</p>
                    <p>Price: NZD$175.00<br></br>Unit standard: 23424</p>
                    <button>ENROLL NOW</button>
                    </div>
                 
                </div>

                <div className="picture6">
                      <img src={pilote} className="pilote" alt='pilote'></img>
                      <div className="picture6container">
                    <h3>Aircraft Technology</h3>
                    <p>Learn aircraft technical knowledge for use in a private aircraft operation.</p>
                    <p>Price: NZD$275.00<br></br>Unit standard: 23431</p>
                    <button>ENROLL NOW</button>
                    </div>
                </div>
          </div>





        </div>
    )
}

export default Course
