import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5i540s', 'template_3xey2wk', form.current, 'oQaEjm0PWgnWRzg4D')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="products-heading">
    <h2>Questions? Contact Us:</h2>
    <div className="hero-banner-container">
    <form ref={form} onSubmit={sendEmail}>
      <label className="beats-solo">Name:</label>
      <input type="text" name="user_name" />
      <br/>
      <label className="beats-solo">Email:</label>
      <input type="email" name="user_email" />
      <br/>
      <label className="beats-solo">Message:</label>
      <textarea name="message" />
      <br/>
      <input className="beats-solo" type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
};

export default Home