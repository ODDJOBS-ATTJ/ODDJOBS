const express = require('express');
const serviceController = require('../controllers/service.controller');

const router = express.Router();

router.get('/', serviceController.findAll); // GET all services
router.post('/', serviceController.create); // POST a new service
router.get('/:id', serviceController.findById); // GET a service by id
router.put('/:id', serviceController.update); // UPDATE a service by id
router.delete('/:id', serviceController.delete); // DELETE a service by id
router.get('/category/:category', serviceController.findByCategory); // GET services by category
router.get('/featured', serviceController.findByFeatured); // GET featured services

module.exports = router;