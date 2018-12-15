import axios from 'axios';

export function getFEED() {
  return axios.get('http://dev-jolse.iptime.org:9000/feed');
}