fetchBreeds("https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи").then((function(o){if(!o.ok)throw new Error(o.status);return console.log(o),console.log("Запит успішний"),o.json()})).then((function(o){console.log(o)})).catch((function(o){console.log("Запит не успішний("),console.warn(o)}));
//# sourceMappingURL=index.491c2b9b.js.map
