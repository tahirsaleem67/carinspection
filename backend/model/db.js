let mongoose = require('mongoose');

try {
    let connect = mongoose.connect("mongodb+srv://sharjeelakhtar245:sharjeel3322@cluster0.izr36ub.mongodb.net/")
    console.log(connect)
} catch (e) {
    console.log(e)
}