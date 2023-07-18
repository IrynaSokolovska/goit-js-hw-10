const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

const IMG_URL = 'https://api.thecatapi.com/v1/images';
// // https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

const API_KEY = 'live_ORbLF13n0HinTQotWUb6Tq9waT8G01HWxdStvIOP8XeiI7Jl8Kfq6EryGMpVq5aB';

function fetchBreeds() {
    return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(response => {
    return response.json();
  });
}

function fetchCatByBreed(breedId) {    
    return fetch(`${IMG_URL}/${breedId}`).then(response => {
        return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };



