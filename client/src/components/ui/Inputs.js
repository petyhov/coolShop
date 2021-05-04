import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 2px solid ${({ error }) => error ? "red" : "#0d2029"};
  border-radius: 10px;
  outline: none;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
