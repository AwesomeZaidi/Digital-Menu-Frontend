import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";  
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import AddRestaurant from "./components/Forms/AddRestaurant";
import Items from "./pages/Items";
import UpdateLocation from "./pages/UpdateLocation";
import Restaurants from "./pages/Restaurants";
import Locations from "./pages/Locations";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
// import Footer from "./components/Footer";
import AddLocation from "./components/Forms/AddLocation";
import './styles/variables.scss'
import './styles/components.scss';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
      {/* <div> */}
        <NavBar />
        {this.props.user ? <SideMenu /> : null}      
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/addRestaurant" component={AddRestaurant} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/restaurant/:restaurantId/locations" component={Locations} />
            <Route exact path="/addLocation" component={AddLocation} />
            <Route exact path="/restaurant/:restaurantId/location/:locationId/" component={UpdateLocation} />        
            <Route exact path="/restaurant/:restaurantId/location/:locationId/items" component={Items} />        
            <Route component={NoMatch} />
        </Switch>
        {/* <Footer/> */}
      {/* </div> */}
    </Router>
    );
  }
}
// const App = () => (
//   <Router>
//     {/* <div> */}
//       <NavBar />
//       {/* {this.props.user ? <SideMenu /> : null}       */}
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/signup" component={Signup} />
//           <Route exact path="/Dashboard" component={Dashboard} />
//           <Route exact path="/addRestaurant" component={AddRestaurant} />
//           <Route exact path="/restaurants" component={Restaurants} />
//           <Route exact path="/restaurant/:restaurantId/locations" component={Locations} />
//           <Route exact path="/addLocation" component={AddLocation} />
//           <Route exact path="/restaurant/:restaurantId/location/:locationId/" component={UpdateLocation} />        
//           <Route exact path="/restaurant/:restaurantId/location/:locationId/items" component={Items} />        
//           <Route component={NoMatch} />
//       </Switch>
//     {/* </div> */}
//   </Router>
// );

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, null)(App);
