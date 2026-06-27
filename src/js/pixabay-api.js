import axios from 'axios';

const API_KEY = '56464018-9d065431ef651fdc70593a5c2';
const BASE_URL = 'https://pixabay.com/api/';
export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  return axios.get(BASE_URL, { params: searchParams }).then(responce => {
    return responce.data;
  });
}
