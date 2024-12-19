const { Router } = require("express");
const router = Router();

//Raiz
router.get("/rutaGetConRouter", function (req, res) {
  console.log(
    "Hola en la consola node, desde una llamada en el servidor, la raiz"
  );
  res.send("Bienvenido a Prototipo");
});

//2ª ruta
router.get("/ruta2", function (req, res) {
  res.send("Hola desde la segunda ruta");
});

module.exports = router;
