import { BookCard, BookImage, BookTitle, Button } from './Book.style';

import { IBookProps } from '../../../interfaces/Book';

const Book = ({ book: { id, title, image_url } }: IBookProps) => {
  return (
    <BookCard>
      <BookImage src={image_url} />
      <BookTitle>{title.length > 19 ? `${title.substr(0, 19)}...` : title}</BookTitle>
      <Button to={`/book/${id}`}>Details</Button>{' '}
    </BookCard>
  );
};

export default Book;
