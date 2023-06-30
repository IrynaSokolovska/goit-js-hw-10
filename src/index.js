// import Notiflix from 'notiflix';

// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "твій ключ";

// live_ ORbLF13n0HinTQotWUb6Tq9waT8G01 HWxdStvIOP8XeiI7Jl8Kfq6EryGMpV q5aB

// https://api.thecatapi.com/v1/breeds

// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

// fetchCatByBreed(breedId)

fetchBreeds('https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи')
.then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        console.log(res);
        console.log('Запит успішний');

        return res.json();
        
    })
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log('Запит не успішний(')
        console.warn(err);
    });



