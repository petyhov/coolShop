import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Card, ModalWindow } from "../components/home";
import { addPhone, setActivePhone } from "../redux/actions";

const ContainerStyled = styled.div.attrs(() => ({ className: "container-fluid" }))`
  padding: 40px;
`;

const Home = () => {
  const dispatch = useDispatch();

  const [isShowModal, setShowModal] = useState(false);

  const phones = useSelector((state) => state.phones);

  const handleAddPhone = (obj) => {
    dispatch(addPhone(obj));
  };

  const toggleOpenModal = (phone) => {
    dispatch(setActivePhone({ ...phone }));
    setShowModal(true);
  };

  const toggleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ContainerStyled>
      {phones.length > 0 && (
        <div className="row">
          {phones.map((phone) => (
            <div key={phone._id} className="col-12	col-sm-4	col-md-4	col-lg-3 col-xl-2">
              <Card onBuyPhone={handleAddPhone} data={phone} showDetails={toggleOpenModal} />
            </div>
          ))}
        </div>
      )}
      {isShowModal && <ModalWindow isOpen={true} toHideModal={toggleCloseModal} onBuyPhone={handleAddPhone} />}
    </ContainerStyled>
  );
};

export default Home;
