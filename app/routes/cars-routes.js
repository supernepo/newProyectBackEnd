"use strict";

const express = require("express");
const router = express.Router();
const { getCars } = require("../controllers/cars/get-cars");
const { getCarById } = require("../controllers/cars/get-car-by-id");
const { createCar } = require("../controllers/cars/create-cars");
const { deleteCarById } = require("../controllers/cars/delete-car-by-id");

//Aqui me falta  crear la ruta para borrar

router.route("/").get(getCars);
router.route("/").post(createCar);
router.route("/:idCar").get(getCarById);
router.route("/:idCar").delete(deleteCarById);

module.exports = router;
