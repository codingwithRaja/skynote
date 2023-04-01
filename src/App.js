
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';





function App() {

  return (
    <>


      <Navbar />
      <Alert message="Your Note added" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>

    </>

  );
}


export default App;



