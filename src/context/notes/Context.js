import { useState } from "react";
import React, { createContext } from "react";

// Context Api use three method for avoiding props hell

// Create a Context (Exp:Warehouse)
const AppContext = createContext();

// Provider (exp:who is provide things from warehouse)
const AppProvider = ({ children }) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Get All  Notes
    const getNotes = async () => {
        // console.log("Fetching All Notes")

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        // console.log(json)
        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // console.log("Adding a new note")
        // TODO API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },

            body: JSON.stringify({ title, description, tag }),
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // Fetch APi
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = response.json();
        console.log(json)
        // console.log("deleting the note with id " + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // Fetch APi
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },

            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();
        console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes))
        // logic dor edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };
    return <AppContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }} >
        {children}
    </AppContext.Provider >

    // Global Custom Hook

    // const useGlobalContext = () => {
    //     return useContext(AppContext);
    // };
}
export { AppContext, AppProvider };
