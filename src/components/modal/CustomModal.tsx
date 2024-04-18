"use client";
import { Box, Modal } from "@mui/material";
import { useAppSelector } from "../../../lib/hooks";
import {
  ModalType,
  selectModalProps,
  selectModalType,
  selectShowModal,
} from "../../../lib/feartures/modal/modalSlice";
import ImageModal, { IImageModalData } from "./ImageModal";
import MessageModal, { IMessageModalData } from "./MessageModal";
import React from "react";

const CustomModal = () => {
  const showModal = useAppSelector(selectShowModal);
  const modalType = useAppSelector(selectModalType);
  const modalProps = useAppSelector(selectModalProps);

  function isMessageModalData(props: any): props is IMessageModalData {
    return props && props.hasOwnProperty("type");
  }

  function isImageModalData(props: any): props is IImageModalData {
    return props && props.hasOwnProperty("images");
  }

  const child = (() => {
    if (modalType === ModalType.image && isImageModalData(modalProps)) {
      return <ImageModal data={modalProps} />;
    }
    if (modalType === ModalType.message && isMessageModalData(modalProps)) {
      return <MessageModal data={modalProps} />;
    }
    return <></>;
  })();

  return (
    <Modal
      open={showModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ zIndex: "var(--modal-z-index)" }}
    >
      {child}
    </Modal>
  );
};

export default CustomModal;
