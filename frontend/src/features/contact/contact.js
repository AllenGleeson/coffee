import React, { useState } from 'react';
import '../../assets/css/contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className='contact-section'>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required/>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" cols="50" required></textarea>

          <input className='cstm-btn' type="submit" value="Submit" />
        </form>
      ) : (
        <div className="thank-you-message">
          <h1>Thank you for your message! We will be back to you as soon as possible.</h1>
        </div>
      )}
    </section>
  );
};

export default Contact;
