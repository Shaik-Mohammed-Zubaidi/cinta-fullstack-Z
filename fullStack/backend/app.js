const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser");
const cardsArrayModel= require('./cardsArrays');
const cardsData= require('./cardsData');
// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/cardsArrays',(req,res)=>{
    cardsArrayModel.find({remaining:false}).then((cardsArrays)=>{
        res.send(cardsArrays);
    }).catch(error=> console.log("error occurred",error));
});
app.get('/remainingCards',(req,res)=>{
    // console.log("inside get remainingCards");
    cardsArrayModel.find({remaining: true}).then((cardsArrays)=>{
        // console.log(cardsArrays[0].cardsArray);
        res.send(cardsArrays[0].cardsArray);
    }).catch(error=> console.log("error occurred",error));
});

app.put('/remainingCards',(req,res)=>{
    const remainingCardsArray= req.body;
    cardsArrayModel.findOneAndUpdate({remaining: true},{cardsArray: remainingCardsArray}).then(result=>{
        // console.log(result);
        res.send("done");
    }).catch(error=> console.log(error));
    
})

app.get('/restart',(req,res)=>{
    async function updatesDone(){
        await cardsArrayModel.updateMany({remaining: false},{cardsArray: []});
        await cardsArrayModel.findOne({remaining: true},{cardsArray: cardsData[0].cardsArray},{new: true});
    }
    updatesDone().then(result=>{
        // console.log(result);
        res.send(cardsData);
    }).catch(error=> console.log(error));
})

module.exports = app;