import axios from 'axios';

const baseURL = process.env.VUE_APP_BACKEND_API_URL || 'localhost:3000';

const client = axios.create({
  baseURL,
});

export default client;
