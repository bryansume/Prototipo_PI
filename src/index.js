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
