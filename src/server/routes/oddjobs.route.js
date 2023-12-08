const express = require('express');
const accountController = require('../controllers/oddjobs.controller');

const router = express.Router();

router.get('/', accountController.findAll); // GET all account
router.post('/register', accountController.create); // POST register
router.post('/login', accountController.login); // POST login
router.post('/findUserID', accountController.findUserID); // POST login
router.post('/logout', accountController.logout); //LOGOUT
router.post('/updateVerificationID', accountController.updateVerificationID);
router.post('/checkVerificationID', accountController.checkVerificationID);
router.post('/findUserIDbyVerificationID', accountController.findUserIDbyVerificationID);
router.post('/removeVerificationID', accountController.removeVerificationID);
router.get('/:id', accountController.findById); // GET id account
router.put('/:id', accountController.update); // PUT id account
router.delete('/:id', accountController.delete); // DELETE id account

module.exports = router;