import React, { useState } from "react";

export default function Form() {
  const [value, setIsSignUp] = useState(true);

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
            <img src="./hnh.png" alt="" srcset="" />
            <h2>{value ? "Sign Up" : "Sign In"}</h2>
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
          {value && (
            <div className="input-group">
              <input type="password" required />
              <label htmlFor="">Confirm Password</label>
            </div>
          )}
          <button type="submit" className="btn">
            {value ? "Sign Up" : "Sign In"}
          </button>
          <div className="sign-link">
            <p>
              {value ? "Already have an account? " : "Don't have an account? "}
              <a
                href="#"
                className="signIn-link"
                onClick={value ? handleSignInClick : handleSignUpClick}
              >
                {value ? "Sign In" : "Sign Up"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
