import '../css/Question.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Question = () => {
    const showtext1 = () =>{
        var div = document.getElementById('parg1')
        div.classList.toggle('hidden')
    }
    const showtext2 = () =>{
        var div = document.getElementById('parg2')
        div.classList.toggle('hidden')
    }
    return (
        <div className="questiondiv">
            <div className="title">
            All your questions answered
            </div>
            <div className="how">
                <div className="how1" id="q">
                  <h3>How does E-Learning work?</h3>
                  <ExpandMoreIcon id="button" onClick={showtext1}/>
                </div>


                <div id="parg1" className="hidden">
                <p>Our e-learning courses have been designed by both educational e-learning professionals and qualified pilots. Each course is split into sections and lessons with theory material which covers the CAA required syllabus along with video footage, photo imagery to ensure you are kept engaged and your different learning styles are met. Interactive activities throughout the course test your knowledge and learning. An instructor is appointed to your course who will follow you through your learning, answer any questions you may have and provide a weekly webinar.
                           <br></br>At the end of your course and when you are ready, you will have the option of booking your assessment with ASPEQ who are the national assessment body for Aviation in New Zealand. We can help you locate your nearest assessment location in New Zealand or overseas.</p>
                </div>

            </div>

           
           
            <div className="how">
                <div className="how2">
                  <h3>What platform is used to deliver the courses?</h3>
                  <ExpandMoreIcon id="button" onClick={showtext2}/>
                </div>
                <div id="parg2" className="hidden">
                <p>Our e-learning courses have been designed by both educational e-learning professionals and qualified pilots. Each course is split into sections and lessons with theory material which covers the CAA required syllabus along with video footage, photo imagery to ensure you are kept engaged and your different learning styles are met. Interactive activities throughout the course test your knowledge and learning. An instructor is appointed to your course who will follow you through your learning, answer any questions you may have and provide a weekly webinar.
                           <br></br>At the end of your course and when you are ready, you will have the option of booking your assessment with ASPEQ who are the national assessment body for Aviation in New Zealand. We can help you locate your nearest assessment location in New Zealand or overseas.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Question
