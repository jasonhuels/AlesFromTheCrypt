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
    this.handleSubtractPint = this.handleSubtractPint.bind(this);
    this.handleEditBeer = this.handleEditBeer.bind(this);
  }

  handleAddNewBeer(newBeer) {
    let temp = this.state.masterBeerList.slice();
    temp.push(newBeer);
    this.setState({ masterBeerList: temp });
  }

  handleEditBeer(beerToEdit) {
    let temp = this.state.masterBeerList.slice();
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === beerToEdit.id) {
        temp.splice(i, 1, beerToEdit);
        break;
      }
    }
    this.setState({ masterBeerList: temp });
  }

  handleSubtractPint(id) {
    let temp = this.state.masterBeerList.slice();
    for(let i=0; i<temp.length; i++) {
      if(temp[i].id === id){
        temp[i].pintsLeft--;
        if(temp[i].pintsLeft <= 0) {
          temp.splice(i, 1);
        }
        break;
      }
    }

    this.setState({ masterBeerList: temp });
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/beers" render={() => <BeerList masterBeerList={this.state.masterBeerList} />} />
          <Route path="/employee" render={(props) => <Employee masterBeerList={this.state.masterBeerList} currentRouterPath={props.location.pathname} onSubtractPint={this.handleSubtractPint} onEditBeer={this.handleEditBeer}/>} />
          <Route path="/newbeer" render={() => <NewBeerForm onAddNewBeer={this.handleAddNewBeer} />} />
          <Route component={Error404} />
  
        </Switch>
      </div>
    );
  }
}

export default App;