// const BASE_URL = 'https://api.thecatapi.com/v1';

// const IMG_URL = 'https://api.thecatapi.com/v1/images/search';
// // https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

// const API_KEY = 'live_ ORbLF13n0HinTQotWUb6Tq9waT8G01 HWxdStvIOP8XeiI7Jl8Kfq6EryGMpV q5aB';

// export default function fetchBreeds() {
//      return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
//          .then(response => {
//              if (!response.ok) {
//                  throw new Error(response.status)                 
//              }
//              console.log(response);
//              return response.json();
//          });    
// } 

// export default function fetchCatByBreed(breedId){
//     return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status)
//             }
//             return response.json();
//         });
// }

// export {fetchBreeds,fetchCatByBreed}


// // function fetchBreeds() {
// //     return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(response => {
// //     return response.json();
// //   });
// // }

// // function  fetchCatByBreed(breedId) {
// //     return fetch(`${IMG_URL}/${breedId}`).then(response => {
// //     return response.json();
// //   });
// // }

// // export { fetchBreeds, fetchCatByBreed };
