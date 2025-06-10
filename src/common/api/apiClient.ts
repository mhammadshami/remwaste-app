import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://app.wewantwaste.co.uk/api',
});

export default apiClient;