let directory = process.cwd(); // muestra ruta de directorio
console.log(`Current directory: ${process.cwd()}`);
let dirBuf = Buffer.from(directory); // tranforma contenidos a string

function mdLinks() {
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