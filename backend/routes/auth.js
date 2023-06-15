// this is the api
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
//create a user using :post "/api/auth/"

router.post('/', [
    body('name', 'This name is invalid. Please enter a valid length').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }
    // console.log(req.body);
    // const user = User(req.body);
    // user.save()

    User.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({ error: 'Please ente a unique value ', message: err.message })
        })
    //    res.send(req.body);
        // res.json()

})
module.exports = router