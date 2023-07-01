// import Notiflix from 'notiflix';
// import axios from "axios";

// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_ ORbLF13n0HinTQotWUb6Tq9waT8G01 HWxdStvIOP8XeiI7Jl8Kfq6EryGMpV q5aB";

// import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
// axios.defaults.headers.common["x-api-key"] = "твій ключ";

// fetchBreeds('https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи')
// .then(res => {
//         if (!res.ok) {
//             throw new Error(res.status);
//         }
//         console.log(res);
//         console.log('Запит успішний');

//         return res.json();
        
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Запит не успішний(')
//         console.warn(err);
//     });


// import { fetchBreeds, fetchCatByBreed } from "./js/services.js/cat-api";
// import { createMarkup, createMarkupCat } from "./js/services.js/createmarkup";
// import createMarkup from "./js/creatMurkup";
// import refs from "../refs";
// --------------------------------------------------------------------
// import {fetchBreeds} from "./js/services.js/cat-api";
// import { fetchCatByBreed } from "./js/services.js/cat-api";
// import { createMarkup } from "./js/services.js/createmarkup";
// import { createMarkupCat } from "./js/services.js/createmarkup";


// const { selektEl, catInfo, loaderEl } = refs;

// import SlimSelect from 'slim-select';
// const sel = new SlimSelect({
//   select: '.breed-select'
// })
 
// import Notiflix from 'notiflix';

// fetchBreeds()
//     .then(element =>
//     {
//       sel.setData(createMarkup(element));
//     catInfo.innerHTML =" "}
//     )
//   .catch(error => {
//       Notiflix.Notify.failure(
//         'Oops! Something went wrong! Try reloading the page!'
//       );
//   });
// console.log(fetchBreeds);

// selektEl.addEventListener('change', onSelectCat)

// function onSelectCat(e) {
//   const id = e.target.value
//   console.log(id);
 
//   loaderEl.classList.remove('js-style')
  
//   fetchCatByBreed(id).then(data =>
//   // console.log(data))
//     catInfo.innerHTML = (createMarkupCat(data))
//   )
//     .catch(error => {
//       Notiflix.Notify.failure(
//         'Oops! Something went wrong! Try reloading the page!'
//       );
//     })
//     .finally(() => 
//       loaderEl.classList.add('js-style'))
  
// }
// ----------------------------------------------------------------------
// const BASE_URL = 'https://api.thecatapi.com/v1';

// const IMG_URL = 'https://api.thecatapi.com/v1/images/search';
// const API_KEY = 'live_ ORbLF13n0HinTQotWUb6Tq9waT8G01 HWxdStvIOP8XeiI7Jl8Kfq6EryGMpV q5aB';

// fetchBreeds('https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи')
// .then(res => {
//         if (!res.ok) {
//             throw new Error(res.status);
//         }
//         console.log(res);
//         console.log('Запит успішний');

//         return res.json();
        
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Запит не успішний(')
//         console.warn(err);
//     });

// function fetchBreeds() {
//     return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(response => {
//     return response.json();
//   });
// }

// function fetchBreeds(`${BASE_URL}?api_key=${API_KEY}`)
// .then(res => {
//     console.log(res);
// })

// fetchBreeds()
//     .then(element =>
//     {
//       sel.setData(createMarkup(element));
//     catInfo.innerHTML =" "}
//     )
//   .catch(error => {
//       Notiflix.Notify.failure(
//         'Oops! Something went wrong! Try reloading the page!'
//       );
//   });
// console.log(fetchBreeds);