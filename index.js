#!/usr/bin/env node
const path = require('path'); 
const mdLinks = require('./lib/md-links');
const options = require('./lib/md-links');
const [,, ...userArg] = process.argv; // posicion de ruta escrita por el usuario
console.log('AQUI' + userArg);
const archivo = userArg[0];
let pathFileAbs = path.resolve(archivo);
options.validate = userArg[1];
mdLinks(pathFileAbs);