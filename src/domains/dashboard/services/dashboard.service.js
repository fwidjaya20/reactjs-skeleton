import axios from 'axios';

export const FETCH_USERS = () => (
    axios.get(`https://jsonplaceholder.typicode.com/users`, {})
);