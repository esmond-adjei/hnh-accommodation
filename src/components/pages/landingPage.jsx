import React from 'react';
import logo from '../../assets/images/hnh-gradient-logo.png';
import '../../styles/landing_page.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <section className="header">
      <nav>
        <Link to="/">
          <img src={logo} alt="HnH" className='logo' />
        </Link> 

        <ul className="nav-links">
          <Link to="/about"><li className="cta-btn">Manager Panel</li></Link>
          <Link to="/sign-up"><li className="cta-btn">Sign up</li></Link>
          <Link to="/sign-in"><li className="cta-btn">Sign in</li></Link>
        </ul>
      </nav>

      <div className="hero">
        <h1>
          Find your <span>home</span> away from home
        </h1>
        
        <div className="hero-cta">
          <Link to="/sign-up" className="cta-btn">Sign Up</Link>
          <Link to="/hostels" className="cta-btn active">Browse Hostels <span>&rarr;</span></Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
