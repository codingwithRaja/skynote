
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';





function App() {

  return (
    <>


      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
      </div>

    </>

  );
}


export default App;



