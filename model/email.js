const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email :{
        type:String,
    }
})



const email = new mongoose.model('email',schema)

module.exports = email