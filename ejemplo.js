fs.readdir(dirBuf, 'utf8', (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    files.forEach(file => {
      // console.log(file);
      if (path.extname(file) === '.md') { // selecciona solo los .md
        // console.log(file);
        fs.readFile(file, 'utf8', function(err, data) { // lee los archivos .md
          if (err) {
            console.log(err);
          } else {
            console.log(markdown(data));
            /* mdLinks(data).forEach(element => {
              console.log(file, element.href, element.text);
              fetch(`${element.href}`, { validate: true }).then((response)=>{
                console.log(response.url, response.statusText);
              });
              // console.log(element.href);
            });*/
          }
        });
      }
    });
  }
});


const fs = require('fs');
const path = require('path');

/*
 * Función que lee un archivo y retorna promesa con su contenido
 */
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        return reject(error);// Sabemos que hay un error, así que rechazamos la promesa
        // Si hay error, también nos aseguramos con return de no seguir ejecutando nada más en esta función
      }

      return resolve(data); // En caso de que no haya error resolvemos la promesa con los datos que recibimos en el callback
    });
  });
};

console.log('Process.argv > ' + JSON.stringify(process.argv));
console.log('CWD > ' + process.cwd()); // Me va a indicar donde se está ejecutando el archivo
const [, , ...userCLIArgs] = process.argv;
// Process.argv > ["/usr/bin/node","/home/fabian/Projects/Clases/2018-1-TallerPromesasPathTerminal/app.js"]
// Por cada espacio se hace un nuevo elemento en process.argv 
console.log('User args > ' + JSON.stringify(userCLIArgs));
// User args > ["HoliHoli","--validate","--stats"]
readFilePromise(path.join(process.cwd(), userCLIArgs[0])).then((data) => {
  console.log('Contenido del archivo > ' + JSON.stringify(data.split('\n')));
  // forEach((elemento, index)=>{})
}).catch((error) => {
  console.error('Error > ' + error);
});


markdown(data).forEach(element => {
  let line = (data).split('\n').forEach((element, index) => {
    // console.log('##', index);
  });
  // console.log(element.href, element.text);
  if ({ validate: true }) {
    fetch(`${element.href}`).then((response)=>{
      // console.log(response.url, response.statusText);
    });
    // console.log(element.href);
  }
});


// ejemplo promesas 2

/*
 * Función que lee un archivo y retorna promesa con su contenido
 */
function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            console.log("Chao");
            if (error) {
                return reject(error); //Sabemos que hay un error, así que rechazamos la promesa
                //Si hay error, también nos aseguramos con return de no seguir ejecutando nada más en esta función
            }
            return resolve(data); //En caso de que no haya error resolvemos la promesa con los datos que recibimos en el callback
        });
        //"Holi" aparecerá antes que "Chao", puesto que readFile es no bloqueante y toma mucho tiempo
        //Entonces, los resultados serán entregados a través de un callback
        console.log("Holi");
    });
};

function readDirPromise(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (error, files) => {
            if (error) {
                return reject(error);
            }
            return resolve(files);
        })
    });
}

console.log("Process.argv > " + JSON.stringify(process.argv));
console.log("CWD > " + process.cwd()); // Me va a indicar donde se está ejecutando el archivo
const [, , ...userCLIArgs] = process.argv;
//Process.argv > ["/usr/bin/node","/home/fabian/Projects/Clases/2018-1-TallerPromesasPathTerminal/app.js"]
//Por cada espacio se hace un nuevo elemento en process.argv 
console.log("User args > " + JSON.stringify(userCLIArgs));
//User args > ["HoliHoli","--validate","--stats"]
fs.readdir(process.cwd(), (error, files) => {
    console.log("Archivos > " + JSON.stringify(files));
    //Archivos > ["app.js"]
    const filePromises = files.map((aFile) => {
        return readFilePromise(aFile);
    });
    Promise.all(filePromises).then((filesData) => { }).catch((error) => {
        console.error("Error > " + error);
    });
});

let miVariableNoTanGlobal;
let miErrorNoTanGlobal;
readDirPromise(process.cwd())
    .then((dirFiles) => {
        const filePromises = dirFiles.map((aFile) => {
            return readFilePromise(aFile);
        });

        return Promise.all(filePromises); //Retorno promesa
    }).then((filesData) => { //Recibo los resultados de la promesa que se retornó en el then anterior
        miVariableNoTanGlobal = filesData;
    }).catch((error) => {
        console.error("Error > " + error);
        miErrorNoTanGlobal = error;
    }).finally(() => { // Es una función que se ejecuta después de TODO
        console.log("Variable no tan global > " + JSON.stringify(miVariableNoTanGlobal));
    });