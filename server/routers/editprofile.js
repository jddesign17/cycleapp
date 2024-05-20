const { Router } = require('express');
const model = require('../model/signup');
const router = Router();
const upload = require('../middleware/profile');

router.put('/editprofile/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const image = req.file;
    console.log(image)

    try {

        const existingUser = await model.findById(id);
        if (!existingUser) {
            return res.status(404).send("User not found");
        }

        if (name) {
            existingUser.username = name;
        }
        if (email) {
            existingUser.email = email;
        }
        if (image) {
            existingUser.image = req.file.filename;
        }


        const updatedUser = await existingUser.save();
        res.send(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
