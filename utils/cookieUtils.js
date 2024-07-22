import Cookies from 'js-cookie';

// Function to set a cookie
export const setCookie = (key, value, options = {}) => {
  try {
    Cookies.set(key, value, options);
  } catch (error) {
    console.error('Error setting cookie:', error);
  }
};

// Function to get a cookie
export const getCookie = (key) => {
  try {
    return Cookies.get(key);
  } catch (error) {
    console.error('Error getting cookie:', error);
    return null;
  }
};

// Function to remove a cookie
export const removeCookie = (key, options = {}) => {
  try {
    Cookies.remove(key, options);
  } catch (error) {
    console.error('Error removing cookie:', error);
  }
};
