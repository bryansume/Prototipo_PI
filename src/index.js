const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);
app.use(morgan("dev"));

app.listen(app.get("port"), () => {
  console.log("Hola desde el puerto " + app.get("port"));
});

//Para que funcione esta 2º ruta es necesario añadir la llamada del módulo recién creado en el archivo inicial (PROTOTIPO/src/index.js) es decir este mismo archivo.
app.use(require("./routes/index"));
