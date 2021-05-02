import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #0d2029;
  }

  * {
    margin :0;
    padding: 0;
  }

  img {
    width: 100%;
  }
`;

export const NameStyle = styled.p`
  text-align: center;
  font-size: 24px;
`;

export const PriceStyle = styled.span`
  font-size: 30px;
`;

export const NameStyled = styled.span`
  font-size: 30px;
`;

export const ItemsNumberStyled = styled.p`
  margin: 0 15px;
  font-size: 40px;
  font-weight: 600;
`;

export const TotalStyled = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
