const {Router} = require('express')
const router = Router()
const model = require('../model/signup')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try
    {
        const users = await model.findOne({email:email})

        if(!users)
        {
            return res.send({message:"User Not Found!!"})
        }

        const realpassword = await bcrypt.compare(password,users.password)

        if(realpassword)
        { 
           const token = jwt.sign({id:users.id},process.env.KEY)
           return res.send({message:"success",token:token})
        }

        return res.send({message:"password mismatched!"})
    }
    catch(err)
    {
            return res.send(err)
    }

})


module.exports = router