import React from "react";
import Beer from "./Beers";

function BeerList(props) {
  const sortBy = {
    PINTSLEFT_ASC: props.masterBeerList.sort((a, b) => a.pintsLeft - b.pintsLeft),
    PINTSLEFT_DESC: props.masterBeerList.sort((a, b) => b.pintsLeft - a.pintsLeft),

  };
  //props.masterBeerList.sort((a, b) => a.pintsLeft - b.pintsLeft);
  return (
    <div>
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <button>Sort</button>
      {props.masterBeerList.map((beer, index) =>
        <Beer name={beer.name}
          photo={beer.photo}
          style={beer.style}
          abv={beer.abv}
          price={beer.price}
          description={beer.description}
          pintsLeft={beer.pintsLeft}
          key={index} 
          id={beer.id}
          currentRouterPath={props.currentRouterPath}
          onSubtractPint={props.onSubtractPint}/>
      )}
    </div>
  );
}

export default BeerList;