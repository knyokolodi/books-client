import { useHistory } from 'react-router';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IBookForm } from '../../../interfaces/Book';

import {
  AddBookContainer,
  AddBookHeading,
  AddBookForm,
  AddBookFormGroup,
  AddBookInput,
  AddBookLabel,
  AddBookButton,
  AddBookTextArea,
  AddFormInputError,
} from './AddBook.style';

toast.configure();

const schema = yup.object().shape({
  title: yup.string().required('Please enter book title.'),
  description: yup.string().required('Please enter book description'),
  image_url: yup.lazy((value) =>
    /^data/.test(value)
      ? yup
          .string()
          .trim()
          .matches(
            /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
            'Must be a valid data URI'
          )
          .required()
      : yup.string().trim().url('Must be a valid URL').required('Please enter image URL')
  ),
});

const AddBook = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBookForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IBookForm> = async (data: IBookForm) => {
    const { title, image_url, description } = data;
    try {
      const results = await axios.post(`${process.env.REACT_APP_API_URL}/api/books`, {
        title,
        image_url,
        description,
      });
      const { success } = results.data;

      if (success === true) {
        toast.success('Book Added Successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        history.push('/');
      }
    } catch (error) {
      console.log(`Error ${JSON.stringify(error)}`);
      toast.error('Internal Server Error!', { position: toast.POSITION.TOP_RIGHT });
    }
  };
  return (
    <AddBookContainer>
      <AddBookHeading>Add New Book</AddBookHeading>
      <AddBookForm onSubmit={handleSubmit(onSubmit)}>
        <AddBookFormGroup>
          <AddBookLabel>Title</AddBookLabel>
          <AddBookInput type='text' {...register('title')} />
          <AddFormInputError>{errors.title?.message}</AddFormInputError>
        </AddBookFormGroup>
        <AddBookFormGroup>
          <AddBookLabel>Image Url</AddBookLabel>
          <AddBookInput type='text' {...register('image_url')} />
          <AddFormInputError>{errors.image_url?.message}</AddFormInputError>
        </AddBookFormGroup>
        <AddBookFormGroup>
          <AddBookLabel>Description</AddBookLabel>
          <AddBookTextArea {...register('description')}></AddBookTextArea>
          <AddFormInputError>{errors.description?.message}</AddFormInputError>
        </AddBookFormGroup>

        <AddBookButton type='submit'>Submit</AddBookButton>
      </AddBookForm>
    </AddBookContainer>
  );
};

export default AddBook;
