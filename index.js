#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const [, , ...args] = process.argv;

fs.readdir(`${args}`, function(err, files) {
  if (err) {
    console.log('Error reading files: ', err);
  } else {
    for (let i = 0; i < files.length; i++) {
      // read its contents.
      if (path.extname(files[i] === '.md')) {
        console.log(files);
      }
    }
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