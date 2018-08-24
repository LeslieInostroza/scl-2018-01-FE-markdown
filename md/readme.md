JAJAJAJA2
[google.com](http://www.tutorialsteacher.com/nodejs/nodejs-module-exports)

fs.readdir(dirBuf, (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(files);
  }  
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    if (path.extname(files[i]) === '.md') {
      console.log(files[i]);
      fs.readFile(files[i], 'utf8', function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(mdLinks(data));
        }
      });
    }
  }
});
