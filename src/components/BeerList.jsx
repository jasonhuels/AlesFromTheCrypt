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
    price: "4.50",
    description: "A beer so bitter it will feel like your taste buds are being impaled.",
  },
  {
    name: "Ale From the Black Lagoon",
    photo: dark,
    style: "Stout",
    abv: "8.5",
    price: "4.50",
    description: "Hello darkness, my old friend...",
  },
  {
    name: "redruM Red Ale",
    photo: red,
    style: "Red Ale",
    abv: "6.5",
    price: "4.00",
    description: "All work and no beer makes Jack a dull boy.",
  },
  {
    name: "Sour of the Wolf",
    photo: sour,
    style: "Sour Ale",
    abv: "4.8",
    price: "6.00",
    description: "Painfully sour",
  },
  {
    name: "Hurt Lager",
    photo: lager,
    style: "Lager",
    abv: "4.5",
    price: "2.50",
    description: "Lagers are boring, this one is no different.",
  },
  {
    name: "Torture Porter",
    photo: porter,
    style: "Porter",
    abv: "6.5",
    price: "4.00",
    description: "Sickening sweet",
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
          price={beer.price}
          description={beer.description}
          key={index} />
      )}
    </div>
  );
}


export default BeerList;