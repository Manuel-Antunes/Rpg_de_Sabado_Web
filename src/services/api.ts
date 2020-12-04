import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fechamentofacil.com/',
});
export default api;
