// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//         console.log(res);
//         console.log('Запит успішний');
//     return res.json();
//     }).then((data) =>
//     {
//         console.log(data);
//     })
//     .catch(err => {
//       console.log('Запит не успішний(')
//     console.warn(err);
//   });

// fetch('https://jsonplaceholder.typicode.com/users?_limit=200&_sort=username&username_like=^K')
//     .then(res => {
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
// ------------------------------------------------------------------------------------------------------------
// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "твій ключ";

// const BASE_URL = 'https://api.thecatapi.com/v1';

// const IMG_URL = 'https://api.thecatapi.com/v1/images/search';

// { 'x-api-key' : 'live_ ORbLF13n0HinTQotWUb6Tq9waT8G01 HWxdStvIOP8XeiI7Jl8Kfq6EryGMpV q5aB_API_KEY' }
// https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY

// const API_KEY = 'live_ ORbLF13n0HinTQotWUb6Tq9waT8G01 HWxdStvIOP8XeiI7Jl8Kfq6EryGMpV q5aB';

// const cat = fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(response => {
//     return (response.json());
// })
//     .then(image => {
//         console.log(image);
//     })
//     .catch(error => {
//         console.log(error);
//     })

