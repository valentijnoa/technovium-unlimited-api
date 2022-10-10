require("../models/db");
const Level = require("../models/Level");

/**
 * /api/levels
 * GET all levels of the game
 */

exports.getLevels = async (req, res) => {
    try {
        const levels = await Level.find({});
        res.json(levels);
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

/**
 * /api/levels/:game_id
 * GET all levels of the game
 */

exports.getGameLevels = async (req, res) => {

    //!create query to retrieve all levels of a game by game_id
    //!could also use find and then query instead of whats below at line 34
    //!need approval of davor or anyone else that has knowledge of this
    const query = {
        game_id: req.params.game_id
    }

    try {
        const levels = await Level.find({game_id: req.params.game_id});
        res.json(levels);
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}