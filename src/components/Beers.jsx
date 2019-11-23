import React from "react";
import PropTypes from "prop-types";
import EditBeerForm from "./EditBeerForm";

function Beer(props) {
  let modalContent ="";
  var imageStyle = {
    maxwidth: "200px",
    maxHeight: "200px",
    backgroundColor: "#31ec17",
    marginLeft: "auto",
    marginRight: "auto",
  };
  var beerStyle = {
    width: "300px",
    height: "600px",
    textAlign: "center",
    fontFamily: "'Creepster', cursive",
    backgroundColor: "#31ec17",
    margin: "5px",
    padding: "0",
    border: "solid 2px #d217ec"
  };

  var modalStyle = {
    display: "none",
    position: "fixed",
    zIndex: "1",
    paddingTop: "100px",
    paddingLeft: "100px",
    left: "0",
    top: "0",
    overflow: "auto", 
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  };

  var modalContentStyle = {
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80 %",
  };
  var galleryStyle = {
    
  };
  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  };

  function handleSubtractPint() {
    props.onSubtractPint(props.id);
  }

  function handleEditBeer() {
    props.onEditBeer(props.id);
  }

  function showEditBeerForm() {
    document.getElementById("editModal").style.display = "block";
    console.log(props.id);
    modalContent = < EditBeerForm name = { props.name }
      photo = { props.photo }
      style = { props.style }
      abv = { props.abv }
      price = { props.price }
      description = { props.description }
      pintsLeft = { props.pintsLeft }
      key = { props.id }
      id = { props.id }
      onEditBeer = { props.onEditBeer }
      modal = { document.getElementById("editModal") } />;
  }

  let subButton = props.currentRouterPath === "/employee" ? <button onClick={handleSubtractPint}>Subtract Pint</button> : "";
  let pintsLeft = props.currentRouterPath === "/employee" ? <p>Pints Left:{props.pintsLeft}</p> : "";
  let editButton = props.currentRouterPath === "/employee" ? <button onClick={showEditBeerForm}>Edit Beer Info</button> : "";

  const beerInfo = <div  className="">
    <div style={galleryStyle} className="">
      <div style={beerStyle} className="col s3 card">
        <h3 >{props.name}</h3>
        <img style={imageStyle} src={props.photo} />
        <h5>{props.style} {props.abv} %</h5>
        <h5>${props.price} / pint</h5>
        <h5>{props.description}</h5>
        {pintsLeft}
        {subButton}
        {/* {editButton} */}
      </div>
    </div>
  </div>;
  window.onclick = function (event) {
    if (event.target == document.getElementById("editModal")) {
      document.getElementById("editModal").style.display = "none";
    }
  };



  if (props.currentRouterPath === "/employee") {
    return (
      <div style={contentStyle} >
        {beerInfo} <br/>
        <div id="editModal" style={modalStyle}>
          <div class="modal-content">
            {modalContent}
          </div>
        </div>
        
      </div>
    );
  } else {
    return (
      <div style={contentStyle}>
        {beerInfo}
      </div>
    );
  }
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