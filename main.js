"use strict";

require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use("/api/v1/cars/", carsRouter);

app.listen(port, () => console.log(`Escuchando puerto ${port}`));
