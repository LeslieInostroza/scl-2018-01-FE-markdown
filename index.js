#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mdLinks = require('./lib/md-links');
const fetch = require('node-fetch');


let directory = process.cwd(); // muestra ruta de directorio
console.log(`Current directory: ${process.cwd()}`);
let dirBuf = Buffer.from(directory); // tranforma contenidos a string

fs.readdir(dirBuf, (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    files.forEach(file => {
      // console.log(file);
      if (path.extname(file) === '.md') { // selecciona solo los .md
        // console.log(file);
        fs.readFile(file, 'utf8', function(err, data) { // lee los archivos .md
          if (err) {
            console.log(err);
          } else {
            // console.log(mdLinks(data));
            mdLinks(data).forEach(element => {
              console.log(file, element.href, element.text);
              fetch(`${element.href}`, { validate: true }).then((response)=>{
                console.log(response.url, response.status, response.statusText);
              });
              // console.log(element.href);
            });
          }
        });
      }
    });
  }
});
/* var ext = path.extname('/leslie/Laboratoria/ClasesFrontEnd/Proyectos/scl-2018-01-FE-markdown/README.md');
console.log(ext);*/
/** , function(error, data) {
        if (error) {
          console.log('Error: ', error);
        } else {
          const ext = fs.readFile(data);
          console.log(ext);
        }
      }); */