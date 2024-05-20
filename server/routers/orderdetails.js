const {Router} = require('express')
const router = Router()
const order = require("../model/order")
const { model } = require('mongoose')
router.post("/order",async(req,res)=>{

    const {name,productid,userid,address,phonenumber} = req.body
    console.log(name)

    try{
        const alldata = await new order({
            name:name,
            phonenumber:phonenumber,
            productid:productid,
            address:address,
            userid:userid,
        })

        await alldata.save()
        res.send(alldata)
    }
    catch(err)
    {
        console.log(err)
    }
})


router.get("/orderget",async(req,res)=>{
    try{
        const alldata = await order.find().populate('productid')
        res.send(alldata)
        console.log(alldata)
    }
    catch(err)
    {
        res.send(err)
    }
})

module.exports = router