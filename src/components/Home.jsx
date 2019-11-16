import React from "react";
import bar from "../assets/img/bar.jpg";

function Home() {

  var imageStyle = {
    width: "75%",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    borderRadius: "20%",
    border: "solid 2px #d217ec"
  };
  return (
    <div>
      <img style={imageStyle} src={bar}></img>
    </div>
  );
}

export default Home;