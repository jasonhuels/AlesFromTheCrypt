import React from "react";
import Beer from "./Beers";

function BeerList(props) {
  return (
    <div>
      {props.masterBeerList.map((beer, index) =>
        <Beer name={beer.name}
          photo={beer.photo}
          quote={beer.quote}
          style={beer.style}
          abv={beer.abv}
          price={beer.price}
          description={beer.description}
          key={index} />
      )}
    </div>
  );
}

export default BeerList;