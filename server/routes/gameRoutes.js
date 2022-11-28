const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/api/game/level/:level_id/success", gameController.updateLevel);

module.exports = router;
