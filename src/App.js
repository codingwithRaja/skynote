
import './App.css';
import Navbar from './components/Navbar';
// import { Route, Routes } from "react-router-dom";
// import Home from './components/Home';
// import About from './components/About';


function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        {/* <Routes>
          <Route exact path="/Home"><Home /></Route>
          <Route exact path="/About"><About /></Route>
        </Routes> */}
        <h1>this is Skynote_app</h1>
      </div>
    </>

  );
}

export default App;
