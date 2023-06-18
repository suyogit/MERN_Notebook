// this is the api
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//create a user using :post "/api/auth/createuser". No login is required here

const JWT_SECRET = 'suyogisdon'
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

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //create a new user
        user = await User.create(
        {
            name: req.body.name,
            email: req.body.email,
                password: secPass,
        })
        // then(user => res.json(user))
        // .catch(err => {
        //     console.log(err)
        //     res.json({ error: 'Please ente a unique value ', message: err.message })
   //     })
    //    res.send(req.body);
        // res.json()
        const data =
        {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // console.log(jwtData)
        res.json({ authtoken })
     // res.json(user)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("error occured");
    }
})
module.exports = router