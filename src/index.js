// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "твій ключ";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

import {fetchBreeds,fetchCatByBreed} from './js/services/cat-api';

import { creatMarkup, creatMarkupCat } from './js/services/createMarkup';


import refs from "./js/refs";



const sel = new SlimSelect({
  select: '.breed-select'
});

const { selektEl, catInfo, loaderEl } = refs;


fetchBreeds()
    .then(element =>
    {sel.setData(creatMarkup(element));
    catInfo.innerHTML =" "}
    )
  .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
  });

selektEl.addEventListener('change', onSelectCat);

function onSelectCat(e) {
  const id = e.target.value
  console.log(id);
 
  loaderEl.classList.remove('js-style');
  
  fetchCatByBreed(id).then(data =>
  // console.log(data))
    catInfo.innerHTML = (creatMarkupCat(data))
  )
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => 
      loaderEl.classList.add('js-style'))  
};
