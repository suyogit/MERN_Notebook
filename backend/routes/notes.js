//this is also api
const express = require('express');
// const { Schema } = mongoose;
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')

const { body, validationResult } = require('express-validator');
//route 1:get all the notes using :GET "api/notes/fetchallnotes" login req
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

//route 2: add a new note using a post  "api/notes/addnote" login req
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

//route 3: update an existing Note using : put "api/notes/updatenote" .Login required

router.put('/updatenote/:id', fetchuser,
    async (req, res) => {

        const { title, description, tag } = req.body
        //create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find the note to be updated and update it
        let note = await Note.findById(req.params.id);

        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({ note })
    })



//route 4: Delete an existing Note using : delete "api/notes/deletenote" .Login required

router.delete('/deletenote/:id', fetchuser,
    async (req, res) => {

        const { title, description, tag } = req.body



        //find the note to be updated and update it
        let note = await Note.findById(req.params.id);

        if (!note) { return res.status(404).send("Not Found") }

        //check if user own this note or not
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)

        res.json({ "Success": "Your note has been deleted", note: note })
    })

module.exports = router
