import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';

const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

fetchBreeds(selectEl);

selectEl.addEventListener('input', choosingCatBreed);

function choosingCatBreed(evt) {
  loaderEl.classList.remove('is-hidden');
  catInfoEl.classList.add('is-hidden');
  fetchCatByBreed(evt.target.value);
}

export { catInfoEl };
export { selectEl };
export { loaderEl };
export { errorEl };
export { newSelect };
