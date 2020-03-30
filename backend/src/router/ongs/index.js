const controller = require("./controller");

const router = require("express").Router();

router.get("/ongs", controller.listOngs);

module.exports = router;
