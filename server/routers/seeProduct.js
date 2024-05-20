const {Router} = require('express')
const router = Router()
const addModel = require("../model/addproductmodel")

router.get("/seeproducts",async(req,res)=>{
   try{
    const Productsdata = await addModel.find()
    res.send(Productsdata)
   }
   catch(err)
   {
    console.log(err)
   }
})

module.exports = router