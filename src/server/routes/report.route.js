const express = require('express');
const reportsController = require('../controllers/report.controller');

const router = express.Router();

router.post("/", reportsController.create);
router.get("/", reportsController.findAll);
router.get("/:reportId", reportsController.findById);
router.put("/:reportId", reportsController.update);
router.delete("/:reportId", reportsController.delete);

module.exports = router;