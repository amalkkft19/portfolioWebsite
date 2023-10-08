import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';
import { SvgLoader } from '../common/loaderSvg';
import "./contact.scss"
import TitleComponent from '../common/titleComponent';

const Contact = () => {
    const form = useRef();
    const [ loader, setLoader ] = useState(false);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        user_name:"",
        user_email:"",
        subject:"",
        message:""
    })
    const validateFormData = (data) => {
        // Perform your validation logic here
        // Return an object with field names as keys and error messages as values
        const errors = {};
        if (!data.user_name.trim()) {
          errors.username = 'Username is required';
        }
        if (!data.user_email.trim()) {
          errors.email = 'Email is required';
        }
        if (!data.message.trim()) {
          errors.message = 'Message is required';
        }
        
        return errors;
      };

    const onSubmitForm = (e) =>{
        setLoader(true);
        e.preventDefault();
        const validationErrors = validateFormData(values);
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, proceed with submission
           
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
              .then((result) => {
                  console.log(result.text);
                  setLoader(false);
              }, (error) => {
                  console.log(error.text);
                  setLoader(false);
              });
          } else {
            // Form is invalid, update the errors state
            setLoader(false);
            setErrors(validationErrors);
            setTimeout(() => {
                setErrors({}); 
            }, 5000);
          }

    }
    const onInputChange = (e,path) =>{
       e.preventDefault();
        setValues({...values,[path]:e.target.value });
    }
   
  return (
    <>
     <TitleComponent title="Get in Touch"/>
    <div id='contact' className='contact__container'>
        <form ref={form} onSubmit={(e)=>onSubmitForm(e)}>
            <div className='form__name-email'>
                <div className='name flex__column'>
                    <label>
                        Name
                    </label>
                    <input type="text" name="user_name" onChange={(e)=>onInputChange(e,"user_name")}></input>
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className='email flex__column'> 
                <label>
                    Email
                </label>
                    <input type="email" name="user_email" onChange={(e)=>onInputChange(e,"user_email")}></input>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
            </div>
            <div className='form__subject flex__column'>
                <label>
                    Subject
                </label>
                <input name="subject" onChange={(e)=>onInputChange(e,"subject")}></input>
            </div>
            <div className='form__message flex__column'>
                <label>
                    Message
                </label>
                <textarea name="message" onChange={(e)=>onInputChange(e,"message")}></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className='form__submit-btn_container'>
                <button className='form__submit-btn' type='submit'>{loader ?<SvgLoader className="spinner"/>:"Submit"}</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Contact