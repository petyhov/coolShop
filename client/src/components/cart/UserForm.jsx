import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { TextInput, FormButton } from "../ui";
import { addOrder } from "../../redux/operations";

const FormContainer = styled.form.attrs(() => ({ className: "col-12 col-sm-4" }))`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

export const UserForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const getOrder = (e) => {
    e.preventDefault();
    dispatch(addOrder({ name, surname, phone, cart }));
  };
  return (
    <FormContainer>
      <TextInput placeholder={"your name"} onChange={(e) => setName(e.target.value)} />
      <TextInput placeholder={"your surname"} onChange={(e) => setSurname(e.target.value)} />
      <TextInput placeholder={"your phone"} onChange={(e) => setPhone(e.target.value)} />
      <FormButton onClick={getOrder}>get order</FormButton>
    </FormContainer>
  );
};
