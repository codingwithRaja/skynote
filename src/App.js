
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
import User from './components/User';





function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>


      <Navbar />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/User" element={<User />}></Route>
          <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route exact path="/signup" element={<SignUp showAlert={showAlert} />}></Route>
        </Routes>
      </div>

    </>

  );
}


export default App;



