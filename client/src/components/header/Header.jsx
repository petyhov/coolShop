import { useSelector } from "react-redux";

import styled from "styled-components";

import { Logo } from "./Logo";
import { Link } from "./Link";
import { CartButton } from "../ui";
import CartIcon from "../icons/cart.svg";
import routes from "../../routes";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  height: 60px;
  background-color: #0d2029;
`;

export const Header = () => {
  const { sum } = useSelector((state) => state);
  return (
    <HeaderStyled>
      <Link to={routes.home}>
        <Logo />
      </Link>
      <Link to={routes.cart}>
        <CartButton>
          {sum > 0 ? `${sum}$` : "CART"}
          <img src={CartIcon} width="40px" alt="cart" />
        </CartButton>
      </Link>
    </HeaderStyled>
  );
};
