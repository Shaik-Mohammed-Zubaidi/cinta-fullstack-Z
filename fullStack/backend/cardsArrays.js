const mongoose= require('mongoose');

const cardsArraySchema= new mongoose.Schema({
    name: String,
    cardsArray: Array,
    remaining: Boolean
})

const cardsArrayModel= mongoose.model('cardsArrays',cardsArraySchema);

module.exports = cardsArrayModel;