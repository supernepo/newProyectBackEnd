"use strict";

const express = require("express");
const router = express.Router();
const { getCars } = require("../controllers/cars/get-cars");

router.route("/").get((req, res) => getCars);

module.exports = router;
