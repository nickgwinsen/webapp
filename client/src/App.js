import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {
  return (

    <div>
      <Home> Hello </Home>
      <router>
        <layout>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/profile' element={<Profile />} />

          </Routes>
        </layout>
      </router>
    </div>






  );
}

export default App;
