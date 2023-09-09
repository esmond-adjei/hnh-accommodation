import React, { useState } from "react";
import './styles/auth_form.css';
import logo from '../assets/images/hnh-gradient-logo.png';
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser, logoutUser } from '../services/auth_api';

const AuthForm = ({ formType, prevStateUpdate }) => {
  const history = useNavigate();
  const isSignUp = formType === '/sign-up';
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_type: "guest",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      logoutUser();
      const res = isSignUp ? await registerUser(formData) : await loginUser(formData);

      console.log(res);
      prevStateUpdate && prevStateUpdate();
      history("/rooms");
      window.location.reload();
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
      <div className="form-wrapper sign-up">
        <form onSubmit={handleSubmit}>

          <div className="imageAndHeading">
            <img src={logo} alt="logo"/>
            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
          </div>

          {error && <p className="error-message">
            {/* {error} */}
             Error, check your Username and Password
            </p>}

          <div className="input-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="username">Username</label>
          </div>
          {isSignUp && 
          <div className="input-group">
            <input
              type="email"
              name="email" // Add the name attribute
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          }

          <div className="input-group">
            <input
              type="password"
              name="password" // Add the name attribute
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          {isSignUp && (
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword" // Add the name attribute
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          )}

          <button type="submit" className="form-btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          
          <div className="sign-link">
            <p>
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
                <Link to={isSignUp ? "/sign-in" : "/sign-up"}
                  className="signIn-link"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </Link>
            </p>
          </div>

        </form>
      </div>
  );
};

export default AuthForm;