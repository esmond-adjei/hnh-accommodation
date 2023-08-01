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

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    ContentType: 'application/json',
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
  
          // Update access token in local storage
          localStorage.setItem('access_token', newAccessToken);
  
          // Update headers with the new access token
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
  
          // Retry the original request with the new access token
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
    localStorage.setItem('refresh_token', response.data.refresh);
    localStorage.setItem('username', loginData.username);
    localStorage.setItem('user_id', response.data.user_id);

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
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('user_id', response.data.user_id);

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred during registration.');
    }
};


// logout user
export const logoutUser = () => {
    console.log('Logging out user...');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
  };


// IS LOGGED IN
export const isLoggedIn = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) return false;
  
    // Decode and verify the access token
    const base64Url = accessToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedToken = JSON.parse(atob(base64));
  
    // Check if the access token is expired
    const expirationTime = decodedToken.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    return expirationTime > currentTime;
  };
  

export { refreshToken };