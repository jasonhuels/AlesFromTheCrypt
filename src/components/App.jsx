import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <div className="row">
          <Route path='/beers' component={BeerList} />
          <Route path='/newbeerform' component={NewBeerForm} />
        </div>
      </Switch>
    </div>
  );
}

export default App;