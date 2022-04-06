const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    id: Number,
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },
    age:{
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('User', userSchema);

