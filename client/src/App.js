import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {
  return (
    <Router>

      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />

        </Switch>
        <Home />


      </div>
    </Router>
  );
}

export default App;
