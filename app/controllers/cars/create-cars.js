"use strict";
const Joi = require("joi");

const { addCar } = require("../../repositories/cars-repository");

const schema = Joi.object().keys({
  marca: Joi.string().min(3).max(10).required(),
  modelo: Joi.string().min(2).max(220).required(),
  anho: Joi.number()
    .integer()
    .positive()
    .min(1950)
    .max(new Date().getFullYear()),
  motor: Joi.string().valid("Diesel", "Gasolina", "Hibrido", "Electrico"),
  cv: Joi.number().integer().positive().min(60).max(500),
});

async function createCar(req, res) {
  try {
    console.log(req.body);
    const { body } = req;
    await schema.validateAsync(body);

    await addCar(body);
    res.status(201);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = { createCar };
