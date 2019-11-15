import React from "react";
import Beer from "./Beers";
import ipa from "../assets/img/ipa.png";
import dark from "../assets/img/dark.png";
import red from "../assets/img/red.png";
import sour from "../assets/img/sour.png";
import lager from "../assets/img/lager.png";
import porter from "../assets/img/porter.png";

var masterBeerList = [
  {
    name: "Impale Ale",
    photo: ipa,
    style: "IPA",
    abv: "8",
    description: "bitter",
  },
  {
    name: "Ale From the Black Lagoon",
    photo: dark,
    style: "Stout",
    abv: "8.5",
    description: "bitter",
  },
  {
    name: "redruM Red Ale",
    photo: red,
    style: "Red Ale",
    abv: "6.5",
    description: "bitter",
  },
  {
    name: "Sour",
    photo: sour,
    style: "Sour Ale",
    abv: "4.8",
    description: "sour",
  },
  {
    name: "Lager",
    photo: lager,
    style: "Lager",
    abv: "4.5",
    description: "weak",
  },
  {
    name: "Porter",
    photo: porter,
    style: "Porter",
    abv: "6.5",
    description: "sweet",
  },
];

function BeerList() {
  return (
    <div>
      {masterBeerList.map((beer, index) =>
        <Beer name={beer.name}
          photo={beer.photo}
          quote={beer.quote}
          style={beer.style}
          abv={beer.abv}
          description={beer.description}
          key={index} />
      )}
    </div>
  );
}


export default BeerList;