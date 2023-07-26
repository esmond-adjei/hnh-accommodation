import React, { useState } from "react";
import '../../styles/auth_form.css';
import logo from '../../assets/images/hnh-gradient-logo.png';

const AuthForm = ({ type }) => {
  const [isSignUp, setIsSignUp] = useState(type === 'sign-up');

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="a-wrapper">
      <div className="form-wrapper sign-up">
        <form action="">

          <div className="imageAndHeading">
            <img src={logo} alt="logo"/>
            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label htmlFor="">Username</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label htmlFor="">Email</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label htmlFor="">Password</label>
          </div>

          {isSignUp && (
            <div className="input-group">
              <input type="password" required />
              <label htmlFor="">Confirm Password</label>
            </div>
          )}

          <button type="submit" className="form-btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          
          <div className="sign-link">
            <p>
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <a
                href="/"
                className="signIn-link"
                onClick={isSignUp ? handleSignInClick : handleSignUpClick}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AuthForm;
