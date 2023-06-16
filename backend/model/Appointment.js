let mongoose = require("mongoose");

let AppointmentSchema = mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    city:String,
    location:String,
    problem:String,
    date: {
        type: Date,
        default: Date.now,
    },
})

let Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;