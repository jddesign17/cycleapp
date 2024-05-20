const { Router } = require('express');
const router = Router();
const cycle = require("../model/addproductmodel");
const order = require("../model/order")
const user = require("../model/signup")
router.get("/totalcycle", async (req, res) => {
    try {
        const response = await cycle.countDocuments();
        res.send({ count: response }); // Sending count as JSON object
    } catch (err) {
        res.status(500).send({ error: err.message }); // Sending error message
    }
});


router.get("/ordercount", async (req, res) => {
    try {
        const response = await order.countDocuments();
        res.send({ count: response }); // Sending count as JSON object
    } catch (err) {
        res.status(500).send({ error: err.message }); // Sending error message
    }
});


router.get("/usercount", async (req, res) => {
    try {
        const response = await user.countDocuments();
        res.send({ count: response }); // Sending count as JSON object
    } catch (err) {
        res.status(500).send({ error: err.message }); // Sending error message
    }
});





module.exports = router;
