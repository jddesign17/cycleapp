const { Router } = require('express');
const router = Router();
const model = require('../model/addproductmodel');
const uploads = require('../middleware/multer'); 

router.put("/updateproduct/:updateid", uploads.single('image'), async (req, res) => {
    const { updateid } = req.params;
    const { cyclename, category, desc, actualprice, percentage, price,list } = req.body;

    try {
        let image = ''; 
        if (req.file) {
            image = req.file.filename; 
        }
     
        const existingProduct = await model.findById(updateid);
        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        if (image !== '') {
            existingProduct.image = image;
        }

        existingProduct.cyclename = cyclename;
        existingProduct.category = category;
        existingProduct.desc = desc;
        existingProduct.actualprice = actualprice;
        existingProduct.percentage = percentage;
        existingProduct.price = price;
        existingProduct.list=list

  
        const updatedProduct = await existingProduct.save();
        console.log(updatedProduct)
         res.send(updatedProduct);

    } catch (err) {
        console.error("Error updating product:", err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
