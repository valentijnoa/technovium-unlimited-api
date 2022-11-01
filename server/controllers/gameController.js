require("../models/db");
const Game = require("../models/Games");

exports.getGame = async (req, res) => {
    let paramID = req.params.id;
    try {
        const game = await Game.findOne({id: paramID});
        res.json(game);
    } catch (err) {
        res.status(400).json({message: err});
    }
};

exports.listScores = async(req, res) => {
    let { limit = 10, page = 1, category, q } = req.query;
  
    const limitRecords = parseInt(limit);
    const skip = (page -1) * limit;
  
    let query = {};
    if(q) {
      query = {$text: {$search: q}};
    }
    if(category) query.category = category;
   
  
    try {
      const movies = await Movie.find(query).limit(limitRecords).skip(skip);
      res.json({ page: page, limit:limitRecords, movies});
    } catch (err) {
      res.status(400).json( {message: err })
    } 
  }
  
  
  /**
  * POST Single Score
  */
  exports.insertSingleScore = async(req, res) => {
  
    const newMovie = new Movie({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      thumbnail: req.body.thumbnail 
    });
  
    try {
      await newMovie.save();
      res.json(newMovie);
    } catch (err) {
      res.status(400).json( { message: err })
    }
  }
  
  
  /**
  * PATCH Single Score
  */
  exports.updateSingleScore = async(req, res) => {
    let paramID = req.params.id;
    let name = req.body.name;
  
    try {
      const updateMovie = await Movie.updateOne({ _id:paramID }, { name:name });
      res.json(updateMovie);
    } catch (error) {
      res.status(400).json( { message: err })
    }
  }
  
  
  /**
  * DELETE Single Score
  */
  exports.deleteSingleScore = async(req, res) => {
    let paramID = req.params.id;
  
    try {
      const data = await Movie.deleteOne({ _id:paramID });
      res.json(data);
    } catch (error) {
      res.status(400).json( { message: err })
    }
  }