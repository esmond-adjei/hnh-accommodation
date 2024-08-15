// import axios from 'axios';
import { axiosInstance } from './auth_api';

// const HOST_ADDR = 'https://esmondai.pythonanywhere.com'; //'http://localhost:8000';

// REGISTER API REQUEST
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/register/', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during registration.');
  }
};

// LOGIN API REQUEST
export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post('/api/token/', loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};

// HOSTEL LISTINGS API REQUEST
export const getHostelListings = async () => {
  try {
    const response = await axiosInstance.get('/api/hostels/');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the hostel listings.');
  }
}

// API REQUEST: Delete a hostel by ID
export const deleteHostel = async (hostelId) => {
  try {
    const response = await axiosInstance.delete(`/api/hostel/${hostelId}/delete`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while deleting the hostel.');
  }
};


// HOSTEL ROOM LISTINGS API REQUEST
export const getHostelRoomListings = async (hostelId) => {
  try {
    // console.log('Fetching room listings for hostel:', hostelId);
    const url = (!hostelId) ? // this is a choke; update in the future
    `/api/rooms/` :
     `/api/hostel/${hostelId}/rooms/`;

    console.log('Fetching Rooms for hostel:', hostelId);
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the hostel room listings.');
  }
}

export const getRoomListings = async () => {
  try {
    const response = await axiosInstance.get('/api/rooms/');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the room listings.');
  }
}

export const getHostelRooms = async (hostelId) => {
  if (!hostelId) {
    console.log(`hostel id undefined: ${hostelId}`);
    return;
  }
  try {
    console.log(`Fetching rooms for hostel: ${hostelId}`);
    const response = await axiosInstance.get(`/api/hostel/${hostelId}/rooms/`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || `An error occurred while fetching the hostel room listings for ${hostelId}`);
  }
}

// API Request to search rooms
export const searchRoom = async (searchData) => {
  try {
    const response = await axiosInstance.get('/api/search/rooms', { params: searchData });
    return response.data['roomResults'];
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred while searching for rooms.'
    );
  }
};


// API REQUEST: Create a new hostel
export const createHostel = async (hostelData) => {
  try {
    const response = await axiosInstance.post('/api/hostel/create/', hostelData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while creating the hostel.');
  }
};


// API Request to search hostels
export const searchHostels = async (searchData) => {
  try {
    const response = await axiosInstance.get('/api/search/hostels', { params: searchData });
    console.log('API Search response:', response.data);
    return response.data['hostelResults'];
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred while searching for hostels.'
    );
  }
};


// API Request to update a hostel
export const updateHostel = async (hostelId, updateData) => {
  try {
    const response = await axiosInstance.put(`/api/hostel/${hostelId}/update/`, updateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while updating the hostel.');
  }
};


// API REQUEST TO GET HOSTEL
export const getHostel = async (hostelId) => {
  try {
    console.log('Fetching hostel detail for hostel:', hostelId);
    const response = await axiosInstance.get(`/api/hostel/${hostelId}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the hostel.');
  }
}

// API REQUEST FOR GET COLLECTIONS
export const getCollections = async () => {
  try {
    const user_id = localStorage.user_id; // this is a choke; update in the future
    console.log('Fetching collections for user:', user_id);
    const response = await axiosInstance.get(`/api/collections/${user_id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching the collection.');
  }
}

// API REQUEST FOR ADD COLLECTIONS
export const addCollection = async (room_id) => {
  try {
    const user_id = localStorage.user_id; // this is a choke; update in the future
    console.log("Adding collections for user:", user_id)
    const response = await axiosInstance.post(`/api/collections/${user_id}/add/`,{room_id: room_id});
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while creating the collection.');
  }
}

// API REQUEST FOR DELETE COLLECTIONS
export const removeCollection = async (room_id) => {
  try {
    const user_id = localStorage.user_id; // this is a choke; update in the future
    console.log('Removing collections for user:', user_id);
    const response = await axiosInstance.post(`/api/collections/${user_id}/remove/`, {room_id: room_id});
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while deleting the collection.');
  }
}