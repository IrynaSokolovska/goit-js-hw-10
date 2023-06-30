fetchBreeds("https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи").then((o=>{if(!o.ok)throw new Error(o.status);return console.log(o),console.log("Запит успішний"),o.json()})).then((o=>{console.log(o)})).catch((o=>{console.log("Запит не успішний("),console.warn(o)}));
//# sourceMappingURL=index.1deb7d6e.js.map
