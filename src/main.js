import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const nameSearch = document.querySelector('input[name="search-text"]');
const btn = document.querySelector('button[type="submit"]');

nameSearch.classList.add('input-form');
btn.classList.add('btn-form');

form.addEventListener('submit', changeSubmit);

function changeSubmit(event) {
  event.preventDefault();

  const valueName = nameSearch.value.toLowerCase().trim();

  if (valueName === '') {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'pink',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();
  getImagesByQuery(valueName)
    .then(res => {
      console.log(res);

      const dataHits = res.hits;
      if (dataHits.length === 0 || valueName === '') {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'pink',
          position: 'topRight',
        });
        return;
      }
      createGallery(res.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
  event.target.reset();
}
