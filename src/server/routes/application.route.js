const express = require('express');
const applicationsController = require('../controllers/applications.controller');

const router = express.Router();

router.post("/", applicationsController.create);
router.get("/", applicationsController.findAll);
router.get("/:applicationId", applicationsController.findById);
router.put("/:applicationId", applicationsController.update);
router.delete("/:applicationId", applicationsController.delete);

module.exports = router;