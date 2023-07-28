const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_ORbLF13n0HinTQotWUb6Tq9waT8G01HWxdStvIOP8XeiI7Jl8Kfq6EryGMpVq5aB';


 function fetchBreeds() {
     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
         .then(response => {
             if (!response.ok) {
                 throw new Error(response.status)
             }
             return response.json();
         })
         .catch(() => {
      Notify.warning('Oops! Something went wrong! Try reloading the page!');
    });
    
} 
function fetchCatByBreed(breedId){
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
        .catch(() => {
      Notify.warning('Oops! Something went wrong! Try reloading the page!');
    });
}

export {fetchBreeds,fetchCatByBreed}
    
