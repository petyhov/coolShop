import styled from "styled-components";

import { NameStyle, PriceStyle, BuyButton } from "../ui";
import api from "../../api";

const CardStyled = styled.div`
  padding: 3px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0px 0px 17px 1px rgba(13, 32, 41, 0.6);
    -moz-box-shadow: 0px 0px 17px 1px rgba(13, 32, 41, 0.6);
    box-shadow: 0px 0px 17px 1px rgba(13, 32, 41, 0.6);
  }
`;

const Wraper = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
`;

export const Card = ({ data, onBuyPhone, showDetails }) => {
  const { _id, img, name, price } = data;

  const onClickBuy = () => {
    onBuyPhone({ _id, img, name, price });
  };

  const onClickCard = (e) => {
    if (e.target.textContent !== "buy") {
      showDetails(data);
    }
  };

  return (
    <CardStyled onClick={onClickCard}>
      <img src={`${api}${img}`} alt={name} />
      <NameStyle>{name}</NameStyle>
      <Wraper>
        <PriceStyle>{price}$</PriceStyle>
        <BuyButton onClick={onClickBuy}>buy</BuyButton>
      </Wraper>
    </CardStyled>
  );
};
