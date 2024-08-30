import React from 'react';
import { BadgeCentIcon, DiffIcon, SearchCheckIcon } from 'lucide-react';
import './styles/landingPage.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import logo from '../assets/images/hnh-gradient-logo.png';
import SlidingImage from '../components/slidingImages';

const testimonialData = [
  {
    image: '/images/testimonials/enock-jackson-kwofie.png',
    name: 'Enock Jackson',
    title: 'Computer Engineering Student',
    text: `Finding a place to stay during my university years was stressful until I found this platform. 
           The options were plenty, and I could easily compare them to find the best one. 
           The whole process was seamless, and I moved into my new hostel without any issues.`
  },
  {
    image: '/images/testimonials/tetteh-magnus.png',
    name: 'Tetteh Magnus',
    title: 'Computer Engineering Student',
    text: `This platform was a lifesaver! I was able to quickly find a hostel that fit my budget and had all the amenities I needed. 
           The booking process was straightforward, and the customer service was top-notch. 
           I highly recommend it to anyone looking for student accommodation.`
  },
  {
    image: '/images/testimonials/kwame-oduro.jpg',
    name: 'Kwame Oduro',
    title: 'Computer Engineering',
    text: `I was really impressed with the ease of finding a hostel that matched my preferences. 
           The detailed listings and reviews made it easy to choose the right place. 
           I've been living in my chosen hostel for a few months now, and it's been a great experience.`
  },
  {
    image: '/images/testimonials/ignatus-anim.png',
    name: 'Ignatus Anim',
    title: 'Computer Engineering Student',
    text: `The campus hostel finder made what used to be a tedious task into something so simple. 
           I found a great place close to my university, and the booking process was incredibly smooth. 
           I'm really satisfied with my choice.`
  },
  {
    image: '/images/testimonials/esmond-adjei.jpg',
    name: 'Esmond Adjei',
    title: 'Computer Science Student',
    text: `As an international student, finding a hostel before arriving in the country was challenging. 
           This platform helped me secure a spot in a lovely hostel with great amenities. 
           It made my transition to campus life so much easier!`
  },
  {
    image: '/images/testimonials/isaac-amponsah.png',
    name: 'Isaac Amponsah',
    title: 'Computer Engineering Student',
    text: `I was worried about finding a decent place to stay for my final year, but this platform had so many great options. 
           I quickly found a hostel that matched all my criteria, and the booking process was hassle-free. 
           Highly recommended!`
  }
];

const LandingPage = () => {
  return (
    <div>
      {/* Header Section */}
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

      <div className="hero ">
        <h1>
          Find your <span>home</span> away from home
        </h1>
        
        <div className="hero-cta">
          <Link to="/sign-up" className="cta-btn">Sign Up</Link>
          <Link to="/hostels" className="cta-btn active">Browse Hostels <span>&rarr;</span></Link>
        </div>
      </div>
    </section>

      {/* About Us Section */}
      <section className="bg-gray-100 p-8 md:p-16 flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-prose m-auto md:m-0">
            HnH is your one-stop solution for finding the perfect student accommodation. 
            We connect you with a variety of options to ensure you find the best place to call your second home.
          </p>
        </div>
        <img src='/images/people-black.png' alt="About Us" className="w-full max-w-sm md:w-[400px] mt-8 md:mt-0" />
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-8 space-y-8 md:space-y-0">
            <div className="border-2 border-gray-200 p-8 rounded-lg hover:bg-greyish">
              <SearchCheckIcon size={72} className='m-auto mb-2' style={{ stroke: 'var(--secondary-color)' }} />
              <h3 className="text-xl font-medium text-gray-800 mb-4">1. Search</h3>
              <p className="text-gray-600">Use our search tool to find hostels that meet your criteria.</p>
            </div>

            <div className="border-2 border-gray-200 p-8 rounded-lg hover:bg-greyish">
              <DiffIcon size={72} className='m-auto mb-2' style={{ stroke: 'var(--secondary-color)' }} />
              <h3 className="text-xl font-medium text-gray-800 mb-4">2. Compare</h3>
              <p className="text-gray-600">Compare different hostels based on location, price, and amenities.</p>
            </div>

            <div className="border-2 border-gray-200 p-8 rounded-lg hover:bg-greyish">
              <BadgeCentIcon size={72} className='m-auto mb-2' style={{ stroke: 'var(--secondary-color)' }} />
              <h3 className="text-xl font-medium text-gray-800 mb-4">3. Book</h3>
              <p className="text-gray-600">Reserve your room easily through our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary-color-darkest py-16 px-4 md:px-8">
        <div className="container mx-auto text-center text-whitish">
          <h2 className="text-3xl font-semibold text-whitish mb-12">What Our Users Say</h2>
          
          <SlidingImage data={testimonialData} />
          
        </div>
      </section>

      {/* Footer Section */}
    <Footer />
    </div>
  );
};

export default LandingPage;
