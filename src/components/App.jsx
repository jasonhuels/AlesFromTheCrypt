import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import MasterBeerList from "./MasterBeerList";
import Employee from "./Employee";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterBeerList: MasterBeerList
    };
    this.handleAddNewBeer = this.handleAddNewBeer.bind(this);
  }

  handleAddNewBeer(newBeer) {
    console.log(this.state);
    let temp = this.state.masterBeerList.slice();
    temp.push(newBeer);
    this.setState({ masterBeerList: temp });
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/beers" render={() => <BeerList masterBeerList={this.state.masterBeerList} />} />
          <Route path="/employee" render={(props) => <Employee masterBeerList={this.state.masterBeerList} currentRouterPath={props.location.pathname} />} />
          <Route path="/newbeer" render={() => <NewBeerForm onAddNewBeer={this.handleAddNewBeer} />} />
          <Route component={Error404} />
  
        </Switch>
      </div>
    );
  }
}

export default App;