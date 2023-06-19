//this is also api
const express = require('express');
// const { Schema } = mongoose;
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')

const { body, validationResult } = require('express-validator');
//route 1:get all the notes using :GET "api/auth/fetchallnotes" login req
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error  occured");
    }

})

//route 2: add a new note using a post  "api/auth/addnote" login req
router.post('/addnote', fetchuser,
    [
        body('title', 'This name is invalid. Please enter a valid title').isLength({ min: 3 }),
        body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    ],
    async (req, res) => {
        try {

            const { title, description, tag } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({

                title, description, tag, user: req.user.id
            })
            const savednote = await note.save()
            res.json(savednote)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error  occured");
        }

})
module.exports = router