import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MyLoader = () => {
  return (
    <LoaderContainer>
      <Loader type="Bars" color="#0d2029" height={200} width={200} />
    </LoaderContainer>
  );
};
