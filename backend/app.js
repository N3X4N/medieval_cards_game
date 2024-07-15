const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const cardRoutes = require('./routes/cards');

const app = express();
mongoose.connect('mongodb://localhost/medieval_card_game', {
    userNewUrlParser: true,
    useUndefiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/cards', cardRoutes);

app.listen(5000, () => console.log('Server is running on port 5000'));