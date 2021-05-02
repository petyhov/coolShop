import { useSelector } from "react-redux";
import Modal from "react-modal";

import { CloseModalButton, ModalWrap, ModalImg, ModalDescription, ListStyled, ModalBuyButton } from "../ui/ModalStyle";
import ArrowIcon from "../icons/arrow-left.svg";
import api from "../../api";

Modal.setAppElement("#root");

export const ModalWindow = ({ isOpen, toHideModal, onBuyPhone }) => {
  const activaPhone = useSelector((state) => state.activePhone);
  const { battery, chipset, description, displayResolution, displaySize, displayType, img, name, os, price, _id } = activaPhone;

  const onClickBuy = () => {
    onBuyPhone({ _id, img, name, price });
    toHideModal();
  };

  const customStyles = {
    content: {
      maxWidth: "600px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "10px 5px",
      width: "100%",
      border: "solid 2px black",
      borderRadius: "10px",
      backgroundColor: "white",
    },
  };

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={toHideModal}>
      <CloseModalButton onClick={toHideModal}>
        <img src={ArrowIcon} alt="arrow" />
        BACK
      </CloseModalButton>
      <ModalWrap>
        <ModalImg src={`${api}${img}`} />
        <ListStyled>
          <li>
            <ModalDescription>{name}</ModalDescription>
          </li>
          <li>
            <ModalDescription>{description}</ModalDescription>
          </li>
          <li>
            <ModalDescription>Display Size</ModalDescription>
            <ModalDescription>{displaySize}</ModalDescription>
          </li>
          <li>
            <ModalDescription>Display Resolution</ModalDescription>
            <ModalDescription>{displayResolution}</ModalDescription>
          </li>
          <li>
            <ModalDescription>Display Type</ModalDescription>
            <ModalDescription>{displayType}</ModalDescription>
          </li>
          <li>
            <ModalDescription>Chipset</ModalDescription>
            <ModalDescription>{chipset}</ModalDescription>
          </li>
          <li>
            <ModalDescription>OS</ModalDescription>
            <ModalDescription>{os}</ModalDescription>
          </li>
          <li>
            <ModalDescription>Battery</ModalDescription>
            <ModalDescription>{battery}</ModalDescription>
          </li>
          <li>
            <ModalDescription>Price</ModalDescription>
            <ModalDescription>{price}</ModalDescription>
          </li>
        </ListStyled>
      </ModalWrap>
      <ModalBuyButton onClick={onClickBuy}>BUY</ModalBuyButton>
    </Modal>
  );
};
