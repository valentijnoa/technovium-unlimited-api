require("../models/db");
<<<<<<< HEAD
const Level = require("../models/Game");

/**
 * /api/levels
 * GET all levels of the game
 */

exports.updateLevel = async (req, res) => {
  try {
    console.log("het werkt");

    //const levels = await Level.find({});
    res.json("het werkt");
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
=======
const Game = require("../models/Games");

exports.getGame = async (req, res) => {
    let paramID = req.params.id;
    try {
        const game = await Game.findOne({id: paramID});
        res.json(game);
    } catch (err) {
        res.status(400).json({message: err});
    }
>>>>>>> 13d7591201dbe31f9478181e9cda93dda5240f61
};
