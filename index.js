
const express = require('express');
const app = express();
const home = require('./routes/home');
const connection = require('./dbConnection');
const users = require('./routes/users');
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 3000;
connection();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', home);
app.use('/api/users', users)

app.set('view engine', 'ejs');




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})