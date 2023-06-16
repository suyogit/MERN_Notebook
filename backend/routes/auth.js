// this is the api
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
//create a user using :post "/api/auth/createuser". No login is required here

router.post('/createuser', [
    body('name', 'This name is invalid. Please enter a valid length').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], async (req, res) => {
    //return errors if error arises
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // console.log(req.body);
    // const user = User(req.body);
    // user.save()

    //check whether email exits already or not
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Username with this email already exists " })
        }
        user = await User.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        // then(user => res.json(user))
        // .catch(err => {
        //     console.log(err)
        //     res.json({ error: 'Please ente a unique value ', message: err.message })
   //     })
    //    res.send(req.body);
        // res.json()
        res.json(user)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("error occured");
    }
})
module.exports = router