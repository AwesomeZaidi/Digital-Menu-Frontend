import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";  
import NoMatch from "./pages/NoMatch";
import AddRestaurant from "./pages/AddRestaurant";
import Locations from "./pages/Locations";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import './styles/variables.scss'
import './styles/components.scss';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <SideMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/addRestaurant" component={AddRestaurant} />
        <Route exact path="/locations" component={Locations} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;