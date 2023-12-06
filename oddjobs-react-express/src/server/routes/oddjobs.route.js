// import express from 'express';
// import accountController from '../controllers/oddjobs.controller';

const express = require('express');
const accountController = require('../controllers/oddjobs.controller');

const router = express.Router();

router.get('/', accountController.findAll); //GET all account
router.post('/', accountController.create); //POST account
router.get('/:id', accountController.findById); //GET id account
router.put('/:id', accountController.update); //PUT id account
router.delete('/:id', accountController.delete); //DELETE id account

module.exports = router
// export default router;