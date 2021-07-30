//AddBookContainer, AddBookHeading, AddBookForm, AddBookInput;

import styled from 'styled-components';

export const EditBookContainer = styled.div`
  width: 100%;
  max-width: 920px;
  height: auto;
  color: #fff;
  margin: 30px auto;
  padding: 20px;
`;

export const EditBookHeading = styled.h1`
  font-weight: 500;
`;

export const EditBookForm = styled.form``;

export const EditBookLabel = styled.label`
  display: block;
  width: 100%;
`;

export const EditBookFormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const EditBookInput = styled.input`
  width: 100%;
  background-color: #292929;
  border: solid 1px #292929;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 5px;
`;

export const EditBookTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #292929;
  border: solid 1px #292929;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 5px;
`;

export const EditBookButton = styled.button`
  width: 140px;
  padding: 10px 30px;
  background-color: #e31837;
  color: #fff;
  border: solid 1px #e31837;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #1f1f1f;
    border: solid 1px #1f1f1f;
    color: #fff;
    cursor: pointer;
  }
`;

export const EditFormInputError = styled.span`
  color: #e31837;
`;
