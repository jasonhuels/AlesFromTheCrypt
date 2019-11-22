import React from "react";
import Beer from "./Beers";

function BeerList(props) {
  props.masterBeerList.sort((a, b) => a.price - b.price);
  return (
    <div>
      <button onClick={()=>{}} >Price</button>
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