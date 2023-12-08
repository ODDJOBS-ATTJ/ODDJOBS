const express = require('express');
const appliedjobsController = require('../controllers/appliedjobs.controller');

const router = express.Router();

router.post("/", appliedjobsController.create);
router.get("/", appliedjobsController.findAll);
router.get("/:appliedJobsId", appliedjobsController.findById);
router.put("/:appliedJobsId", appliedjobsController.update);
router.delete("/:appliedJobsId", appliedjobsController.delete);

module.exports = router;