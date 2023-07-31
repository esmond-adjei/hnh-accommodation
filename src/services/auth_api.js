import axios from 'axios';

const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post('http://localhost:8000/api/token/refresh/', {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    localStorage.setItem('your_access_token_storage_key', newAccessToken);
    return newAccessToken;
  } catch (error) {
    throw new Error('Failed to refresh access token.');
  }
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('your_refresh_token_storage_key');

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
    console.log('Login response:', response.data, '\nAccess token:', accessToken);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};

export { refreshToken };
