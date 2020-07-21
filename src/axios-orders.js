import axios from 'axios';

const instance = axios.create({
    baseURL:'https://my-burger-app-2a495.firebaseio.com/'
});
export default instance;