import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../App.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2pmkzzn', 'template_1tiujg9', form.current, {
            publicKey: 'B-0J_2_wk6Mvb-7dT',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Email sent !✅");
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="responsive-div" id="contact-msg">
        <div className="content">
          <p>
                Fill the below form to directly send  me an email.
          </p>
        </div>
      </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" name="user_name" required />
          <input type="email" placeholder="Your Email" name="user_email" required />
          
          <textarea placeholder="Your Message" name="message"  required></textarea>
          <button type="submit" value="Send">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
