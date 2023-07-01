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