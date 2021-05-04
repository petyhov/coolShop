import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { TextInput, FormButton } from "../ui";
import { addOrder } from "../../redux/operations";
import { toast } from "react-toastify";

const FormContainer = styled.form.attrs(() => ({ className: "col-12 col-sm-4" }))`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

export const UserForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const [isNameInputError, setNameInputError] = useState(false);
  const [isSurnameInputError, setSurnameInputError] = useState(false);
  const [isNumberInputError, setNumberInputError] = useState(false);

  const [isButtonActive, setButtonActive] = useState(false);

  const cart = useSelector((state) => state.cart);

  const getOrder = (e) => {
    e.preventDefault();
    if (isButtonActive) {
      return dispatch(addOrder({ name, surname, phone, cart }));
    }
    toast.error("check the form", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const checkName = () => {
    if (name.length > 2) {
      setNameInputError(false);
      return true;
    }
    setNameInputError(true);
  };

  const checkSurname = () => {
    if (surname.length > 2) {
      setSurnameInputError(false);
      return true;
    }
    setSurnameInputError(true);
  };

  const checkNumber = () => {
    if (phone.length === 12 && !isNaN(phone)) {
      setNumberInputError(false);
      return true;
    }
    setNumberInputError(true);
  };

  const onNumberFocus = () => {
    if (phone.length < 8) {
      setPhone("380");
    }
    setNumberInputError(true);
  };

  useEffect(() => {
    checkName();
    checkSurname();
    checkNumber();
    if (checkName() && checkSurname() && checkNumber()) {
      return setButtonActive(true);
    }
    setButtonActive(false);
  });

  return (
    <FormContainer>
      <TextInput onFocus={() => setNameInputError(true)} placeholder={"your name"} onChange={(e) => setName(e.target.value)} error={isNameInputError} value={name} />
      <TextInput onFocus={() => setSurnameInputError(true)} placeholder={"your surname"} onChange={(e) => setSurname(e.target.value)} error={isSurnameInputError} value={surname} />
      <TextInput onFocus={onNumberFocus} placeholder={"your phone"} onChange={(e) => setPhone(e.target.value)} error={isNumberInputError} value={phone} />
      <FormButton onClick={getOrder} active={isButtonActive} disable>
        get order
      </FormButton>
    </FormContainer>
  );
};
