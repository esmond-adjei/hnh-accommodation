import React from "react";
import '../../styles/auth_form.css';
import logo from '../../assets/images/hnh-gradient-logo.png';
import { Link } from "react-router-dom";


const AuthForm = ({ formType }) => {

  const isSignUp = formType === '/sign-up' ? true : false;

  return (
    <div className="main-container a-wrapper">
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
                  <Link to={isSignUp ? "/sign-in" : "/sign-up"}
                    className="signIn-link"
                  >
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AuthForm;
