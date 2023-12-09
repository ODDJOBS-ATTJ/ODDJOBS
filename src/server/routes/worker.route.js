const express = require('express');
const multer = require('multer');
const workerController = require('../controllers/worker.controller');

const router = express.Router();

const path = require('path');
const upload = multer({ dest: path.join(__dirname, '../../General/IMAGE/uploads') });

router.post('/', workerController.create); // POST a worker
router.post('/registerWorker', upload.fields([{ name: 'fileInput1', maxCount: 1 }, { name: 'fileInput2', maxCount: 1 }, { name: 'fileInput3', maxCount: 1 }]), workerController.registerWorker);
router.get('/', workerController.findAll); // GET all workers
router.get('/:id', workerController.findById); // GET a worker by id
router.put('/:id', workerController.update); // UPDATE a worker by id
router.delete('/:id', workerController.delete); // DELETE a worker by id

module.exports = router;