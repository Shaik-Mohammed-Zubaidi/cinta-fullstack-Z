const mongoose = require('mongoose');
const port = 5000
const app = require('./app');
// mongoose.set('bufferCommands', false);

mongoose.connect('mongodb://localhost/cards',{useNewUrlParser: true}).then(() => console.log("Connected to MongoDB")).catch((err) => console.log("Exception Occured ", err));


app.listen(port, () => console.log(`App listening on port ${port}!`));