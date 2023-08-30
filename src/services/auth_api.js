import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/';
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_ID_KEY = 'user_id';
const USERNAME_KEY = 'username';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
      if (refreshToken) {
        try {
          const response = await axios.post(`${API_BASE_URL}token/refresh/`, {
            refresh: refreshToken,
          });
          const newAccessToken = response.data.access;
          localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
          error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(error.config);
        } catch (refreshError) {
          logoutUser();
          throw new Error('Failed to refresh access token.');
        }
      } else {
        logoutUser();
      }
    }
    return Promise.reject(error);
  }
);

export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post('token/', loginData);
    const accessToken = response.data.access;

    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
    localStorage.setItem(USERNAME_KEY, loginData.username);
    localStorage.setItem(USER_ID_KEY, response.data.user_id);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};

export const registerUser = async (registrationData) => {
  try {
    const response = await axiosInstance.post('register/', registrationData);
    const accessToken = response.data.access;

    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
    localStorage.setItem(USERNAME_KEY, response.data.username);
    localStorage.setItem(USER_ID_KEY, response.data.user_id);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred during registration.');
  }
};

export const logoutUser = () => {
  console.log('Logging out user...');
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(USER_ID_KEY);
  delete axiosInstance.defaults.headers.common['Authorization'];
};


// IS LOGGED IN
function unixTimeToHumanTime(unixTimestamp) {
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  // const humanDateFormat = dateObject.toLocaleString();
  return dateObject;
}

function checkTokenExpire(accessToken) {
  // Decode and verify the access token
  const base64Url = accessToken.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const decodedToken = JSON.parse(atob(base64));

  // Check if the access token is expired
  const expirationTime = decodedToken.exp;
  const currentTime = Math.floor(Date.now() / 1000);
  console.log('Access token expires at:', (unixTimeToHumanTime(expirationTime) - unixTimeToHumanTime(currentTime)).toLocaleString());
  return expirationTime > currentTime;
}

export const isLoggedIn = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  return !!accessToken; // Returns true if access token exists, indicating user is logged in
};