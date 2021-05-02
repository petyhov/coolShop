import styled from "styled-components";

import { CartControlBtn, NameStyled, ItemsNumberStyled } from "../ui";
import PlusIcon from "../icons/plus.png";
import MinusIcon from "../icons/minus.png";
import api from "../../api";

const ItemBody = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  &:not(:first-child) {
    border-top: none;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    padding-right: 30px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100px;
  }
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItem = ({ _id, img, name, items, incrementItem, decrementItem }) => {
  const onClickPlus = () => {
    incrementItem(_id);
  };

  const ocClickMinus = () => {
    decrementItem(_id);
  };

  return (
    <ItemBody>
      <ItemContainer>
        <img src={`${api}${img}`} alt="phone" />
        <NameStyled>{name}</NameStyled>
      </ItemContainer>
      <CountContainer>
        <CartControlBtn onClick={ocClickMinus}>
          <img src={MinusIcon} width={"24px"} height={"24px"} alt="minus icon" />
        </CartControlBtn>
        <ItemsNumberStyled>{items}</ItemsNumberStyled>
        <CartControlBtn onClick={onClickPlus}>
          <img src={PlusIcon} width={"24px"} height={"24px"} alt="plus icon" />
        </CartControlBtn>
      </CountContainer>
    </ItemBody>
  );
};
