//import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react';
const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64905899ed5d4d7339b029ec",
            "user": "648fab32410c714e2b1ca22c",
            "title": "morning routine",
            "description": "tomorrow i will wake up at 6 am",
            "tag": "routine",
            "timestamp": "2023-06-19T13:31:05.518Z",
            "__v": 0
        },
        {
            "_id": "6491d2798a0b3d66b2c87c40",
            "user": "648fab32410c714e2b1ca22c",
            "title": "mornding routine",
            "description": "aaatomorrow i will wake up at 6 am",
            "tag": "routineaa",
            "timestamp": "2023-06-20T16:23:21.283Z",
            "__v": 0
        },
        {
            "_id": "6491d2808a0b3d66b2c87c42",
            "user": "648fab32410c714e2b1ca22c",
            "title": "morndingdfa routine",
            "description": "aaatoasdfasmorrow i will wake up at 6 am",
            "tag": "routineaafasdf",
            "timestamp": "2023-06-20T16:23:28.596Z",
            "__v": 0
        },
        {
            "_id": "6491d28d8a0b3d66b2c87c44",
            "user": "648fab32410c714e2b1ca22c",
            "title": "yoyo",
            "description": "yoyoyaaatoasdfasmorrow i will wake up at 6 am",
            "tag": "yoyoroutineaafasdf",
            "timestamp": "2023-06-20T16:23:41.892Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};
export default NoteState;
