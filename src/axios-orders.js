import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-e6291.firebaseio.com/'
});

export default instance;