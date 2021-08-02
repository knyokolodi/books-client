import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IBook, IBookDetailsParams } from '../../../interfaces/Book';
import {
  BookDetailsContainer,
  BookDetailTitle,
  BookDetailImage,
  BookDetailSummary,
  BookDetailButton,
  BookDetailLink,
  BookDetailFooter,
} from './BookDetails.style';
import Loader from '../../Loader/Loader';

const BookDetails = () => {
  const [book, setBook] = useState<IBook>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams<IBookDetailsParams>();
  const history = useHistory();

  useEffect(() => {
    const getBook = async () => {
      try {
        const results = await axios.get(`${process.env.REACT_APP_API_URL}/api/books/${id}`);
        const { book } = results.data;

        setBook(book);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(`Error ${JSON.stringify(error)}`);
      }
    };

    getBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      const isConfirm = window.confirm('Want to delete?');
      if (isConfirm) {
        const results = await axios.delete(`${process.env.REACT_APP_API_URL}/api/books/${id}`);
        const { success } = results.data;

        if (success === true) {
          toast.success('Book Deleted Successfully!', {
            position: toast.POSITION.TOP_RIGHT,
          });
          history.push('/');
        }
      }
    } catch (error) {
      toast.error('Internal Server Error!', { position: toast.POSITION.TOP_RIGHT });
      console.log(`Error ${JSON.stringify(error)}`);
    }
  };

  return (
    <BookDetailsContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BookDetailImage src={book?.image_url} />
          <BookDetailTitle>{book?.title}</BookDetailTitle>
          <BookDetailSummary>{book?.description}</BookDetailSummary>
          <BookDetailFooter>
            <BookDetailLink
              to={{
                pathname: `/edit-book/${book?.id}`,
                state: book,
              }}
            >
              Edit Book
            </BookDetailLink>
            <BookDetailButton onClick={handleDelete}>Delete Book</BookDetailButton>
            <BookDetailLink to={`/`}>Go Back</BookDetailLink>
          </BookDetailFooter>
        </>
      )}
    </BookDetailsContainer>
  );
};

export default BookDetails;
