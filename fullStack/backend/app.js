const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser");
const cardsArrayModel= require('./models/cardsArrays');
mongoose.set('bufferCommands', false);
// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/cardsArrays',(req,res)=>{
    let cardsArraysToBeSent=[];
    cardsArrayModel.find({}).then((cardsArrays)=>{
        console.log(cardsArrays);

        cardsArrays.forEach((cardsArray)=>{
            if(cardsArray.remaining){
                cardsArraysToBeSent.push(cardsArray);
            }
        })
        res.send(cardsArraysToBeSent);
    }).catch(error=> console.log("error occurred",error));
    // res.send("Something");
});

module.exports = app;