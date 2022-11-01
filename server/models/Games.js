const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    id: {
		type: String,
		required: true,
	},
    name: {
		type: String,
		required: true,
	},
    category: {
		type: String,
		required: true,
	},
    created: {
		type: String,
		required: true,
	},
    created_by: {
		type: String,
		required: true,
	},
    description: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Games", gameSchema);

mongoose.connect(process.env.MONGODB_URI, { useNewURLParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('Connected')
});