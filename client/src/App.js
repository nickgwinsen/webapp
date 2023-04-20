import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/pages/Profile"
import Register from "./Components/pages/Register"
import Login from "./Components/pages/Login"
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <Home> </Home>
      <Footer></Footer>

    </div>




  );
}

export default App;
