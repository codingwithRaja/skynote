import React, { useContext } from 'react'
import { AppContext } from '../context/notes/Context';


const NoteItem = (props) => {
    const context = useContext(AppContext)
    const { deleteNote } = context;
    // const { editNote } = context;

    const { note, updateNote } = props;
    return (
        <div className='col-md-3' >


            <div className="card my-3" >

                <div className="card-body">
                    <span className="position-absolute top-0  badge rounded-pill bg-warning" style={{ transform: "translate(-27%,-50%)" }}>{note.tag}</span>
                    <h5 className="card-title text-info fst-italic fw-bold">{note.title}</h5>
                    <p className="card-text text-secondary">{note.description} </p>
                    <i className="fa-solid fa-trash mx-3" onClick={() => {
                        deleteNote(note._id);
                        props.showAlert(":-Deleted successfully", "success")
                    }}></i>
                    <i className="fa-solid fa-pen-to-square mx-3" onClick={() => {
                        updateNote(note);

                    }}></i>

                </div>
            </div>
        </div>
    )
}

export default NoteItem