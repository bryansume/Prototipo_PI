const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), leerPuerto());

app.get("/rutaGet", function (req, res) {
  console.log("Hola en la consola node, desde una llamada en el servidor");
  res.send("Hola desde una web llamada en el servidor");
});

function leerPuerto() {
  console.log("Hola desde el puerto " + app.get("port"));
}

//Para que funcione esta 2º ruta es necesario añadir la llamada del módulo recién creado en el archivo inicial (PROTOTIPO/src/index.js) es decir este mismo archivo.
app.use(require("./routes/index"));
