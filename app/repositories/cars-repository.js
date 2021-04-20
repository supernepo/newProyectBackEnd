"use strict";

const cars = [
  {
    id: 1,
    marca: "Seat",
    modelo: "Ibiza",
    anho: 2019,
    motor: "gasolina",
  },
  {
    id: 2,
    marca: "Opel",
    modelo: "Corsa",
    anho: 2014,
    motor: "diesel",
    cv: 80,
  },
  {
    id: 1,
    marca: "Audi",
    modelo: "A3",
    anho: 2017,
    motor: "Gasolina",
    cv: 150,
  },
];
async function findAllCars() {
  //await SELECT * FROM cars;
  return cars;
}
module.exports = {
  findAllCars,
};
