const express = require('express');
const actionController = require('../controllers/action.controller');

const router = express.Router();

router.post("/", actionController.create);
router.get("/", actionController.findAll);
router.get("/:actionId", actionController.findById);
router.put("/:actionId", actionController.update);
router.delete("/:actionId", actionController.delete);

module.exports = router;