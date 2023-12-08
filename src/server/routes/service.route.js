const express = require('express');
const serviceController = require('../controllers/service.controller');

const router = express.Router();

router.get('/', serviceController.findAll); // GET all services
router.post('/', serviceController.create); // POST a new service
router.get('/:id', serviceController.findById); // GET a service by id
router.put('/:id', serviceController.update); // UPDATE a service by id
router.delete('/:id', serviceController.delete); // DELETE a service by id

module.exports = router;