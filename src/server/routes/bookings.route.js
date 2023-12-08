const express = require('express');
const bookingsController = require('../controllers/bookings.controller');

const router = express.Router();

router.post("/", bookingsController.create);
router.get("/", bookingsController.findAll);
router.get("/:bookingId", bookingsController.findById);
router.put("/:bookingId", bookingsController.update);
router.delete("/:bookingId", bookingsController.delete);

module.exports = router;