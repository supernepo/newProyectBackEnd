"use strict";
const Joi = require("joi");
const { findCarById } = require("../../repositories/cars-repository");
const schema = Joi.number().integer().positive().required();

async function getCarById(req, res) {
  try {
    const { idCar } = req.params;
    await schema.validateAsync(idCar);
    const car = await findCarById(idCar);
    if (!car) {
      throw new Error("Id no valido");
    }

    res.status(200);
    res.send(car);
  } catch (err) {
    console.log(err.message);
    res.status(400);
    res.send({
      err: err.message,
    });
  }
}

module.exports = { getCarById };
