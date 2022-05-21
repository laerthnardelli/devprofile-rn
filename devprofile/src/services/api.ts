import axios from 'axios';

import { API_BASE_URL } from '@env';

export const api = axios.create({
  baseURL: `${API_BASE_URL}`,
  //baseURL: 'http://192.168.15.47:3333',
});
