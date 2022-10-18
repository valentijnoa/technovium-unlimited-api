require("../models/db");
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
};
