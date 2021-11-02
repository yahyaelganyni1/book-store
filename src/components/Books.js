import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  return (
    <div>
      <Book category="action" bookName="hello1" Author="yahya" />
      <Book category="drama" bookName="hello2" Author="ahmed" />
      <Book category="Horror " bookName="hello3" Author="no one" />
      <AddBook />
    </div>
  );
}

export default Books;
