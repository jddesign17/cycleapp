const model = require('../model/signup')
const {Router} = require('express')
const router = Router()
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken')

router.post("/signup" ,async(req,res)=>{

    const KEY = process.env.KEY
    const {username,email,password,reenterpassword} = req.body

    try
    {       
       const users = await model.findOne({email:email})

        if(!users)
        {
        
            const hashpassword = await bcrypt.hash(password,10)
    
            const alldata = await new model({
                username:username,
                email:email,
                password:hashpassword,
            })
            await alldata.save()
            const token = jwt.sign({id:alldata.id},KEY)
            return res.send({message:"success",token:token})
        
        }

        else
        {
            return res.send({message:"user already exists"})
        }


      
        
    }

    catch(err)
    {
        res.send(err)
    }

    
})


module.exports = router
