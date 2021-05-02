import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { UserForm, CartList, CartItem, EmptyCart } from "../components/cart";
import { incrementItem, decrementItem } from "../redux/actions";
import { GoBackButton, TotalStyled } from "../components/ui";
import ArrowIcon from "../components/icons/arrow-left.svg";

const CartSection = styled.section.attrs(() => ({ className: "row" }))`
  display: flex;
  justify-content: space-between;
`;

const ContainerStyled = styled.div.attrs(() => ({ className: "container-fluid" }))`
  padding: 10px 40px;
`;

const Cart = () => {
  const dispatch = useDispatch();

  const { cart, sum } = useSelector((state) => state);
  const addedPhones = Object.values(cart);

  const togleClickPlus = (id) => {
    dispatch(incrementItem(id));
  };

  const togleClickMinus = (id) => {
    dispatch(decrementItem(id));
  };

  return (
    <ContainerStyled>
      <GoBackButton>
        <img src={ArrowIcon} alt="arrow" />
        GO BACK
      </GoBackButton>
      {addedPhones.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartSection>
          <CartList>
            {addedPhones.map((item) => (
              <CartItem {...item} key={item._id} incrementItem={togleClickPlus} decrementItem={togleClickMinus} />
            ))}
            <TotalStyled>TOTAL: {sum}$</TotalStyled>
          </CartList>
          <UserForm />
        </CartSection>
      )}
    </ContainerStyled>
  );
};

export default Cart;
