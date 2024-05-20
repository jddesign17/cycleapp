const {Router} = require('express')
const uploads = require('../middleware/multer')
const router = Router()
const addModel = require("../model/addproductmodel")
router.post("/addproduct",uploads.single('image'),(req,res)=>{
    const {cyclename,category,rate,desc,actualprice,percentage,price,list} = req.body
    const image = req.file.filename

    const addproduct = new addModel({
        cyclename:cyclename,
        category:category,
        desc:desc,
        image:image,
        actualprice:actualprice,
        percentage:percentage,
        price:price,
        list:list

    })

    addproduct.save().then((res)=>console.log(res)).catch((err)=>console.log(err))

    res.send(addproduct)
})

module.exports= router