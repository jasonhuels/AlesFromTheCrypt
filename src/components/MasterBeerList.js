import ipa from "../assets/img/ipa.png";
import dark from "../assets/img/dark.png";
import red from "../assets/img/red.png";
import sour from "../assets/img/sour.png";
import lager from "../assets/img/lager.png";
import porter from "../assets/img/porter.png";
import { v4 } from "uuid";

let masterBeerList = [
  {
    name: "Impale Ale",
    photo: ipa,
    style: "IPA",
    abv: "8",
    price: "4.50",
    description: "A beer so bitter it will feel like your taste buds are being impaled.",
    pintsLeft: 124,
    id: v4()
  },
  {
    name: "Ale From the Black Lagoon",
    photo: dark,
    style: "Stout",
    abv: "8.5",
    price: "4.50",
    description: "Hello darkness, my old friend...",
    pintsLeft: 4,
    id: v4()
  },
  {
    name: "redruM Red Ale",
    photo: red,
    style: "Red Ale",
    abv: "6.5",
    price: "4.00",
    description: "All work and no beer makes Jack a dull boy.",
    pintsLeft: 124,
    id: v4()
  },
  {
    name: "Sour of the Wolf",
    photo: sour,
    style: "Sour Ale",
    abv: "4.8",
    price: "6.00",
    description: "Painfully sour",
    pintsLeft: 124,
    id: v4()
  },
  {
    name: "Hurt Lager",
    photo: lager,
    style: "Lager",
    abv: "4.5",
    price: "2.50",
    description: "Lagers are boring, this one is no different.",
    pintsLeft: 124,
    id: v4()
  },
  {
    name: "Torture Porter",
    photo: porter,
    style: "Porter",
    abv: "6.5",
    price: "4.00",
    description: "Sickening sweet",
    pintsLeft: 124,
    id: v4()
  },
];

export default masterBeerList;