import { IImageModalData } from "@/components/modal/ImageModal";
import { IMessageModalData } from "@/components/modal/MessageModal";
import { Close } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export enum ModalType {
  message,
  image,
  review,
}

export enum CloseAction {
  doNothing,
  refetchData,
}

interface IModalSliceState {
  showModal: boolean;
  modalType: ModalType | null;
  modalProps: IImageModalData | IMessageModalData | null;
  closeAction: CloseAction;
}

const initialState: IModalSliceState = {
  showModal: false,
  modalType: null,
  modalProps: null,
  closeAction: CloseAction.doNothing,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.showModal = true;
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps;
    },
    closeModal: (state, action) => {
      state.showModal = false;
      state.modalType = null;
      state.modalProps = null;
      state.closeAction = action.payload.closeAction;
    },
    resetCloseAction: (state) => {
      state.closeAction = CloseAction.doNothing;
    },
  },
  selectors: {
    selectShowModal: (modal) => modal.showModal,
    selectModalType: (modal) => modal.modalType,
    selectModalProps: (modal) => modal.modalProps,
    selectCloseAction: (modal) => modal.closeAction,
  },
});

export const { openModal, closeModal, resetCloseAction } = modalSlice.actions;

export const {
  selectShowModal,
  selectModalProps,
  selectModalType,
  selectCloseAction,
} = modalSlice.selectors;

export default modalSlice.reducer;
