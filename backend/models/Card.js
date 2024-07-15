const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: String,
  attack: Number,
  defense: Number,
  description: String,
  type: String,
  specialAbility: String,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
