import { Link as LinkReact } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(LinkReact)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;
