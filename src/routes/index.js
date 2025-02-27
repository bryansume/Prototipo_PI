const { Router } = require("express");
const router = Router();

//1a Ruta con Get
router.get("/rutaGetConRouter", (req, res) => {
  console.log(
    "Hola en la consola node, desde una llamada en el servidor, la raiz"
  );
  res.send("Bienvenido a Prototipo");
});

//Creación de la primera ruta con POST
router.post("/POST1", (req, res) => {
  console.log("Enviada primera petición al POST");
  res.send("Es la primera ruta con POST!");
});

//Ruta con body/request
router.post("/POST_Formulario", (req, res) => {
  //Esto se verá en el Frontend
  res.send("Se ha enviado los datos correctamente");
  //Esto veremos nosotros en el Backend-Terminal
  console.log(req.body);
});

module.exports = router;
