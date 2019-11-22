import React from "react";
import Beer from "./Beers";

class BeerList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortOrder: name
    };
    this.handleChangeSortOrder = this.handleChangeSortOrder.bind(this);
  }

  handleChangeSortOrder(newOrder){
    this.setState({sortOrder: newOrder});
  }

  render() {
    let sortButtonBar = {
      display: "flex",
      justifyContent: "center",
      paddingTop: "20px"
    };

    let sortButton = {
      color: "lime",
      fontSize: "25px",
      fontFamily: "'Creepster', cursive",
      backgroundColor: "black",
      border: "solid #d217ec 2px"
    };

    return (
      <div>
          <h5 style={{ color: "#d217ec", textAlign: "center"}}>Sort by:</h5>
        <div style={sortButtonBar}>
          <button style={sortButton} onClick={() => { this.handleChangeSortOrder(this.props.masterBeerList.sort((a, b) => a.price - b.price))}}>Ascending Price</button>
          <button style={sortButton} onClick={() => { this.handleChangeSortOrder(this.props.masterBeerList.sort((a, b) => b.price - a.price)) }}>Descending Price</button>
          <button style={sortButton} onClick={() => { this.handleChangeSortOrder(this.props.masterBeerList.sort((a, b) => a.pintsLeft - b.pintsLeft)) }}>Pints Remaining</button>
        </div><br/>
        {this.props.masterBeerList.map((beer, index) =>
          <Beer name={beer.name}
            photo={beer.photo}
            style={beer.style}
            abv={beer.abv}
            price={beer.price}
            description={beer.description}
            pintsLeft={beer.pintsLeft}
            key={index} 
            id={beer.id}
            currentRouterPath={this.props.currentRouterPath}
            onSubtractPint={this.props.onSubtractPint}
            onEditBeer={props.onEditBeer}/>
        )}
      </div>
    );
  }
}

export default BeerList;