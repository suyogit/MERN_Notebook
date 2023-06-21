//import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react';
const NoteState = (props) => {
    const host = "http://localhost:5000"

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)



    //get all node
    const getNotes = async () => {
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZmFiMzI0MTBjNzE0ZTJiMWNhMjJjIn0sImlhdCI6MTY4NzE3ODg1MH0.ZnMDs1-37hrMCtKYDHppKUc0kOc63ZUA0lEBqkcDJ7U"
            }

        });
        const json = await response.json()
        console.log(json)
        setNotes(json)

    }


    //add note



    const addNote = async (title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZmFiMzI0MTBjNzE0ZTJiMWNhMjJjIn0sImlhdCI6MTY4NzE3ODg1MH0.ZnMDs1-37hrMCtKYDHppKUc0kOc63ZUA0lEBqkcDJ7U"
            },
            body: JSON.stringify({ title, description, tag }),
        });

        console.log("adding a new note")
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


    const editnote = async (id, title, description, tag) => {


        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZmFiMzI0MTBjNzE0ZTJiMWNhMjJjIn0sImlhdCI6MTY4NzE3ODg1MH0.ZnMDs1-37hrMCtKYDHppKUc0kOc63ZUA0lEBqkcDJ7U"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();


        // logic to edit in client

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    //delete note
    const deleteNote = async (id) => {
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZmFiMzI0MTBjNzE0ZTJiMWNhMjJjIn0sImlhdCI6MTY4NzE3ODg1MH0.ZnMDs1-37hrMCtKYDHppKUc0kOc63ZUA0lEBqkcDJ7U"
            }
        });
        const json = response.json();
        console.log(json)
        console.log("deleted with id " + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, editnote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};
export default NoteState;
