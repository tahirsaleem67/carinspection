let myExpress = require('express');

let app = myExpress();


app.use(myExpress.json())

app.listen(3010, function () {

    console.log("server live ho gya")

})

require("./model/db")

let Appointment = require("./model/Appointment")
let Inspection = require('./model/Inspection')
let Users= require('./model/Users')


app.post("/appointment", async (req, res) => {
    try {
        
        let newAppointment = new Appointment(req.body)
        let newUser = new Users(req.body)

        await newAppointment.save()
        await newUser.save()
        res.send("Added")

    } catch (e) {
        console.log(e)
    }
})

app.get('/Users', async(req,res)=>{
    try {

        let newUser = await Users.find().sort({ _id: -1 })
        res.json(newUser)

    } catch (e) {
        console.log(e)

    }
})

app.get("/appointment", async (req, res) => {
    try {

        let newAppointment = await Appointment.find().sort({ _id: -1 })
        res.json(newAppointment)

    } catch (e) {
        console.log(e)

    }
})

app.delete("/deleteAppointment", async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.query.id);
        res.send("Deleted");
    } catch (e) {
        res.status(500).send("Error deleting appointment");
    }
});


app.post("/inspection", async (req, res) => {
    try {
        let newInspection = new Inspection(req.body)

        await newInspection.save()

        res.send("Added")

    } catch (e) {
        console.log(e)
    }
})

app.get("/inspections", async (req, res) => {
    try {
        let newInspection = await Inspection.find().sort({ _id: -1 });
        res.json(newInspection);
    } catch (e) {
        console.log(e);
    }
});


app.get('/singleInspection', async (req, res) => {

    try {

        let newReport = await Appointment.findById(req.query.id)
        res.json(newReport)

    } catch (e) {

        res.end(e)
    }
})

app.get('/singleReport', async (req, res) => {
    try {
        let newReport = await Inspection.findById(req.query.id)
        res.json(newReport)
    } catch (e) {

        res.end(e)
    }
})

app.get("/dashboard", async (req, res) => {
    try {
        let NewInspection = await Appointment.find()
        let TotalInspection = await Inspection.find()
        let newUsers= await Users.find()
        res.json({ NewInspection, TotalInspection, newUsers })
    } catch (e) {

        res.end(e)
    }
})


app.get('*', function (req, res) {

    res.sendfile('./build/index.html');

});