import React, { useContext } from 'react'
import { AppContext } from '../context/notes/Context';
import NoteItem from './NoteItem';

function SkNotes() {
    const context = useContext(AppContext)
    const { notes, setNotes } = context;
    return (

        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} />
            })}
        </div>

    )
}

export default SkNotes
