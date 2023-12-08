const express = require('express');
const orderController = require('../controllers/orders.controller');

const router = express.Router();

router.post("/", orderController.create);
router.get("/", orderController.findAll);
router.get("/:orderId", orderController.findById);
router.put("/:orderId", orderController.update);
router.delete("/:orderId", orderController.delete);

module.exports = router;