import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const books = useSelector((state) => state.reducer);
  return (
    <ul>
      {books.map((book) => (
        <Book
          category="action"
          bookName={book.title}
          Author={book.Author}
          key="11"
        />
      ))}
      <AddBook />
    </ul>
  );
}

export default Books;
