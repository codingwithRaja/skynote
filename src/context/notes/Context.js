import { useState } from "react";
import React, { createContext } from "react";
// Context Api use three method for avoiding props hell

// Create a Context (Exp:Warehouse)
const AppContext = createContext();

// Provider (exp:who is provide things from warehouse)
const AppProvider = ({ children }) => {
    const notesInitial = [
        {
            "_id": "641f2fc654ffe28d10bcfd7a",
            "user": "641eeb10222dc94662e7e871",
            "title": "Alarm",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-03-25T17:30:46.794Z",
            "__v": 0
        },
        {
            "_id": "641f37dc711a71f6acba3182",
            "user": "641eeb10222dc94662e7e871",
            "title": "Plan",
            "description": "Sleeping All day",
            "tag": "Sona",
            "date": "2023-03-25T18:05:16.858Z",
            "__v": 0
        },
        {
            "_id": "641f428e3ef01f5a37fb91b4",
            "user": "641eeb10222dc94662e7e871",
            "title": "FULL Programing mode",
            "description": "24 hour coding",
            "tag": "Kam Kaj",
            "date": "2023-03-25T18:50:54.615Z",
            "__v": 0
        },
        {
            "_id": "641f2fc654ffe28d10bcfd7a",
            "user": "641eeb10222dc94662e7e871",
            "title": "Alarm",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-03-25T17:30:46.794Z",
            "__v": 0
        },
        {
            "_id": "641f37dc711a71f6acba3182",
            "user": "641eeb10222dc94662e7e871",
            "title": "Plan",
            "description": "Sleeping All day",
            "tag": "Sona",
            "date": "2023-03-25T18:05:16.858Z",
            "__v": 0
        },
        {
            "_id": "641f428e3ef01f5a37fb91b4",
            "user": "641eeb10222dc94662e7e871",
            "title": "FULL Programing mode",
            "description": "24 hour coding",
            "tag": "Kam Kaj",
            "date": "2023-03-25T18:50:54.615Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return <AppContext.Provider value={{ notes, setNotes }} >
        {children}
    </AppContext.Provider >

};
// Global Custom Hook

// const useGlobalContext = () => {
//     return useContext(AppContext);
// };
export { AppContext, AppProvider };