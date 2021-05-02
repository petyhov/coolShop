import styled from "styled-components";

export const CloseModalButton = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  outline: none;
  border: none;
  border-radius: 8px;
  color: black;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  img {
    margin-right: 5px;
  }
`;

export const ModalWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    padding: 0 20px;
  }
`;

export const ModalImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  @media (min-width: 768px) {
    display: inline;
  }
`;

export const ModalDescription = styled.span`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ListStyled = styled.ul`
  margin-bottom: 5px;
  list-style: none;
  @media (min-width: 768px) {
    display: inline-block;
    margin-bottom: 25px;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
  li:nth-child(-n + 2) {
    justify-content: center;
  }

  li:nth-child(n + 3) {
    border-bottom: 1px solid black;
  }
  li:nth-child(2) {
    margin-bottom: 5px;
  }
`;

export const ModalBuyButton = styled.button`
  display: block;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: green;
  cursor: pointer;
`;
