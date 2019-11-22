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
      justifyContent: "center"
    };

    return (
      <div>
        <div style={sortButtonBar}>
          <button onClick={() => { this.handleChangeSortOrder(this.props.masterBeerList.sort((a, b) => a.price - b.price))}}>Ascending Price</button>
          <button onClick={() => { this.handleChangeSortOrder(this.props.masterBeerList.sort((a, b) => b.price - a.price)) }}>Descending Price</button>
          <button onClick={() => { this.handleChangeSortOrder(this.props.masterBeerList.sort((a, b) => a.pintsLeft - b.pintsLeft)) }}>Pints Remaining</button>
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
            onSubtractPint={this.props.onSubtractPint}/>
        )}
      </div>
    );
  }
}

export default BeerList;