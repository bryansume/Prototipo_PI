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

//Creación de la primera ruta con POST
router.post("/POST1", (req, res) => {
  console.log("Enviada primera petición al POST");
  res.send("Es la primera ruta con POST!");
});
//Segunda ruta POST
router.post("/POST2", (req, res) => {
  console.log("Hola desde POST2");
  res.send("Es la segunda ruta con POST!");
});
//Tercera ruta POST
router.post("/POST3", (req, res) => {
  console.log("Nueva ruta POST");
  res.send("Buenas tardes");
});
//Cuarta ruta POST
router.post("/POST4", (req, res) => {
  console.log("Esta es la cuarta ruta POST");
  res.send("Buenas noches");
});
//Quinta ruta POST
router.post("/POST5", (req, res) => {
  console.log("POST funciona correctamente en MAC");
  res.send("Hola desde POST corriendo en la MANZANITA");
});

module.exports = router;
