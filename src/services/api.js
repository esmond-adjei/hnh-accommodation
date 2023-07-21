import axios from 'axios';

// REGISTER API REQUEST
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/register/', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during registration.');
  }
};

// LOGIN API REQUEST
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login/', loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};

// HOSTEL LISTINGS API REQUEST
export const getHostelListings = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/hostels/');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the hostel listings.');
  }
}

// HOSTEL ROOM LISTINGS API REQUEST
export const getHostelRoomListings = async (hostelId) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/hostel/${hostelId}/rooms/`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the hostel room listings.');
  }
}

// API Request to search hostels
export const searchHostels = async (searchData) => {
  try {
    const response = await axios.get('http://localhost:8000/api/search/', { params: searchData });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred while searching for hostels.'
    );
  }
};
