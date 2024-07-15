const Card = require('../models/Card');

const getCards = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};

const createCard = async (req, res) => {
  const newCard = new Card(req.body);
  await newCard.save();
  res.json(newCard);
};

module.exports = { getCards, createCard };
