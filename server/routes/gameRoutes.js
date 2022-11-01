const express = require("express");
const gameController = require("../controllers/gameController");
const router = express.Router();

router.get("/api/games/:id", gameController.getGame);

module.exports = router;

const movieController = require('../controllers/movieController');

router.get('/api/movies/', movieController.listScores);
router.post('/api/movies/', movieController.insertSingleScore); 
router.patch('/api/movies/:id', movieController.updateSingleScore); 
router.delete('/api/movies/:id', movieController.deleteSingleScore); 
