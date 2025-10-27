import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/name.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    const newErrors = { ...errors };
    if (field === "name") {
      const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
      if (!value.match(nameRegex)) {
        newErrors.name = "Full name required (first and last)";
      } else {
        delete newErrors.name;
      }
    }
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.match(emailRegex)) {
        newErrors.email = "Invalid email format";
      } else {
        delete newErrors.email;
      }
    }
    if (field === "password") {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!value.match(passwordRegex)) {
        newErrors.password =
          "Min 8 chars, upper, lower, number & symbol required";
      } else {
        delete newErrors.password;
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate("name", name);
    validate("email", email);
    validate("password", password);

    if (Object.keys(errors).length === 0 && name && email && password) {
      alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
    } else {
      alert("Please fix errors before submitting.");
    }
  };

  return (
    <div className="container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit}>
        {/* NAME - show only for Sign Up */}
        {!isLogin && (
          <div className="input-row">
            <div className="input-with-icon">
              <img
                src={user_icon}
                alt="user icon"
                className="input-icon"
              />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  validate("name", e.target.value);
                }}
              />
            </div>
            <span className="error">{errors.name}</span>
          </div>
        )}

        {/* EMAIL */}
        <div className="input-row">
          <div className="input-with-icon">
            <img src={email_icon} alt="email icon" className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validate("email", e.target.value);
              }}
            />
          </div>
          <span className="error">{errors.email}</span>
        </div>

        {/* PASSWORD */}
        <div className="input-row">
          <div className="input-with-icon">
            <img
              src={password_icon}
              alt="password icon"
              className="input-icon"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validate("password", e.target.value);
              }}
            />
          </div>

          <span className="error">{errors.password}</span>

          {/* Forgot Password Link */}
          <div className="forgot-password">
            Forgot Password? <a href="#">Click Here.</a>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="button-container">
          <div
          className="toggle-buttons">
            <button
              type="button"
              className={isLogin ? "active" : ""}
              onClick={() =>setIsLogin(true)}>
                Login </button>
             <button
              type="button"
              className={isLogin ? "active" : ""}
              onClick={() =>setIsLogin(false)}>
                Sign Up </button>   
          </div>
         
          <button type="submit">{isLogin ? "Submit" : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;