const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    reenterpassword:String,
    image:String
})

const model = mongoose.model("usersdata",Schema)

module.exports = model