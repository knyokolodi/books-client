export interface IBookForm {
  title: string;
  image_url: string;
  description: string;
}

export interface IBook {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  created_at?: Date;
}

export interface IBookDetailsParams {
  id: string;
}

export interface IBookProps {
  book: IBook;
}

export interface IBookForm {
  title: string;
  image_url: string;
  description: string;
}
