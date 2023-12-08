const express = require('express');
const ratingsController = require('../controllers/ratings.controller');

const router = express.Router();

router.post("/", ratingsController.create);
router.get("/", ratingsController.findAll);
router.get("/:ratingId", ratingsController.findById);
router.put("/:ratingId", ratingsController.update);
router.delete("/:ratingId", ratingsController.delete);

module.exports = router;