//this is also api
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([])
    //  res.send([])

})
module.exports = router