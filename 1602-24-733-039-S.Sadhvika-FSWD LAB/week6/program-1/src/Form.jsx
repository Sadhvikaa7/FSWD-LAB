import './Form.css';
function Form(){
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Form Submiited Successfully!");
    };
    return(
       <div className="form-container">
        <h2>Form in React</h2>
        <form onSubmit={handleSubmit}>
            <label>First Name*</label>
            <input type="text" placeholder="Enter First Name" required/>
            <label>Last Name*</label>   
            <input type="text" placeholder="Enter Last Name" required/>
            <label>Email*</label>
            <input type="email" placeholder="Enter Email" required/>
            <label>Contact*</label>
            <input type="tel" placeholder="Enter Contact Number" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required/>
            <fieldset>
                <legend>Gender</legend>
                <div className="options">
                <label>
                    <input type="radio" name="gender" value="male" required/>
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" required/>
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" required/>
                    Other
                </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Your Best Subject*</legend>
                <div className="options">
                    <label>
                        <input type="checkbox"name="subject" value="FSWD" />
                        FSWD
                    </label>
                    <label>
                        <input type="checkbox"name="subject" value="CN" />
                        CN
                    </label>
                    <label>
                        <input type="checkbox"name="subject" value="IOT" />
                        IOT
                    </label>
                    <label>
                        <input type="checkbox"name="subject" value="AI" />
                        AI
                    </label>
                </div>

            </fieldset>
            Upload Resume
            <input type="file" accept=".pdf,.doc,.docx" required/>
            Enter Url*
            <input type="url" placeholder='Enter url' required/>
            Select your choice
            <select defaultValue="">
                <option value="" disabled>Select your ans</option>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
                <option value="option 3">Option 3</option>
                </select>
            About*
            <textarea placeholder='About your self' rows='4' required/>
            <div className="buttons">
                <button type ="reset" className="reset-btn">Reset</button>
                <button type="submit" className='submit-btn'>Submit</button>
            </div>

        </form>
        </div>
    );
}
export default Form;