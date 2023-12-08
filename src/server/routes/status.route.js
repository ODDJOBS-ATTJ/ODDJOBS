const express = require('express');
const statusController = require('../controllers/status.controller');

const router = express.Router();

router.post("/", statusController.create);
router.get("/", statusController.findAll);
router.get("/:statusId", statusController.findById);
router.put("/:statusId", statusController.update);
router.delete("/:statusId", statusController.delete);

module.exports = router;