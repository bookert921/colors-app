import axios from 'axios';

const baseURL = 'https://my-colors-api.herokuapp.com/'

export default axios.create({ baseURL });