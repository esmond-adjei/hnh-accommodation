import { useState } from 'react';
import { registerUser, loginUser } from './api';


export const useRegisterState = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('guest'); // Default value set to 'guest'

  const handleRegistration = async () => {
    const userData = {
      username: username,
      email: email,
      password: password,
      user_type: userType,
    };

    try {
      const response = await registerUser(userData);
      // Handle the registration response data, if needed
      console.log('Registration response:', response);
    } catch (error) {
      // Handle registration error, e.g., display an error message to the user
      console.error('Registration error:', error.message);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    userType,
    setUserType,
    handleRegistration,
  };
};

export const useLoginState = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await loginUser(loginData);
      // Handle the login response data, if needed
      console.log('Login response:', response);
      return response;
    } catch (error) {
      // Handle login error, e.g., display an error message to the user
      console.error('Login error:', error.message);
      return error.message;
    }
  };

  return { username, setUsername, password, setPassword, handleLogin };
};
