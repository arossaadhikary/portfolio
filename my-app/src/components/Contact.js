import "../styles/Contact.css"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vbclywi', 'template_wdfxq4n', form.current, {
          publicKey: 'bl3fCZHgGQxO-6Bgy',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('Message sent.');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>      
    );
  };

export default Contact