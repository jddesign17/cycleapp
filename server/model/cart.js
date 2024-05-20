const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        ref:'usersdata'
    },

    cartItem:[
        {
            type:Schema.Types.ObjectId,
            ref:'addproducts'
        }      
    ]
    
})

const model = mongoose.model("usercart",cartSchema)

module.exports = model