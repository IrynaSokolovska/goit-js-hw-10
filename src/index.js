import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const selectors = {
  select: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
  error: document.querySelector('.error'),
  loader: document.querySelector('.js-loader'),
};

selectors.select.addEventListener('change', handlerChange);

function handlerChange(evt) {
  selectors.error.hidden = true;
  selectors.container.innerHTML = '';

  fetchCatByBreed(evt.target.value)
    .then(data => {
      const markup = data[0].breeds
        .map(
          ({ description, temperament, name }) => `<div>
        <img src="${data[0].url}" alt="${name}" width="300">
        <h2>${name}</h2>
        <span>${description}</span>
        <br>
        <span><span class="temperament">Temperament:</span> ${temperament}</span>
      </div>`
        )
        .join(``);

      selectors.container.innerHTML = markup;
    })
    .catch(() => {
      selectors.error.hidden = false;
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
      selectors.loader.classList.remove('loader');
    });
}

fetchBreeds()
  .then(data => {
    const markup = data
      // .filter(({ reference_image_id }) => reference_image_id)
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');

    selectors.select.insertAdjacentHTML('beforeend', markup);

    new SlimSelect({
      select: selectors.select,
    });
  })
  .catch(() => {
    selectors.error.hidden = false;
    selectors.container.innerHTML = '';
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  })
  .finally(() => {
    selectors.loader.classList.remove('loader');
    selectors.select.hidden = false;
  });

// ----------------------------------------------------
// import { fetchCatByBreed } from './js/cat-api';

// const selectEl = document.querySelector('.breed-select');
// const loaderEl = document.querySelector('.loader');
// const errorEl = document.querySelector('.error');
// const catInfoEl = document.querySelector('.cat-info');

// fetchBreeds(selectEl);

// selectEl.addEventListener('input', choiceCatBreed);

// function choiceCatBreed(evt) {
//   loaderEl.classList.remove('is-hidden');
//   catInfoEl.classList.add('is-hidden');
//   fetchCatByBreed(evt.target.value);
// }

// export { catInfoEl };
// export { selectEl };
// export { loaderEl };
// export { errorEl };
// export { newSelect };
// --------------------------------------------------------------------
