#!/usr/bin/env node
/* const fetch = require('node-fetch');
const mdLinks = require('./lib/md-links');
const validate = require('./index');

const fs = require('fs');
const path = require('path');


let directory = process.cwd(); // muestra ruta de directorio
console.log(`Current directory: ${process.cwd()}`);
let dirBuf = Buffer.from(directory); // tranforma contenidos a string

fs.readdir(dirBuf, (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    files.forEach(file => {
      console.log(file);
      if (path.extname(file) === '.md') {
        // console.log(file);
        fs.readFile(file, 'utf8', function(err, data) {
          if (err) {
            console.log(err);
          } else {
            // console.log(mdLinks(data));
            mdLinks(data).forEach(element => {
              console.log(element.href);
              fetch(`${element.href}`).then((response)=>{
                console.log(response.url, response.status, response.statusText);
              });
              // console.log(element.href);
            });
          }
        });
      }
    });
  }
});*/