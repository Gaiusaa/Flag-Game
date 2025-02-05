const express = require("express");
const router = express.Router();

const pathController = require("../controllers/paths");

router.get("/", pathController.serveIndex);

module.exports = router;