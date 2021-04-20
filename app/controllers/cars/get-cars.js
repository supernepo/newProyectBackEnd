"use strict";

const { findAllCars } = require("../../repositories/cars-repository");

//const carsRepository = require("../../repositories/cars-repository");

async function getCars(req, res) {
  try {
    //VALIDO VARIABLES
    const cars = await findAllCars();
    //const cars=await carRepository.findAll();
    //res.statusCode = 200;
    res.status(200);
    res.send(cars);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = getCars;
