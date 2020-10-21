const mongoose = require('mongoose');

const UserGameSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  gameID: {
    type: String,
    require: true,
  },
  openClues: [String],
  points: Number
});


module.exports = mongoose.model('UserGame', UserGameSchema);
