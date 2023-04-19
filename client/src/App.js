import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {
  return (
    <div>
      <h1>Hello</h1>
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
