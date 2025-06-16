import axios from 'axios';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: '50825646-7ffda2e7b5c30b92a9f1b68eb',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
}
