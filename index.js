#!/usr/bin/env node
const path = require('path'); 
const mdLinks = require('./lib/md-links');
const options = require('./lib/md-links');
const colors = require('colors');
const [,, ...userArg] = process.argv; // posicion de ruta escrita por el usuario
console.log(colors.red('Ruta Entregada: ') + userArg);
const archivo = userArg[0];
let pathFileAbs = path.resolve(archivo);
mdLinks(pathFileAbs);