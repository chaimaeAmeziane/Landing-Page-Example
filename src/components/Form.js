import '../css/Form.css';

const Form = () => {
    return (
        <>
          <div className="title">
              <h3>WANT TO TRY THIS OUT FOR FREE?
                  <br></br><span>COMPLETE THIS FORM FOR ACCESS TO A TRAIL ELEARNING ACCOUNT. ALL THE BEST!</span>
              </h3>
         </div>  
         <div className="wrapper">
             <div className="form-wrapper">
                 <form>
                     <div className="firstName">
                       <label>First Name</label>
                       <input type="text"/>
                     </div>
                     <div className="lastName">
                       <label>Last Name</label>
                       <input type="text"/>
                     </div>
                     <div className="phone">
                       <label>Phone</label>
                       <input type="text"/>
                     </div>
                     <div className="email">
                       <label>Email</label>
                       <input type="text"/>
                     </div>
                     <div className="age">
                       <label>Age</label>
                       <input type="text"/>
                     </div>
                     <div className="country">
                       <label>Country of citizenship</label>
                       <input type="text"/>
                     </div>
                     <div className="captcha">
                       <label>Please verify your request*</label>
                       <input></input>
                     </div>
                 </form>
                 <div className="buttondiv">
                       <button>Submit</button>
                 </div>
             </div>
         </div>
         <div className="paragafterform">
                <p>Wanting to enrol for our 2022 intakes? Applications are open now and will close 04 October 2021. We invite anyone interested in attending IAANZ next year to a tour of our facilities including classrooms and sim centre at a time convenient to yourself. At this time we can discuss the application process, course content and fees.
</p>
                <p>In addition we have two spaces available for our Jul 2021 intake. Applications for this are open now and will be subject to an interview. Contact us for more details.</p>
         </div>
        </>
    )
}

export default Form
