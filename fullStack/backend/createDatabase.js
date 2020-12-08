const mongoose = require('mongoose')
const cardsArrayModel = require('./models/cardsArrays')
const cardsData = require('./cardsData')

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/cards";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await cardsArrayModel.deleteMany({})
    // console.log(connection)
    await cardsArrayModel.insertMany(cardsData);
    await mongoose.disconnect();
}
refreshAll().then(_=> console.log("database created")).catch(err=> console.log("error: ",err));