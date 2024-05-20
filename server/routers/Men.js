const {Router} = require('express')
const router = Router()
const model = require('../model/addproductmodel')

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


module.exports = router