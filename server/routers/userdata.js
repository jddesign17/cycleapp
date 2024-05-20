const model = require('../model/signup')
const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken')

router.post("/userdata",async(req,res)=>{
    const {token} = req.body
    try{      
    const decode = await jwt.verify(token,process.env.KEY)
    const userId = await decode.id  
    console.log(userId)

    const alldata = await model.findById(userId)
    console.log(alldata)

    return res.send(alldata)
    }
    catch(err)
    {
        console.log(err)
    }
})


module.exports = router