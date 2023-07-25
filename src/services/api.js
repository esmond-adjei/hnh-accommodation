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

// API REQUEST: Delete a hostel by ID
export const deleteHostel = async (hostelId) => {
  try {
    const response = await axios.delete(`http://localhost:8000/api/hostel/${hostelId}/delete`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while deleting the hostel.');
  }
};


// HOSTEL ROOM LISTINGS API REQUEST
export const getHostelRoomListings = async (hostelId) => {
  try {
    console.log('Fetching room listings for hostel:', hostelId);
    const url = (!hostelId) ? // this is a choke; update in the future
    `http://localhost:8000/api/rooms/` :
     `http://localhost:8000/api/hostel/${hostelId}/rooms/`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the hostel room listings.');
  }
}

// API Request to search rooms
export const searchRoom = async (searchData) => {
  try {
    const response = await axios.get('http://localhost:8000/api/search/rooms', { params: searchData });
    console.log('API Search response:', response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred while searching for rooms.'
    );
  }
};


// API REQUEST: Create a new hostel
export const createHostel = async (hostelData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/hostel/create/', hostelData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while creating the hostel.');
  }
};


// API Request to search hostels
export const searchHostels = async (searchData) => {
  try {
    const response = await axios.get('http://localhost:8000/api/search/hostels', { params: searchData });
    console.log('API Search response:', response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred while searching for hostels.'
    );
  }
};


// API Request to update a hostel
export const updateHostel = async (hostelId, updateData) => {
  try {
    const response = await axios.put(`http://localhost:8000/api/hostel/${hostelId}/update/`, updateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while updating the hostel.');
  }
};


// API REQUEST TO GET HOSTEL
export const getHostel = async (hostelId) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/hostel/${hostelId}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the hostel.');
  }
}