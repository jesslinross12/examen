const express = require('express');
const router = express.Router();
const consolaController= require('../controllers/consola')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
router.get('/altaConsola',consolaController.getAltaConsola);
//Servicio para procesar los datos del formulario
//router.post('/altaConsola',consolaController.postAltaConsola);
7//Servicio para consultar todos los datos
//router.get('/consultaConsolas',consolaController.getConsolas);
//Servicio para eliminar un registro por id
router.post('/bajaConsola', consolaController.postEliminarConsola);
//Servicio para actualizar las consola
router.post('/actualizarConsola',consolaController.postActualizarConsola);
//enviar peliculas
router.post('/peliculas', consolaController.postPeliculas);
//get pelis
router.get('/getpel', consolaController.getPeliculas);


module.exports = router