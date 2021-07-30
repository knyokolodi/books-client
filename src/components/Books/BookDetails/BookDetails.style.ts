import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BookDetailsContainer = styled.div`
  max-width: 920px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
`;

export const BookDetailImage = styled.img`
  align-self: center;
`;

export const BookDetailTitle = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const BookDetailSummary = styled.p`
  color: #ccc;
  margin-bottom: 20px;
`;

export const BookDetailFooter = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const BookDetailLink = styled(Link)`
  width: 140px;
  padding: 10px 30px;
  background-color: #e31837;
  color: #fff;
  border: solid 1px #e31837;
  text-decoration: none;
  text-align: center;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #1f1f1f;
    border: solid 1px #1f1f1f;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const BookDetailButton = styled.button`
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
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
