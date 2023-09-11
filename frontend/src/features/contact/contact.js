import React from 'react';
import '../../assests/css/contact.css';

const Contact = () => {
  return (
    <section>
      <form action="submit_form.php" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea>

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
