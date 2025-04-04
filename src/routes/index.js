const { Router } = require("express");
const router = Router();

//Ruta con Get para el formulario en HTML en web
router.get("/GET_Formulario", (req, res) => {
  res.send("Datos enviados del formulario con GET");
  console.log(req.query);
});

//Ruta Get para Unity y conectada con Render (mi servidor)
router.get("GET_Unity", (req, res) => {
  res.send("Has pulsado el botón en Unity");
  console.log(req.query);
});

// //Creación de la primera ruta con POST
// router.post("/POST1", (req, res) => {
//   console.log("Enviada primera petición al POST");
//   res.send("Es la primera ruta con POST!");
// });

//Ruta con body/request
router.post("/POST_Formulario", (req, res) => {
  //Esto se verá en el Frontend
  res.send("Datos enviados del formulario con POST");
  //Esto veremos nosotros en el Backend-Terminal
  console.log(req.body);
});

module.exports = router;
