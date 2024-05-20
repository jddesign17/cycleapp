const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    name:String,
    address:String,
    phonenumber:Number,
    productid:{
        type:Schema.Types.ObjectId,
        ref:'addproducts'
    },
    userid:{
        type:Schema.Types.ObjectId,
        ref:'usersdata'
    }
})


const model = mongoose.model("order",orderSchema)

module.exports = model