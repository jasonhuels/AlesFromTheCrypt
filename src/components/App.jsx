import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
  
          <Route path='/beers' component={BeerList} />
          <Route path='/newbeerform' component={NewBeerForm} />
          <Route component={Error404} />
  
        </Switch>
      </div>
    );
  }
}

export default App;