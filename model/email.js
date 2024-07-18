const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email :{
        type:String,
        required:true,
    },
    day: String,
    month: String,
    year: String,
})



const email = new mongoose.model('email',schema)

module.exports = email