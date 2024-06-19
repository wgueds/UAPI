import axios from 'axios';
// import { envApi } from 'react-native-env-json';

const api = axios.create({
    baseURL: ''
});

export default api;