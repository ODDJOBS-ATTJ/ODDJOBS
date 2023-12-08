const express = require('express');
const router = express.Router();
const fileUploadController = require('../controllers/fileUpload.controller');

router.post('/worker', fileUploadController.uploadFiles);

module.exports = router;