const express = require('express');
const workerController = require('../controllers/worker.controller');
const multer = require('multer');

const upload = multer({ dest: '/uploads' });

const router = express.Router();

router.post('/', workerController.create); // POST a worker
router.post('/registerWorker', upload.fields([{ name: 'fileInput1', maxCount: 1 }, { name: 'fileInput2', maxCount: 1 }, { name: 'fileInput3', maxCount: 1 }]), workerController.registerWorker);
router.get('/', workerController.findAll); // GET all workers
router.get('/:id', workerController.findById); // GET a worker by id
router.put('/:id', workerController.update); // UPDATE a worker by id
router.delete('/:id', workerController.delete); // DELETE a worker by id

module.exports = router;