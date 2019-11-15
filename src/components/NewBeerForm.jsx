import React from "react";

function NewBeerForm() {
  var inputStyle = {
    color: "white"
  };
  return (
    <div >
      <form>
        <input
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Beer Name' />
        <input
          style={inputStyle}
          type='text'
          id='photoPath'
          placeholder='Photo Path' />
        <input
          style={inputStyle}
          type='text'
          id='type'
          placeholder='Beer Type' />
        <input
          style={inputStyle}
          type='text'
          id='abv'
          placeholder='ABV' />
        <textarea
          style={inputStyle}
          id='description'
          placeholder='Beer Description' />
        <button type='submit'>Tap the keg</button>
      </form>
    </div>
  );
}

export default NewBeerForm;