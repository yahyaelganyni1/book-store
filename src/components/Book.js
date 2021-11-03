import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom';
import { removeBook } from '../redux/books/books';

function Book({
  category,
  title,
  author,
  id,
}) {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{category}</span>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <ul>
        <li>
          <Link to="/">Comment</Link>
        </li>
        <li>
          <button type="button" onClick={() => dispatch(removeBook(id))}>
            Remove
          </button>
        </li>
        <li>
          <Link to="/">Edit</Link>
        </li>
      </ul>
    </li>
  );
}

Book.propTypes = {
  category: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default Book;
