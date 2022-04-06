const mongoose = require('mongoose');


//connection URL

const databaseURL = 'mongodb+srv://nahomtec:fredag45@cluster0.bamj4.mongodb.net/Lab1=database?retryWrites=true&w=majority';


async function main(){
    console.log('Connected to DB');

    //here we connect mongoose to atlas server
    mongoose.connect(databaseURL,{ useNewUrlParser: true, useUnifiedTopology: true});

    const mgDB = mongoose.connection;
    mgDB.on('connected', console.log.bind(console, 'MongoDB & Mongoose connected'));

}


module.exports = main;