let mongoose = require("mongoose");

let UsersSchema = mongoose.Schema({

    name:String,
    email:String,
    number:Number,
    city:String,
    date: {
        type: Date,
        default: Date.now,
    },
})

let Users = mongoose.model('Users', UsersSchema);

module.exports = Users;