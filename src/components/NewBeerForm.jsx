import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewBeerForm(props) {
  let name = null;
  let photoPath = null;
  let type = null;
  let abv = null;
  let price = null;
  let description = null;

  var inputStyle = {
    color: "white"
  };

  function handleSubmission(event) {
    event.preventDefault();
    props.onAddNewBeer({ name: name.value, photoPath: photoPath.value, type: type.value, abv: abv.value, price: price.value, description: description.value, id: v4() });
    name.value = "";
    photoPath.value = "";
    type.value = "";
    abv.value = "";
    price.value = "";
    description.value = "";
  }
  return (
    <div >
      <form onSubmit={handleSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => { name = input; }} />
        <input
          style={inputStyle}
          type='text'
          id='photoPath'
          placeholder='Photo Path' 
          ref={(input) => { photoPath = input; }}/>
        <input
          style={inputStyle}
          type='text'
          id='type'
          placeholder='Beer Type' 
          ref={(input) => { type = input; }}/>
        <input
          style={inputStyle}
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => { abv = input; }} />
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => { price = input; }} />
        <textarea
          style={inputStyle}
          id='description'
          placeholder='Beer Description' 
          ref={(input) => { description = input; }}/>
        <button type='submit'>Tap the keg</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onAddNewBeer: PropTypes.func
};

export default NewBeerForm;