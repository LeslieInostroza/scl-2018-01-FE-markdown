#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mdLinks = require('./lib/md-links');


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
            //console.log(mdLinks(data));
            mdLinks(data).forEach(element => {
              console.log(element.href);
              
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