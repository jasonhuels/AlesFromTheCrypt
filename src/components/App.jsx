import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import MasterBeerList from "./MasterBeerList"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterBeerList: MasterBeerList
    };
  }

  render() {
    return (
      <div className="container">
      {console.log(this.state.masterBeerList)}
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/beers" render={() => <BeerList masterBeerList={this.state.masterBeerList} />} />
          <Route path='/newbeerform' component={NewBeerForm} />
          <Route component={Error404} />
  
        </Switch>
      </div>
    );
  }
}

export default App;