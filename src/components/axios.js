import Axios from 'axios';

export const axios = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json' })