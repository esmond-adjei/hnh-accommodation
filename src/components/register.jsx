import React from 'react';
import {useRegisterState} from '../services/states';

const Register = () => {
  const { 
    username, 
    setUsername, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    userType, 
    setUserType, 
    handleRegistration 
  } = useRegisterState();
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleRegistration();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}  className='devForm'>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="guest">Guest</option>
          <option value="manager">Hostel Manager</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
