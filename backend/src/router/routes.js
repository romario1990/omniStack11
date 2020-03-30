const express = require("express");
const ongs = require("./ongs");

const routes = express.Router();

routes.use("/", ongs);
routes.use("/ongs", ongs);

module.exports = routes;
