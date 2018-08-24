const fetch = require('node-fetch');

fetch(`${mdLinks}`).then((response) => {
  console.log(response);
});