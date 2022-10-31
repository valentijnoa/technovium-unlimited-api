const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({

    username: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required'
    },
    password: {
        type: String,
        required: 'This field is required'
    },
    date_of_birth: {
        type: String
    },
    gender: {
        type: String
    },
    status: {
        type: String
    }

});

module.exports = mongoose.model('Setting', settingSchema);