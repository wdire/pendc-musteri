import axios from 'axios';
import { API_URL } from './constants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    token: '87D84C3B6E92D82E73FCD4A1DC78F95E',
  },
});

export default api;
