const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser");
const cardsArrayModel= require('./cardsArrays');
// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/cardsArrays',(req,res)=>{
    let cardsArraysTobeSent= [];
    cardsArrayModel.find({remaining:false}).then((cardsArrays)=>{
        // console.log(cardsArrays);
        cardsArrays.forEach(cardsArray=>{
            cardsArraysTobeSent.push(cardsArray.cardsArray);
        })
        res.send(cardsArraysTobeSent);
    }).catch(error=> console.log("error occurred",error));
});
app.get('/remainingCards',(req,res)=>{
    cardsArrayModel.find({remaining: true}).then((cardsArrays)=>{
        // console.log(cardsArrays);
        res.send(cardsArrays[0].cardsArray);
    }).catch(error=> console.log("error occurred",error));
});


module.exports = app;