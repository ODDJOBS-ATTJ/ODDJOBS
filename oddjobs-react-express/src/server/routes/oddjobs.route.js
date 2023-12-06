import express from 'express';
import accountController from '../controllers/oddjobs.controller';

const router = express.Router();

router.get('/all', accountController.findAll); //GET all account
router.post('/', accountController.create); //POST account
router.get('/server/:id', accountController.findById); //GET id account
router.put('/server/:id', accountController.update); //PUT id account
router.delete('/server/:id', accountController.delete); //DELETE id account

export default router;