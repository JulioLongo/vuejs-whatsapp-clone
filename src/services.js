import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
});

export default const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};
