// this is the api
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        name: "suyog",
        no: 45
    }
    res.json(obj)

})
module.exports = router