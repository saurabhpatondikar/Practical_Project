import axios from 'axios';
import Config from './config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function httpGet(url) {
  // alert(url)
  return instance.get(url);
}

