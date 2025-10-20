import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/';

export default axios.create({
    baseURL: apiBaseUrl
});