import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const addNewBook = () => {
    const newBook = {
      title,
      author,
      id: uuidv4(),
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Book title"
        onChange={handelTitleChange}
        value={title}
        required
      />
      <input
        type="text"
        placeholder="Book auther"
        onChange={handelAuthorChange}
        value={author}
        required
      />
      <select id="cars" name="cars">
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Romance</option>
      </select>
      <button type="button" value="ADD BOOK" onClick={addNewBook}>
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
