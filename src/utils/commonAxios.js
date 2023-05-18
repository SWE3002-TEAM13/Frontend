import axios from 'axios';
import { deleteCookie } from './deleteCookie';

const commonAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  withCredentials: true,
});

commonAxios.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    if (error.response.status === 401) {
      deleteCookie('access_token');

      window.location.href = '/';

      return;
    }

    return Promise.reject(error);
  }
);

export { commonAxios };
