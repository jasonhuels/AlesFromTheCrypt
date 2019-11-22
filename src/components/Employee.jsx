import React from "react";
import PropTypes from "prop-types";
import BeerList from "./BeerList";

function Employee(props){
  return(
    <div>
      <BeerList
        masterBeerList={props.masterBeerList} 
        currentRouterPath={props.currentRouterPath} 
        onSubtractPint={props.onSubtractPint}
        onEditBeer={props.onEditBeer} />}/>
    </div>
  );
}

Employee.propTypes = {
  beetList: PropTypes.array,
};

export default Employee;