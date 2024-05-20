const {Router} = require('express')
const router = Router()
const model = require('../model/addproductmodel')

router.get("/atlasproduct",async(req,res)=>{

   try
   {
    const alldata = await model.find({category:'Atlas'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})


module.exports = router