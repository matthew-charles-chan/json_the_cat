const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) =>{
  if (error) {
    console.log(error);
    return;
  }
  if (body === '[]') {
    console.log('Breed not found!');
    return;
  }
  const data = JSON.parse(body);
  const description = data[0].description;
  console.log(description);
});