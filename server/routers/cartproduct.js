const { Router } = require('express');
const router = Router();
const Cart = require('../model/cart');
const { model } = require('mongoose');

router.post('/cartproduct', async (req, res) => {
    const { userid, dataid } = req.body;

    try {
     
        let cartItem = await Cart.findOne({ userid });

        if (cartItem) {
          
            const itemExists = cartItem.cartItem.includes(dataid);

            if (!itemExists) {
              
                cartItem.cartItem.push(dataid);
                await cartItem.save();
            }
        } else {
            cartItem = await Cart.create({
                userid: userid,
                cartItem: [dataid]
            });
        }

        res.status(201).json({ message: 'Product added to cart successfully', cartItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});




router.post("/getcart",async(req,res)=>{
    const {userid} = req.body
    try
    {
        const response = await Cart.findOne({userid:userid}).populate('cartItem')
        console.log(response)
        res.send(response)
        

    }catch(err)
    {
         res.send(err)
    }
})
module.exports = router;
