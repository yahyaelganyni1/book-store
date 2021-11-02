import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">categories</Link>
      </li>
    </ul>
  </header>
);

export default Header;
