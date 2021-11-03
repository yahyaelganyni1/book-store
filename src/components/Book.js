import React from 'react';
import { PropTypes } from 'prop-types';
// import { useDispatch } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom';

function Book({ category, bookName, Author }) {
  // const dispatch = useDispatch();
  return (
    <li key="11">
      <span>{category}</span>
      <h3>{bookName}</h3>
      <span>{Author}</span>
      <ul>
        <li>
          <Link to="/">Comment</Link>
        </li>
        <li>
          <Link to="/">Remove</Link>
        </li>
        <li>
          <Link to="/">Edit</Link>
        </li>
      </ul>
    </li>
  );
}

export default Book;

Book.propTypes = {
  category: PropTypes.string,
  bookName: PropTypes.string,
  Author: PropTypes.string,
  // key: PropTypes.string,
};

Book.defaultProps = {
  category: PropTypes.string,
  bookName: PropTypes.string,
  Author: PropTypes.string,
  // key: PropTypes.string,
};
