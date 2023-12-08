const express = require('express');
const bookingsController = require('../controllers/bookings.controller');

const router = express.Router();

router.get('/', bookingsController.findAll); // GET all bookings
router.post('/', bookingsController.create); // POST a new booking
router.get('/:id', bookingsController.findById); // GET a booking by id
router.put('/:id', bookingsController.update); // UPDATE a booking by id
router.delete('/:id', bookingsController.delete); // DELETE a booking by id

module.exports = router;