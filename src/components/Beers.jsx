import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";

function Beer(props) {
  var imageStyle = {
    maxwidth: "200px",
    maxHeight: "200px",
    backgroundColor: "#31ec17",
    marginLeft: "auto",
    marginRight: "auto",
  };
  var beerStyle = {
    width: "300px",
    height: "500px",
    textAlign: "center",
    fontFamily: "crypt",
    backgroundColor: "#31ec17",
    margin: "5px",
    border: "solid 2px #d217ec"
  };
  var galleryStyle = {
    // margin: "0 auto 0 auto",
  };
  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  };
  return (

    <div style={contentStyle} className="">
      <div style={galleryStyle} className="">
        <div style={beerStyle} className="col s3 card">
          <h3 >{props.name}</h3>
          <img style={imageStyle} src={props.photo} />
          <h5>{props.style} {props.abv} %</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.string,
  description: PropTypes.string,
};

export default Beer;