import axios from 'axios';
import { useEffect, useState } from 'react';

import { BooksContainer } from './Books.style';
import Book from './Book/Book';
import Loader from '../Loader/Loader';

import { IBook } from '../../interfaces/Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const results = await axios.get(`${process.env.REACT_APP_API_URL}/books`);
        const { books } = results.data;
        setBooks(books);
        setLoading(false);
      } catch (error) {
        console.log(`Error ${JSON.stringify(error)}`);
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  return (
    <BooksContainer>
      {loading && <Loader />}
      {books &&
        books.map((book: IBook) => {
          return <Book key={book.id} book={book} />;
        })}
    </BooksContainer>
  );
};

export default Books;
