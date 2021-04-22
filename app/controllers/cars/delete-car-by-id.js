"use strict";
const Joi = require("joi");
const schema = Joi.number().integer().positive().required();
const {
  removeCarById,
  findCarById,
} = require("../../repositories/cars-repository");
async function deleteCarById(req, res) {
  try {
    const { idCar } = req.params;
    await schema.validateAsync(idCar);
    const car = await findCarById(idCar);
    if (!car) {
      throw new Error("Coche no existe");
    }

    await removeCarById(idCar);
    res.status(204);
    res.end();
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { deleteCarById };
