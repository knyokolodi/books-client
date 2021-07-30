import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BookCard = styled.div`
  margin: 15px;
  height: 540px;
  background-color: #292929;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
`;

export const BookTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  margin: 20px 0;
`;

export const Button = styled(Link)`
  width: auto;
  padding: 10px 30px;
  background-color: #e31837;
  color: #fff;
  border: solid 1px #e31837;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #1f1f1f;
    border: solid 1px #1f1f1f;
    color: #fff;
  }
`;
