import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditBeerForm(props) {
  let name = props.name;
  let photoPath = props.photoPath;
  let type = props.type;
  let abv = props.abv;
  let price = props.price;
  let description = props.description;

  var inputStyle = {
    color: "white"
  };

  function handleSubmission(event) {
    event.preventDefault();
    props.onEditBeer({ name: name.value, photoPath: photoPath.value, style: type.value, abv: abv.value, price: price.value, description: description.value, pintsLeft: props.pintsLeft, id: props.id});
    name.value = "";
    photoPath.value = "";
    type.value = "";
    abv.value = "";
    price.value = "";
    description.value = "";
    props.modal.style.display = "none";
  }
  return (
    <div >
      <form onSubmit={handleSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='name'
          defaultValue = {props.name}
          ref={(input) => { name = input; }} />
        <input
          style={inputStyle}
          type='text'
          id='photoPath'
          defaultValue={props.photoPath}
          ref={(input) => { photoPath = input; }} />
        <input
          style={inputStyle}
          type='text'
          id='type'
          defaultValue={props.type}
          ref={(input) => { type = input; }} />
        <input
          style={inputStyle}
          type='text'
          id='abv'
          defaultValue={props.abv}
          ref={(input) => { abv = input; }} />
        <input
          style={inputStyle}
          type='text'
          id='price'
          defaultValue={props.price}
          ref={(input) => { price = input; }} />
        <textarea
          style={inputStyle}
          id='description'
          defaultValue={props.description}
          ref={(input) => { description = input; }} />
        <button type='submit'>Edit Beer</button>
      </form>
    </div>
  );
}

EditBeerForm.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  onEditBeer: PropTypes.func
};

export default EditBeerForm;