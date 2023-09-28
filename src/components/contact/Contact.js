import React, { useState } from 'react';
import "./contact.scss"

const Contact = () => {
    const [values, setValues] = useState({
        userName:"",
        email:"",
        subject:"",
        message:""
    })
  return (
    <div className='contact__container'>
        <form>
            <div className='form__name-email'>
                <div className='name flex__column'>
                    <label>
                        Name
                    </label>
                    <input></input>
                </div>
                <div className='email flex__column'> 
                <label>
                    Email
                </label>
                    <input></input>
                </div>
            </div>
            <div className='form__subject flex__column'>
                <label>
                    Subject
                </label>
                <input></input>
            </div>
            <div className='form__message flex__column'>
                <label>
                    Message
                </label>
                <input></input>
            </div>
            <div>
                <button/>
            </div>
        </form>
    </div>
  )
}

export default Contact