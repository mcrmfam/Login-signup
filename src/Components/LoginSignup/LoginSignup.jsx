import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/name.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  
  const [action, setAction] = useState("Sign Up");
  
    const validateName = (e) => {
    const name = e.target.value.trim();
    const errorSpan = document.getElementById('name-error');

    if (name === "") {
      errorSpan.textContent = "Name is required";
     } else {      errorSpan.textContent = "";
    }
  };
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
          <img src={user_icon} alt='' />
          <input type='text' placeholder='Name' id="contact-name" onKeyUp={validateName}/>
          <span id="name-error"></span>
        </div>}
        

        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email' />
          <span id="email.error"></span>
        </div>

        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Password' />
          <span id="password.error"></span>
        </div>
      </div>
          {action==="Sign Up"?<div></div>:<div className='forgot-password'>
        Lost Password? <span>Click Here!</span>
      </div>}
      

      <div className='submit-container'>
        <span id="submit.error"></span>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
  <script src='script.js'></script>
};

export default LoginSignup;
