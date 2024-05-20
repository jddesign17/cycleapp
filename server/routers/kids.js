const {Router} = require('express')
const router = Router()
const model = require('../model/addproductmodel')

router.get("/kids",async(req,res)=>{

   try
   {
    const alldata = await model.find({list:'kids'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})

router.get("/men",async(req,res)=>{

   try
   {
    const alldata = await model.find({list:'men'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})

router.get("/woman",async(req,res)=>{

   try
   {
    const alldata = await model.find({list:'woman'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})

router.get("/classic",async(req,res)=>{

   try
   {
    const alldata = await model.find({list:'classic'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})

router.get("/mtb",async(req,res)=>{

   try
   {
    const alldata = await model.find({list:'mtb'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})

router.get("/ecycle",async(req,res)=>{

   try
   {
    const alldata = await model.find({list:'ecycle'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})




module.exports = router