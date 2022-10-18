const express = require("express");
<<<<<<< HEAD
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/api/game/level/:level_id/success", gameController.updateLevel);
=======
const gameController = require("../controllers/gameController");
const router = express.Router();

router.get("/api/games/:id", gameController.getGame);
>>>>>>> 13d7591201dbe31f9478181e9cda93dda5240f61

module.exports = router;
