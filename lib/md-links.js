#!/usr/bin/env node
const fs = require('fs'); // leer el archivo, leer la direccion
const path = require('path'); 
const fetch = require('node-fetch');
const markdown = require('./markdown');
const options = require('../index');

let directory = process.cwd(); // muestra ruta de directorio
console.log(`Current directory: ${process.cwd()}`);
let dirBuf = Buffer.from(directory); // tranforma contenidos a string
console.log('process.argv: ' + JSON.stringify(process.argv));
options.validate = process.argv[2];

function mdLinks() {
  fs.readdir(dirBuf, (err, files) => {
    if (err) {
      console.log(err.message);
    } else {
      files.forEach(file => {
        if (path.extname(file) === '.md') { // selecciona solo los .md
          fs.readFile(file, 'utf8', function(err, data) { // lee los archivos .md
            if (err) {
              console.log(err);
            } else {
              // console.log(markdown(data));
              let line = data.split('\n').map((element, index) => markdown(element, index + 1));
              line = line.filter(element => element.length !== 0);
              let lineLinks = line.reduce((value1, value2) => value1.concat(value2));
              lineLinks.forEach(element => {
                if (options.validate) {
                  fetch(`${element.href}`).then((response) => {
                    console.log(element.line, response.url, response.status,
                      response.statusText);
                  });
                } else {
                  console.log(file, element.line, element.text, element.href);
                }
              });
            }
          });
        }
      });
    }
  });
}
module.exports = mdLinks;