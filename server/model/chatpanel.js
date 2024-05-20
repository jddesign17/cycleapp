const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const messagepanel = new Schema({
    adminid:String,
    memebers:[
        {
            type:Schema.Types.ObjectId,
            ref:'usersdata'
        }
    ]
})

const model = mongoose.model("messagepanel",messagepanel)


module.exports = model