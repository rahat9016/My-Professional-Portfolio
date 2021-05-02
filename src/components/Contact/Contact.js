import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
const Contact = () => {
    const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm('gmail', 'template_gfixh3b', e.target, 'user_jua8yPUFD0ZuhHbevxCou')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return (
        <section className="contact-container" id="contact">
            <div className="contact-wrapper">
                <div className="contact-top-header">
                    <h1 className="fw-bolder font-color-ping">CONTACT US</h1>
                </div>
                <div>
                    <form onSubmit={sendEmail}>
                        <div className="formContainer">
                            <input className=" inputFiled" type="text" placeholder="First Name" name="name"/>
                            <input className=" inputFiled" type="text" placeholder="Last Name" name="name"/>
                            <input className=" inputFiled" type="text" placeholder="E-mail Address" name="email"/>
                            <input className=" inputFiled" type="text" placeholder="Place Number" name="number"/>
                        </div>
                    
                        <textarea className="textarea"rows="8" placeholder="Enter Your Messages" name="message"></textarea>
                        <input type="submit" className="submitBtn"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;