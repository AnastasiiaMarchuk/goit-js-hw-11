import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37740563-d8bfde705cf6e45a783b46982';
const PARAMETERS = 'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';


export const getImages = async function (searchValue, page) {
     const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchValue}&${PARAMETERS}&page=${page}`);
    if (!response.statusText ==="OK") {
    notifyFailure('Sorry, there are no images matching your search query. Please try again.');
    }

    return response.data;
  };






