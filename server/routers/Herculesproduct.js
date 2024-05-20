const {Router} = require('express')
const router = Router()
const model = require('../model/addproductmodel')

router.get("/herculesproduct",async(req,res)=>{

   try
   {
    const alldata = await model.find({category:'Hercules'})
    res.send(alldata)
   }
   catch(err)
   {
    console.log(err)
    res.send(err)
   }

})


module.exports = router