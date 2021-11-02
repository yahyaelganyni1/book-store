import React from 'react';

const AddBook = () => (
  <div>
    <input type="text" placeholder="new book" />
    <select id="cars" name="cars">
      <option>Action</option>
      <option>Comedy</option>
      <option>Drama</option>
      <option>Horror</option>
      <option>Romance</option>
    </select>
    <button type="button">Add Book</button>
  </div>
);

export default AddBook;
