#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const markdown = require('./lib/md-links');
const fetch = require('node-fetch');
const mdLinks = require('./lib/md-links');

if (require.main === module) {
  const [, , ...args] = process.argv;

  mdLinks(args[0]).then((link) => {
    /* if (link.length === 0) {
      console.error('Error');
    }*/
  }).catch((error) => {
    console.error(error);
  });
}