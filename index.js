#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// const mdLinks = require('./lib/md-links');
let directory = 'TextFiles';
let dirBuf = Buffer.from(directory);

fs.readdir(dirBuf, (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(files);
  }  
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    if (path.extname(files[i]) === '.txt') {
      console.log(files[i]);
      fs.readFile(files[i], 'utf8', function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  }  
});


// const [, , ...args] = process.argv;

/* fs.readdir(`${args}`, function(err, files) {
  if (err) {
    console.log('Error reading files: ', err);
  }
  console.log(files);
  
  for (let i = 0; i < files.length; i++) {
    // read its contents.
    if (path.extname(files[i]) === '.md') {
      console.log(files[i]);
      fs.readFile(`${files[i]}`, 'utf-8', function(error, data) {
        if (error) {
          console.log('error', error);
        }
        console.log(data);
      });
    }
  }
});*/


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