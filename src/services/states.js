import { useState, useEffect } from 'react';
import { 
  registerUser, 
  loginUser, 
  getHostelRoomListings, 
  getHostelListings,
  searchHostels,
  searchRoom,
  deleteHostel,
  createHostel,
  updateHostel,
  getHostel,
} from './api';

// REGISTRATION STATE
export const useRegisterState = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('guest');

  const handleRegistration = async () => {
    const userData = {
      username: username,
      email: email,
      password: password,
      user_type: userType,
    };

    try {
      const response = await registerUser(userData);
      console.log('Registration response:', response);
    } catch (error) {
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

// LOGIN STATE
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

// ROOM LISTINGS
export const useRoomListings = (hostelId) => {
  const [roomListings, setRoomListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getRoomListings = async () => {
      try {
        if (hostelId !== '__SEARCH__') { // this is a choke; update in the future
          const listings = await getHostelRoomListings(hostelId);
          setRoomListings(listings);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getRoomListings();
  }, [hostelId]);

  return { roomListings, setRoomListings, loading, error };
};

// HOSTEL LISTINGS STATE
export const useHostelListingsState = () => {
  const [hostelListings, setHostelListings] = useState([]);
  const [selectedHostelId, setSelectedHostelId] = useState(null);

  const fetchHostelListings = async () => {
    try {
      const response = await getHostelListings();
      setHostelListings(response);
    } catch (error) {
      console.error('Error fetching hostel listings:', error.message);
    }
  };

  useEffect(() => {
    fetchHostelListings();
  }, []);

  const handleHostelDelete = async (hostelId) => {
    try {
      await deleteHostel(hostelId);
      setHostelListings((prevHostelListings) =>
        prevHostelListings.filter((hostel) => hostel.id !== hostelId)
      );
      setSelectedHostelId(null);
    } catch (error) {
      console.error('Error deleting hostel:', error.message);
    }
  };


  return { 
    hostelListings, 
    setHostelListings, 
    selectedHostelId,
    handleHostelDelete,
    fetchHostelListings,
    setSelectedHostelId
  };
};


// HOSTEL CREATE STATE
export const useHostelCreateState = () => {
  const [hostelFormData, setHostelFormData] = useState({ name: '', location: '', description: '' });

  const handleCreateFormSubmit = async () => {
    try {
      const newHostel = await createHostel(hostelFormData);
      console.log('New hostel created:', newHostel);
    } catch (error) {
      console.error('Error creating hostel:', error.message);
    }
  };

  return { 
    hostelFormData,
    setHostelFormData,
    handleCreateFormSubmit
  };
};


// HOSTEL UPDATE STATE
export const useHostelUpdateState = (hostelId) => {
  const [updateData, setUpdateData] = useState({ name: '', location: '', description: '' });
  
  useEffect(() => {
  const fetchHostelData = async () => {
    try {
      const response = await getHostel(hostelId);
      // Set the initial state of the updateData with the existing hostel data
      setUpdateData({
        name: response.name,
        location: response.location,
        description: response.description,
      });
    } catch (error) {
      console.error('Error fetching hostel data:', error.message);
    }
  };

    fetchHostelData();
  }, [hostelId]); // Add hostelId as a dependency

  const handleUpdateFormSubmit = async () => {
    try {
      const response = await updateHostel(hostelId, updateData);
      console.log('Hostel update response:', response);
    } catch (error) {
      console.error('Hostel update error:', error.message);
    }
  };

  return { updateData, setUpdateData, handleUpdateFormSubmit };
};



// SEARCH STATE
export const useSearchState = (category) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const searchData = {q: query};

    try {
      const response = (category === 'hostel') ? await searchHostels(searchData) : await searchRoom(searchData);
      console.log('Search response:', response);
      return response[`${category}Results`];
    } catch (error) {
      console.error('Search error:', error.message);
      return [];
    }
  };

  return { query, setQuery, handleSearch };
};
