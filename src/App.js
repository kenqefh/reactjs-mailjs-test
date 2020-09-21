import React from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function App() {
  function sendEmail(e) {
    e.preventDefault();

    console.log(e.target)
    emailjs.sendForm('gmail', 'template_01nfgtl', e.target, 'user_g4XXCwrb0uZb1RPJJcNCe')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  function sendEmailButton() {
    emailjs.init('user_g4XXCwrb0uZb1RPJJcNCe')
    let data = {
      from_name: 'From name',
      user_name: 'User name',
      user_email: 'elvisvega950@gmail.com',
      message: 'menssage content...'
    }
    emailjs.send('gmail', 'template_01nfgtl', data)
  }

  return (<>
    <form className="contact-form" onSubmit={sendEmail}>

      <input type='hidden' name='from_name' value='ElvisFrank' />

      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <hr />
    <button type='button' onClick={sendEmailButton}>Send Mail</button>
  </>
  );
}

export default App;
