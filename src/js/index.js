import {getImages} from './pixabay.js'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('input');
const gallery = document.querySelector('.gallery')


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37740563-d8bfde705cf6e45a783b46982';
const PARAMETERS = 'image_type=photo&orientation=horizontal&safesearch=true'
let searchValue = " "

searchForm.addEventListener('submit', onSubmit);



function onSubmit(event){
    event.preventDefault();
    let searchValue = searchInput.value;
    getImages(searchValue).then(data => createMarkup(data)).catch(err => console.log(err));
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function createMarkup(data){

    const markup = data.hits.map((image) => {
        return `<div class="photo-card">
        <a class="gallery__link" href = ${image.largeImageURL}>
      <img src="${image.previewURL}" alt="${image.tags}" loading="lazy" /></a>
      <div class="info">
        <p class="info-item">
        <b>Likes ${image.likes}</b></p>
        <p class="info-item"><b>Views ${image.views}</b></p>
        <p class="info-item"><b>Comments ${image.comments}</b></p>
        <p class="info-item"><b>Downloads ${image.downloads}</b></p>
      </div>
    </div>`
 }).join('')

gallery.innerHTML = markup;
}


