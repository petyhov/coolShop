import styled from "styled-components";

import { Link } from "../header/Link";
import routes from "../../routes";

const DefaultButton = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const BuyButton = styled(DefaultButton)`
  font-size: 24px;
  padding: 0 10px;
  color: #ffffff;
  background-color: green;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const CartButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 0 10px;
  border-radius: 8px;
  background-color: white;
  &:active {
    transform: scale(0.9);
  }
  img {
    margin-left: 5px;
    width: 25px;
  }
`;

export const FormButton = styled(BuyButton)`
  padding: 5px 40px;
`;

export const CartControlBtn = styled(DefaultButton)`
  padding: 5px 10px;
  img {
    width: 30px;
    height: 30px;
  }

  border: 2px solid #0d2029;
`;

export const GoBackButton = styled.button.attrs((props) => ({ children: <Link to={routes.home}>{props.children}</Link> }))`
  display: flex;
  height: 50px;
  margin-bottom: 10px;
  align-items: center;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  a {
    color: black;
    &:hover{
      color: black;
    }:
  }
  img {
    width: 50px;
    margin-right: 5px;
  }
`;
