const { Router } = require("express");
const router = Router();

//Raiz
router.get("/rutaGetConRouter", (req, res) => {
  console.log(
    "Hola en la consola node, desde una llamada en el servidor, la raiz"
  );
  res.send("Bienvenido a Prototipo");
});

//2ª ruta
router.get("/ruta2", (req, res) => {
  console.log("Hola en la consola node, desde la segunda ruta");
  res.send("Hola desde la segunda ruta");
});

//3ª ruta
router.get("/ruta3", (req, res) => {
  console.log("Hola en la consola node, desde la tercera ruta");
  res.send("Hola desde la tercera ruta");
});

//4ª ruta
router.get("/ruta4", (req, res) => {
  console.log("Hola en la consola node, desde la cuarta ruta");
  res.send("Hola desde la cuarta ruta");
});

//5ª ruta
router.get("/ruta5", (req, res) => {
  console.log("Hola en la consola node, desde la quinta ruta");
  res.send("Hola desde la quinta ruta");
});

module.exports = router;
