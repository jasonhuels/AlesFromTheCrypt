import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/beers' component={BeerList} />
        <Route path='/newbeer' component={NewBeerForm} />
      </Switch>
    </div>
  );
}

export default App;