import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37740563-d8bfde705cf6e45a783b46982';
const PARAMETERS = 'image_type=photo&orientation=horizontal&safesearch=true'



export const getImages = async function (searchValue) {
     const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchValue}&${PARAMETERS}`);
    if (!response.statusText ==="OK") {
    notifyFailure('Sorry, there are no images matching your search query. Please try again.');
    }

    return response.data;
  };

export const notifyFailure = (errorMessage) => {
    Notify.failure(errorMessage, {
      timeout: 6000,
      width: '550px',
      borderRadius: '50px',
      clickToClose: true,
      position: 'center-top',
      fontSize: '18px',
    });
  };




