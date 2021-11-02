import React from 'react';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Link } from 'react-router-dom';

function Book({ category, bookName, Author }) {
  return (
    <div>
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
    </div>
  );
}

export default Book;

Book.propTypes = {
  category: PropTypes.string,
  bookName: PropTypes.string,
  Author: PropTypes.string,
};

Book.defaultProps = {
  category: PropTypes.string,
  bookName: PropTypes.string,
  Author: PropTypes.string,
};
