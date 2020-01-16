const request = require('request');

const fetchBreedDescription = (breed, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) =>{
    if (error !== null) {
      cb(error, null)
    }
    const data = JSON.parse(body);
    if (body === '[]') {
      cb(null, 'Breed not found!')
    } else { 
      const description = data[0].description;  
      cb(null, description)
    }  
  });
}

module.exports = fetchBreedDescription

