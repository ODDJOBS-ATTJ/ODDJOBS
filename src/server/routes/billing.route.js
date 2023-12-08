const express = require('express');
const billingsController = require('../controllers/billing.controller');

const router = express.Router();

router.post("/", billingsController.create);
router.get("/", billingsController.findAll);
router.get("/:userId", billingsController.findById);
router.put("/:userId", billingsController.update);
router.delete("/:userId", billingsController.delete);

module.exports = router;