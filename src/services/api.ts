import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sig.grafjb.com.br/api_app.php'
})

export { api };