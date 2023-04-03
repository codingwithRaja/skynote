import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context/notes/Context';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
// import Modal from './Modal';


function SkNotes(props) {
    const context = useContext(AppContext)
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);
    const ref = useRef(null)
    const refClose = useRef(null)


    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })


    }
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })
    const addHandleClick = (e) => {
        console.log("Note is updated", note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert(":-Updated successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <div>
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group my-3">
                                        <label htmlFor="title" className='fst-italic fw-bold'>Title</label>
                                        <input type="text" className="form-control my-2 fst-italic" id="etitle" name='etitle' value={note.etitle} placeholder="Enter your title" onChange={onChange} />


                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="description" className='fst-italic fw-bold'>Description</label>
                                        <input type="text" className="form-control my-2 fst-italic" id="edescription" name='edescription' value={note.edescription} placeholder="Enter your Note" onChange={onChange} />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="tag" className='fst-italic fw-bold'>Tag</label>
                                        <input type="text" className="form-control my-2 fst-italic" id="etag" name='etag' placeholder="Enter your Tag" value={note.etag} onChange={onChange} />
                                    </div>


                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length < 3 || note.edescription.length < 5} onClick={addHandleClick} type="button" className="btn btn-primary">Update Note</button>
                            </div>
                        </div>
                    </div>
                </div></div>
            <div className="row my-3">
                <h2 className='text-info fst-italic fw-bold'>Your Notes</h2>

                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />
                })}
                <div className="container ">
                    {notes.length === 0 && 'No Notes to display'}
                </div>
            </div>

        </>
    )
}

export default SkNotes
