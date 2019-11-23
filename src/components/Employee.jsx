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
  masterBeerList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onSubtractPint: PropTypes.func,
  onEditBeer: PropTypes.func
};

export default Employee;