#!/usr/bin/env node
const Marked = require('marked');
const fs = require('fs'); // leer el archivo, leer la direccion
const path = require('path');
const fetch = require('node-fetch');


const markdown = function markdownLinkExtractor(markdown, line) {
  // Función necesaria para extraer los links usando marked
  // Recibe texto en markdown y retorna sus links en un arreglo
  const links = [];

  const renderer = new Marked.Renderer();

  // Taken from https://github.com/markedjs/marked/issues/1279
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

  renderer.link = function(href, title, text) {
    links.push({
      href: href,
      text: text,
      title: title,
      line: line
    });
  };
  renderer.image = function(href, title, text) {
    // Remove image size at the end, e.g. ' =20%x50'
    href = href.replace(/ =\d*%?x\d*%?$/, '');
    links.push({
      href: href,
      text: text,
      title: title,
      line: line
    });
  };
  Marked(markdown, {renderer: renderer});

  return links;
};


let directory = process.cwd(); // muestra ruta de directorio
console.log(`Current directory: ${process.cwd()}`);
let dirBuf = Buffer.from(directory); // tranforma contenidos a string

function mdLinks(myPath, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirBuf, (err, files) => {
      if (err) {
        // console.log(err.message);
        return reject(err);
      } else {
        return resolve(files.forEach(file => {
          console.log(file);
          if (path.extname(file) === '.md') { // selecciona solo los .md
            // console.log(file);
            fs.readFile(file, 'utf8', function(err, data) { // lee los archivos .md
              if (err) {
                // console.log(err);
              } else {
                // console.log(markdown(data));
                let line = data.split('\n').map((element, index) => markdown(element, index + 1));
                line = line.filter(element => element.length !== 0);
                let lineLinks = line.reduce((value1, value2) => value1.concat(value2));
                // console.log(lineLinks);
                lineLinks.forEach(element => {
                  console.log(file, element.line, element.text, element.href);
                });
              }
            });
          }
        }));
      }
    });
  });
}
module.exports = mdLinks;
