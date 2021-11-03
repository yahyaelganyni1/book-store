import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            category="Action"
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default Books;
