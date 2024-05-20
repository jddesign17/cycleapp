const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    cyclename:String,
    category:String,
    desc:String,
    image:String,
    actualprice:String,
    percentage:String,
    price:String,
    list:String

})

const addModel = mongoose.model("addproducts" , Schema)

module.exports = addModel
