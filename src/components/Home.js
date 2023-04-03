import React from 'react'
import SkNotes from './SkNotes';



const Home = (props) => {
    const { showAlert } = props
    return (
        <>
            <SkNotes showAlert={showAlert} />
        </>
    )
}

export default Home
