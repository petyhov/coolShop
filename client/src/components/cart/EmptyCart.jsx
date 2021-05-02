import styled from "styled-components";

import CartIcon from "../icons/cart.svg";

const EmtyCardConteiner = styled.section.attrs(() => ({ className: "row justify-content-center" }))`
  padding: 50px;
  border-radius: 25px;
  border: 8px dashed black;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 36px;
  text-align: center;
`;

const ImgStyled = styled.img`
  display: block;
  margin: 0 auto;
`;

export const EmptyCart = () => (
  <EmtyCardConteiner>
    <div>
      <Description>Your cart is empty</Description>
      <ImgStyled src={CartIcon} alt="cart icon" width="200px"></ImgStyled>
    </div>
  </EmtyCardConteiner>
);
