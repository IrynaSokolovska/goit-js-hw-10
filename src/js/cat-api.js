const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const IMEGES = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_ ORbLF13n0HinTQotWUb6Tq9waT8G01 HWxdStvIOP8XeiI7Jl8Kfq6EryGMpV q5aB';

function fetchBreeds() {
    return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(response => {
    return response.json();
  });
}

function  fetchCatByBreed(breedId) {
    return fetch(`${IMEGES}/${breedId}`).then(response => {
    return response.json();
  });
}




export { fetchBreeds, fetchCatByBreed };
