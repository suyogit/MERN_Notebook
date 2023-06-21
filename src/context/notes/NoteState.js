//import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react';
const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "649053899ed5d4d7339b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "6491d27398a0b3d66b2c87c40",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title2",
            "description": "description2",
            "tag": "routineaa",
            "timestamp": "2023-06-20T16:23:21.283Z",
            "__v": 0
        },
        {
            "_id": "6491d2808a0b3d646b2c87c42",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title3",
            "description": "description3",
            "tag": "routineaafasdf",
            "timestamp": "2023-06-20T16:23:28.596Z",
            "__v": 0
        },
        {
            "_id": "6491d28dgf8a0b3d66b2c87c44",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title4",
            "description": "description4",
            "tag": "yoyoroutineaafasdf",
            "timestamp": "2023-06-20T16:23:41.892Z",
            "__v": 0
        },
        {
            "_id": "649058sfd99ed5d4d7339b029eac",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "6490j5899ed5d4d7339b029e1c",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "64905899ejgfd5d4d73394b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "64905899jhged5d4d7339b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "6490jfgjy5899ed5d4d7339b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "6490fs5899ed5d4d7339b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "6499y805899ed5d4d7339b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": "title1",
            "description": "description1",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)


    //add note

    const addNote = (title, description, tag) => {
        const note = {
            "_id": "6499y805899ed5d4d7339b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": title,
            "description": description,
            "tag": tag,
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        };
        setNotes(notes.concat(note))

    }
    //edit note


    const editnote = (id, title, description, tag) => {

    }
    //delete note
    const deleteNote = (id) => {
        console.log("deleted with id " + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, editnote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};
export default NoteState;
