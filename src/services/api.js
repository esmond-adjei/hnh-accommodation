import { axiosInstance } from './auth_api';

const formatErrorMessage = (error) => {
  // console.error("X_ERROR:", error, typeof error);

  // if (error === undefined && !navigator.onLine) {
  //   return 'It seems you are offline. Please check your network connection.';
  // }
  
  const status = error.response?.status;
  const message = error.message || 'An unexpected error occurred.';

  switch (status) {
    case 400:
      return `❌ Bad Request: ${message}`;
    case 401:
      return `😼 Unauthorized: ${message}`;
    case 403:
      return `👎 Forbidden: ${message}`;
    case 404:
      return `😟 Not Found: ${message}`;
    case 500:
      return `🚒 Server Error: ${message}`;
    default:
      return message;
  }
};

// REGISTER API REQUEST
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/register/', userData);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred during registration');
  }
};

// LOGIN API REQUEST
export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post('/api/token/', loginData);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred during login');
  }
};

// HOSTEL LISTINGS API REQUEST
export const getHostelListings = async () => {
  try {
    const response = await axiosInstance.get('/api/hostels/');
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while fetching the hostel listings');
  }
};

// API REQUEST: Delete a hostel by ID
export const deleteHostel = async (hostelId) => {
  try {
    const response = await axiosInstance.delete(`/api/hostel/${hostelId}/delete`);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while deleting the hostel');
  }
};

// HOSTEL ROOM LISTINGS API REQUEST
export const getHostelRoomListings = async (hostelId) => {
  try {
    const url = hostelId ? `/api/hostel/${hostelId}/rooms/` : `/api/rooms/`;
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while fetching the hostel room listings');
  }
};

export const getRoomListings = async () => {
  try {
    const response = await axiosInstance.get('/api/rooms/');
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while fetching the room listings');
  }
};

export const getHostelRooms = async (hostelId) => {
  if (!hostelId) {
    console.log(`hostel id undefined: ${hostelId}`);
    return;
  }
  try {
    const response = await axiosInstance.get(`/api/hostel/${hostelId}/rooms/`);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || `An error occurred while fetching the hostel room listings for ${hostelId}`);
  }
};

// API Request to search rooms
export const searchRoom = async (searchData) => {
  try {
    const response = await axiosInstance.get('/api/search/rooms', { params: searchData });
    return response.data['roomResults'];
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while searching for rooms.');
  }
};

// API REQUEST: Create a new hostel
export const createHostel = async (hostelData) => {
  try {
    const response = await axiosInstance.post('/api/hostel/create/', hostelData);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while creating the hostel.');
  }
};

// API Request to search hostels
export const searchHostels = async (searchData) => {
  try {
    const response = await axiosInstance.get('/api/search/hostels', { params: searchData });
    return response.data['hostelResults'];
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while searching for hostels.');
  }
};

// API Request to update a hostel
export const updateHostel = async (hostelId, updateData) => {
  try {
    const response = await axiosInstance.put(`/api/hostel/${hostelId}/update/`, updateData);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while updating the hostel.');
  }
};

// API REQUEST TO GET HOSTEL
export const getHostel = async (hostelId) => {
  try {
    const response = await axiosInstance.get(`/api/hostel/${hostelId}/`);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while fetching the hostel.');
  }
};

// API REQUEST FOR GET COLLECTIONS
export const getCollections = async () => {
  try {
    const user_id = localStorage.user_id; // this is a choke; update in the future
    const response = await axiosInstance.get(`/api/collections/${user_id}/`);
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while fetching the collection');
  }
};

// API REQUEST FOR ADD COLLECTIONS
export const addCollection = async (room_id) => {
  try {
    const user_id = localStorage.user_id; // this is a choke; update in the future
    const response = await axiosInstance.post(`/api/collections/${user_id}/add/`, { room_id });
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while adding the collection');
  }
};

// API REQUEST FOR DELETE COLLECTIONS
export const removeCollection = async (room_id) => {
  try {
    const user_id = localStorage.user_id; // this is a choke; update in the future
    const response = await axiosInstance.post(`/api/collections/${user_id}/remove/`, { room_id });
    return response.data;
  } catch (error) {
    throw new Error(formatErrorMessage(error) || 'An error occurred while removing the collection');
  }
};
