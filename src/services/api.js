import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/register/', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during registration.');
  }
};

// api.js
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login/', loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};
