#!/usr/bin/env node
const mdLinks = require('./lib/md-links');

const [, , ...args] = process.argv;
if (require.main === module) {  
  let options = {};
  if (args.includes('--validate')) {
    mdLinks.validate = true;  
  }
  mdLinks(args[0], options).then((data) => {
    // linksData.forEach(element => {    
    // let resultData = '';
  }).catch((error) => {
    console.error(error);
  });
}