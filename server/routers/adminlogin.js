const {Router} = require('express')
const router = Router()
const model = require("../model/admin")
router.post("/admin",async(req,res)=>{

    const {gmail,password} = req.body
    try
    {
        const user = await model.findOne({gmail:gmail})
        if(!user)
        {
            return res.send("Admin NOT FOUND")
        }

        if(password===user.password)
        {
            return res.send("succes")
        }
        else
        {
            return res.send("Wrong Password")
        }
    }catch(err)
    {
            res.send(err)
    }
})


module.exports = router