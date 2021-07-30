import { useHistory, useLocation } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import { IBook, IBookForm } from '../../../interfaces/Book';
import {
  EditBookContainer,
  EditBookHeading,
  EditBookForm,
  EditBookFormGroup,
  EditBookInput,
  EditBookLabel,
  EditBookButton,
  EditBookTextArea,
  EditFormInputError,
} from './EditBook.style';

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

const EditBook = () => {
  const history = useHistory();
  const { state: book } = useLocation<IBook>();

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
      const results = await axios.patch(`${process.env.REACT_APP_API_URL}/books`, {
        id: book.id,
        title,
        image_url,
        description,
      });
      const { success } = results.data;

      if (success === true) {
        toast.success('Book Update Successfully!', {
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
    <EditBookContainer>
      <EditBookHeading>Edit New Book</EditBookHeading>
      <EditBookForm onSubmit={handleSubmit(onSubmit)}>
        <EditBookFormGroup>
          <EditBookLabel>Title</EditBookLabel>
          <EditBookInput type='text' {...register('title')} defaultValue={book.title} />
          <EditFormInputError>{errors.title?.message}</EditFormInputError>
        </EditBookFormGroup>
        <EditBookFormGroup>
          <EditBookLabel>Image Url</EditBookLabel>
          <EditBookInput type='text' {...register('image_url')} defaultValue={book.image_url} />
          <EditFormInputError>{errors.image_url?.message}</EditFormInputError>
        </EditBookFormGroup>
        <EditBookFormGroup>
          <EditBookLabel>Description</EditBookLabel>
          <EditBookTextArea
            {...register('description')}
            defaultValue={book.description}
          ></EditBookTextArea>
          <EditFormInputError>{errors.description?.message}</EditFormInputError>
        </EditBookFormGroup>

        <EditBookButton type='submit'>Submit</EditBookButton>
      </EditBookForm>
    </EditBookContainer>
  );
};

export default EditBook;
