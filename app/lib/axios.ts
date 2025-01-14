import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:80/api/v1',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

axios.interceptors.request.use(
    (config) => {
        // Check for token in localStorage
        const token = localStorage.getItem('auth_token');

        // If token is found, set it in the Authorization header
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios
