# Markdown Links - ExtractLink

_ExtractLink, es una libreria de NodeJs, que permite, la extracción de links, que se encuentran, dentro de archivos de textos, con extensión ".md", además, posee la opción, de revisar el estado en el cual se hayan,dichos links encontrados._

## Proyecto Markdown Links - ExtractLink 🚀

El Proyecto Markdown Links, es un desafio, otorgado por Laboratoria, a sus alummnas, en el cual consiste, en crear, una libreria, que extraiga links, de archivos de textos, con extensión ".md", como tambien, que posea la opción, de validar el estado en el cual se encuentran dichos links encontrados. Actualmente, este proyecto se encuentra en su version 1.0.0.

### Requisitos Previos 📋

_Instalar npm (sudo) npm install -g_
,Ademas, debes instalar, unas librerías/dependencias, en tu consola, con los siguente comandos:

```
$npm install --save marked
$npm install node-fetch --save
$npm install colors

```

### Instalación 🔧

_Pasos para poder integrar ExtractLink, a tus proyectos, debes seguir, los pasos a continuación:_

```
$npm install md-links 
```
Ejecuta el comando que se mostrara a continuacion, que mostrara la lista de links, del archivo seleccionado:

```
$ md-links <nombre-de-tu-archivo.md> 
```

Para validar el estado (200 OK ó 404 NOT FOUND), en cual, se encuentran los links, de dicho archivo, utiliza el siguiente comando:

```
$md-links <nombre-de-tu-archivo.md> --validate
```

## Ejemplo

```
$ md-links ./some/example.md
Ruta: ./some/example.md Linea:10 Titulo: algo http://algo.com/2/3/
Ruta: ./some/example.md Linea:48 Titulo: algo http://algo.com/2/3/
Ruta: ./some/example.md Linea:78 Titulo: algo http://algo.com/2/3/
```

```
$ md-links ./some/example.md --validate
Ruta: ./some/example.md Linea:10 http://algo.com/2/3/ Estado: 404 NOT FOUND
Ruta: ./some/example.md Linea:48 http://google.com Estado: 202 OK
```
## Documentación

[introduccion a Node.js](https://juanda.gitbooks.io/webapps/content/javascript/node.html)

[node.js - fs.readdir](https://www.youtube.com/watch?v=XFRQHhKTutI)

[node.js - file System](https://www.youtube.com/watch?v=1SvugIU1l0w&t=228s)

[node.js - file System](https://www.youtube.com/watch?v=5WcFzigivRI&t=468s)

[Crear libreria](https://juanda.gitbooks.io/webapps/content/javascript/crear_una_libreria_en_nodejs.html)

[ejemplo de funcion](http://stevehanov.ca/blog/index.php?id=127)

[path](https://nodejs.org/api/path.html)

[file System](https://nodejs.org/api/fs.html)

[file System](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
