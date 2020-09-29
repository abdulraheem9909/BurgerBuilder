import axios from 'axios';
const instance = axios.create({
    baseURL:'https://react-my-burger-a180d.firebaseio.com/'
});
export default instance;