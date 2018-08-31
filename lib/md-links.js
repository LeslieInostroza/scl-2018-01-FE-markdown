#!/usr/bin/env node
const fs = require('fs'); // leer el archivo, leer la direccion
const path = require('path'); 
const fetch = require('node-fetch');
const markdown = require('./markdown');
const options = require('../index');
const colors = require('colors');
// let directory = process.cwd(); // muestra ruta de directorio
// let dirBuf = Buffer.from(directory); // tranforma contenidos a string
console.log(`Directorio: ${process.cwd()}`);
console.log('Ruta de Archivo: ' + JSON.stringify(process.argv));
options.validate = process.argv[3]; // posicion de ruta


function mdLinks(pathFileAbs) {
  if (path.extname(pathFileAbs) === '.md') { // selecciona solo los .md
    fs.readFile(pathFileAbs, 'utf8', function(err, data) { // lee los archivos .md
      if (err) {
        console.log(err);
      } else {
        // console.log(markdown(data));
        let line = data.split('\n').map((element, index) => markdown(element, index + 1));
        line = line.filter(element => element.length !== 0);
        let lineLinks = line.reduce((value1, value2) => value1.concat(value2));
        lineLinks.forEach(element => {
          if (options.validate === '--validate') {
            fetch(`${element.href}`).then((response) => {
              console.log('Ruta: ' + pathFileAbs.blue, element.line, response.url, response.status,
                response.statusText);
            }).catch((err) => {
              console.error('link no encontrado ' + err);
            });
          } else {
            console.log(colors.red('Ruta: ') + pathFileAbs.blue, element.line, element.text.magenta, element.href.green);
          }
        });
      }
    });
  }
}
module.exports = mdLinks;