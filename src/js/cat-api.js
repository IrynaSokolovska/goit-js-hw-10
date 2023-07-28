const BASE_URL = 'https://api.thecatapi.com';
const API_KEY = 'live_ORbLF13n0HinTQotWUb6Tq9waT8G01HWxdStvIOP8XeiI7Jl8Kfq6EryGMpVq5aB';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import { catInfoEl } from '..';
import { loaderEl } from '..';
import { errorEl } from '..';
import { selectEl } from '..';
import { newSelect } from '..';

function fetchBreeds(selectList) {
  fetch(`${BASE_URL}/v1/breeds`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    })
    .then(data => {
      errorEl.classList.add('is-hidden');
      loaderEl.classList.add('is-hidden');
      selectEl.classList.remove('is-hidden');
      const listId = data
        .map(el => `<option value="${el.id}">${el.name}</option>`)
        .join('');
      selectList.insertAdjacentHTML('beforeend', listId);
    })
    .catch(() => {
      loaderEl.classList.add('is-hidden');
      selectEl.classList.add('is-hidden');
      Notify.warning('Oops! Something went wrong! Try reloading the page!');
    });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/v1/images/search?limit=1&breed_ids=${breedId}&api_key=${API_KEY}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      loaderEl.classList.add('is-hidden');
      catInfoEl.classList.remove('is-hidden');
      return data;
    })
    .then(img => {
      const catImg = `
    <div class="cat-thomb"> <img src="${img[0].url}" alt="${img[0].breeds[0].name}"><div class="cat-info-js"><h2 class="title">${img[0].breeds[0].name}</h2><p>${img[0].breeds[0].description}</p><p><span class="temperament">Temperament:</span> ${img[0].breeds[0].temperament}</p></div></div>`;
      return (catInfoEl.innerHTML = catImg);
    })
    .catch(() => {
      Notify.warning('Oops! Something went wrong! Try reloading the page!');
    });
}

export { fetchBreeds };
export { fetchCatByBreed };
