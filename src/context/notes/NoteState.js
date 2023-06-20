import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react';
const NoteState = (props) => {



    const s1 = {
        "name": "Suyog sir",
        "class": "3rdsem"

    };


    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState(
                {
                    "name": "Suyog don",
                    "class": "5thsem"
                }
            )
        }, 4000);
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {/* </NoteContext.Provider> <NoteContext.Provider value={{ state:state, update:update }}> */}
            {props.children}
        </NoteContext.Provider>
    );
};
export default NoteState;
