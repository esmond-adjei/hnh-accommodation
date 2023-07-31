import axios from 'axios';

const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post('http://localhost:8000/api/token/refresh/', {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    localStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch (error) {
    throw new Error('Failed to refresh access token.');
  }
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  ContentType: 'application/json',
  headers: {
    Authorization: localStorage.getItem('access_token')
        ? `Bearer ${localStorage.getItem('access_token')}`
        : null,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refresh_token');

    if (error.response.status === 401 && refreshToken && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken(refreshToken);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        throw new Error('Failed to refresh access token.');
      }
    }

    return Promise.reject(error);
  }
);

export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post('token/', loginData);
    const accessToken = response.data.access;
    localStorage.setItem('access_token', accessToken);
    console.log('Login response:', response.data, '\nAccess token:', accessToken);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};


//  Registeration API Request
export const registerUser = async (registrationData) => {
    try {
      console.log('Registration data:', registrationData);
      const response = await axiosInstance.post('register/', registrationData);
      const accessToken = response.data.access;
      localStorage.setItem('access_token', accessToken);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred during registration.');
    }
};


// logout user
export const logoutUser = () => {
    console.log(`User ${localStorage.getItem('access_token')} before logout`);
    console.log('Logging out user...');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    console.log(`User ${localStorage.getItem('access_token')} after logout`);
  };

export { refreshToken };