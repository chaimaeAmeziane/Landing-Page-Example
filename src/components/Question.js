import '../css/Question.css';
import {useState} from 'react'
import { ExpandMore } from '@material-ui/icons';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const Question = () => {
    const [selected,setSelected] = useState(null)
    const toggle = (i) =>{
        if(selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }
   const data = [
       {
                question: 'How does E-Learning work?',
                answer : 'Our e-learning courses have been designed by both educational e-learning professionals and qualified pilots. Each course is split into sections and lessons with theory material which covers the CAA required syllabus along with video footage, photo imagery to ensure you are kept engaged and your different learning styles are met. Interactive activities throughout the course test your knowledge and learning. An instructor is appointed to your course who will follow you through your learning, answer any questions you may have and provide a weekly webinar. At the end of your course and when you are ready, you will have the option of booking your assessment with ASPEQ who are the national assessment body for Aviation in New Zealand. We can help you locate your nearest assessment location in New Zealand or overseas',
       },
       {
                question: 'What platform is used to deliver the courses?',
                answer : '',
       }
   ]
    return (
        <div>
            <div className="title">
            All your questions answered
            </div>
      
           <div className="wrapper">
             <div className="accordion">
                 {data.map((item,i) => (
                     <div className="item">
                         <div className="title1" onClick={()=>toggle(i)}>
                            <h6>{item.question}</h6>
                            <span>{selected === i ? <ExpandLessIcon /> : <ExpandMore />}</span>
                         </div>
                         <div className={selected === i ? 'content show' : 'content'}>
                             {item.answer}
                         </div>
                     </div>
                 ))}

             </div>

           </div>

        </div>
    )
}

export default Question
