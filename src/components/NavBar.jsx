import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/banner.png";

function NavBar() {
  
  
  var navBarButton = {
    fontFamily: "'Creepster', cursive",
    fontSize: "25px",
    margin: "0 50px 0 50px",
    display: "inline-block",
    backgroundColor: "#31ec17",
    border: "solid 2px #d217ec",
  };
  var navBar = {

    display: "block",
    margin: "0% auto 0% auto",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
  };
  var navLink = {
    color: "black",
  };
  var navImage = {
    marginTop: "5px",
    marginBottom: "0px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    backgroundColor: "black",
    width: "100%",
  };
  return (

    <div className="">
        
      <div className="col s12">
        <img style={navImage} src={banner}/>
      </div>

      <div className=" " style={navBar}>
        <div className="col s12">
          <button className="btn" style={navBarButton}><Link style={navLink} to="/">Home</Link></button>
          <button className="btn" style={navBarButton}><Link style={navLink} to="/beers">Beers</Link></button>
          <button className="btn" style={navBarButton}><Link style={navLink} to="/employee">Employee</Link></button>
          <button className="btn" style={navBarButton}><Link style={navLink} to="/newbeer">Add a Beer</Link></button>
        </div>
      </div>
    </div>
  );
}
export default NavBar;