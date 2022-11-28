const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  game_id: {
    type: String,
    required: true,
  },
  level_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Score", scoreSchema);
