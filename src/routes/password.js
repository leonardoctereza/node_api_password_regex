var express = require("express");
var router = express.Router();
const passwordController = require("../controller/checkPassword");

router.get("/isValid", passwordController.isValid);

module.exports = router;
