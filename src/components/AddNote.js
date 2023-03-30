import React, { useContext, useState } from 'react'
import { AppContext } from '../context/notes/Context';

const AddNote = () => {
    const context = useContext(AppContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "default" })
    const addHandleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container my-3 ">
                <h2 className='text-warning fst-italic fw-bold'>Add a Notes</h2>
                <form>
                    <div className="form-group my-3">
                        <label htmlFor="title" className='fst-italic fw-bold'>Title</label>
                        <input type="text" className="form-control my-2 fst-italic" id="title" name='title' placeholder="Enter your title" onChange={onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your Note with anyone else.</small>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="description" className='fst-italic fw-bold'>Description</label>
                        <input type="text" className="form-control my-2 fst-italic" id="description" name='description' placeholder="Enter your Note" onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-warning fst-italic fw-bold" onClick={addHandleClick}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddNote