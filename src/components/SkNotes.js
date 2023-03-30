import React, { useContext } from 'react'
import { AppContext } from '../context/notes/Context';
import NoteItem from './NoteItem';
import AddNote from './AddNote';



function SkNotes() {
    const context = useContext(AppContext)
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2 className='text-info fst-italic fw-bold'>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>

        </>
    )
}

export default SkNotes
