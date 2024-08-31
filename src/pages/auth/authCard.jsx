import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./authCard.css";
import { loginUser, registerUser } from "../../services/auth_api";

const AuthCard = () => {
  const navigate = useNavigate();
  const authType = window.location.pathname;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_type: "guest",
  });

  const [signInForm, setSignInForm] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignInChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignInForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await registerUser({
        username: signUpForm.username,
        email: signUpForm.email,
        password: signUpForm.password,
        user_type: "guest",
      });
      navigate("/rooms");
    } catch (err) {
      setError(err.message || "An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginUser({
        username: signInForm.username,
        password: signInForm.password,
      });
      navigate("/hostels");
    } catch (err) {
      setError(err.message || "An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  if (authType === "/sign-up") {
    return (
      <div className="auth-card">
        <Link to="/">
        <img src="/chf-logo.png" className="mx-auto" alt="logo" width={56} />
        </Link>
        
        <h2>Sign up</h2>

        {error && <p className="error-message text-center my-2">{error}</p>}

        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={signUpForm.username}
            onChange={handleSignUpChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={signUpForm.email}
            onChange={handleSignUpChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={signUpForm.password}
            onChange={handleSignUpChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={signUpForm.confirmPassword}
            onChange={handleSignUpChange}
            required
          />

          <input
            type="submit"
            className="button-cta"
            value={loading ? 'Signing up...' : 'Sign up'}
            disabled={loading}
          />
        </form>
        <div className="small-text">
          <small>
            Already have an account? <Link to="/sign-in" className="text-primary-color">Sign in</Link>.
          </small>
          <br />
          <small style={{fontSize: "10px"}}>
            By signing up, you agree to our <Link to="/">Terms</Link> and{" "}
            <Link to="/">Privacy Policy</Link>.
          </small>
        </div>
      </div>
    );
  } else if (authType === "/sign-in") {
    return (
      <div className="auth-card">
        <Link to="/">
        <img src="/chf-logo.png" className="mx-auto" alt="logo" width={56} />
        </Link>
        
        <h2>Sign in</h2>

        {error && <p className="error-message text-center my-2">{error}</p>}

        <form onSubmit={handleSignIn}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={signInForm.username}
            onChange={handleSignInChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={signInForm.password}
            onChange={handleSignInChange}
            required
          />
          <div>
            <input
              type="checkbox"
              id="remember-me"
              name="rememberMe"
              checked={signInForm.rememberMe}
              onChange={handleSignInChange}
            />
            <label htmlFor="remember-me"> Remember me</label>
          </div>
          <input
            type="submit"
            className="button-cta"
            value={loading ? 'Signing in...' : 'Sign in'}
            disabled={loading}
          />
        </form>
        <div className="small-text">
          <small>
            Do not have an account? <Link to="/sign-up" className="text-primary-color">Sign up</Link> for free.
          </small>
        </div>
      </div>
    );
  }
};

export default AuthCard;