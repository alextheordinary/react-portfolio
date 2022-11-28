import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  // TODO: Create a password variable and a function "setPassword" using useState
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [nameWarning, setNameWarning] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [messageWarning, setMessageWarning] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
    handleOnBlur(e);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }

    // If successful, we want to clear out the input after registration.
    setUserName('');
    setMessage('');
    setEmail('');
    setNameWarning('');
    setEmailWarning('');
    setMessageWarning('');
    setErrorMessage('');
    alert(`Hello ${userName}`);
  };

  const handleOnBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    // const inputValue = target.value;
    if (inputType === 'email' && !validateEmail(email)) {
      setEmailWarning('Valid email required');
    } else if (inputType === 'email') {
      setEmailWarning('');
    }
    if (inputType === 'userName' && !userName) {
      setNameWarning('Name required');
    } else if (inputType === 'userName') {
      setNameWarning('');
    }
    if (inputType === 'message' && !message) {
      setMessageWarning('Message required')
    } else if (inputType === 'message') {
      setMessageWarning('');
    }
  }

  return (
    <div>
      <h2 className='is-size-4 m-1'>Contact</h2>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="email"
          placeholder="Email"
          className='input is-primary m-1'
        />
        {emailWarning && (
          <div>
            <p className="help is-danger m-1">{emailWarning}</p>
          </div>
        )}
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="text"
          placeholder="Name"
          className='input is-primary m-1'
        />
        {nameWarning && (
          <div>
            <p className="help is-danger m-1">{nameWarning}</p>
          </div>
        )}
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="text"
          placeholder="Message"
          className='textarea is-primary m-1'
        />
        {messageWarning && (
          <div>
            <p className="help is-danger m-1">{messageWarning}</p>
          </div>
        )}
        <button type="button" onClick={handleFormSubmit} className='button m-1'>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="help is-danger m-1">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;