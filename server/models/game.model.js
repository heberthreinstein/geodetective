const mongoose = require('mongoose');

const ClueSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
    unique: true
  }
});

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: String,
  clues: [ClueSchema],
  answer: {
    type: String,
    require: true,
  },
  freeClues: {
    type: Number,
    require: true,
    default: 3
  }
});


module.exports = mongoose.model('Game', GameSchema);
