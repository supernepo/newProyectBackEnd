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
    id: 3,
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
async function findCarById(id) {
  //LLAMADA REAL BASE DE DATOS
  return cars.find((car) => car.id === +id);
}

async function addCar(car) {
  //LLAMADA A LA BASE DE DATOS!
  //const id = Math.max(...cars.map((car) => car.id === id)) + 1;
  const id = cars.reduce((acc, car) => (car.id > acc ? car.id : acc), 0) + 1;
  console.log("nuevoId", id);
  const newCar = {
    id,
    ...car,
  };
  cars.push(newCar);
  return true;
}
async function removeCarById(idCar) {
  const car = findCarById(idCar);
  const index = cars.indexOf(car);
  return cars.splice(index, 1);

  console.log("Borrando");
}

module.exports = {
  removeCarById,
  addCar,
  findCarById,
  findAllCars,
};
