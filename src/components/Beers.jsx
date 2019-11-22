import React from "react";
import PropTypes from "prop-types";

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
    fontFamily: "'Creepster', cursive",
    backgroundColor: "#31ec17",
    margin: "5px",
    padding: "0",
    border: "solid 2px #d217ec"
  };
  var galleryStyle = {
    
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
          <h5>${props.price} / pint</h5>
          <h5>{props.description}</h5>
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
  price: PropTypes.string,
  description: PropTypes.string,
};

export default Beer;