import React from "react";
import PropTypes from "prop-types";
import BeerList from "./BeerList";

function Employee(props){
  return(
    <div>
      <h1>Employee Portal</h1>
    </div>
  );
}

Employee.propTypes = {
  beetList: PropTypes.array,
};

export default Employee;