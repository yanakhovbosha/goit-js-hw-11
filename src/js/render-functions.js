import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-list-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}"/>
          </a>
          <ul class="list-item">
            <li class="item">
              <h3 class="list-item-title">Likes</h3>
              <p class="list-item-text">${likes}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Views</h3>
              <p class="list-item-text">${views}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Comments</h3>
              <p class="list-item-text">${comments}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Downloads</h3>
              <p class="list-item-text">${downloads}</p>
            </li>
          </ul>
        </li>
        `
    )
    .join('');
}

export function changeGallery(images) {
  gallery.insertAdjacentHTML('beforeend', createGallery(images));
  const simpleLightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  simpleLightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
