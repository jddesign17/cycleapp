const {Router} = require('express')
const viewmodel = require("../model/addproductmodel")
const router = Router()

router.get("/viewporoduct/:productId",async(req,res)=>{
    const {productId} = req.params
    try{

        const response = await viewmodel.findById(productId)
        if(!response)
        {
            res.send({message:"id is not found!!"})
        }
        res.send(response)
    }

    catch(err)
    {
        console.log(err)
    }
})


module.exports =router