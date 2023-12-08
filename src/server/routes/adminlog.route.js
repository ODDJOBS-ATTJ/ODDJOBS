const express = require('express');
const adminlogController = require('../controllers/adminlog.controller');

const router = express.Router();

router.post("/", adminlogController.create);
router.get("/", adminlogController.findAll);
router.get("/:adminLogId", adminlogController.findOne);

module.exports = router;