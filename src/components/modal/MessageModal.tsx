import { IModal } from "@/types/modal";
import { Error } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../lib/hooks";
import {
  CloseAction,
  closeModal,
} from "../../../lib/feartures/modal/modalSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--bg-white)",
  boxShadow: 1,
  borderRadius: 1,
  textAlign: "center",
  overflow: "hidden",
};

export enum MessageType {
  ERROR,
  INFORMATION,
  SUCCESS,
}

export interface IMessageModalData {
  type: MessageType;
  title: string;
  message: string;
}

const MessageModal: React.FC<IModal<IMessageModalData>> = React.forwardRef(
  ({ data }, ref) => {
    const dispatch = useAppDispatch();

    const handleClose = () => {
      dispatch(closeModal({ closeAction: CloseAction.refetchData }));
    };

    return (
      <Box sx={style}>
        <Box
          sx={{
            p: "2rem 0",
            width: "100%",
            bgcolor:
              data?.type === MessageType.ERROR
                ? "var(--bg-error)"
                : data?.type === MessageType.SUCCESS
                ? "var(--bg-success)"
                : "var(--bg-grey)",
            color: "var(--text-white)",
            fontSize: "5rem",
          }}
        >
          <Error fontSize="inherit" />
        </Box>
        <Box
          sx={{
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ m: "1rem 0" }}>
            {data?.message}
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              bgcolor:
                data?.type === MessageType.ERROR
                  ? "var(--bg-error)"
                  : data?.type === MessageType.SUCCESS
                  ? "var(--bg-success)"
                  : "var(--bg-grey)",
              color: "var(--text-white)",
              boxShadow: 0,
            }}
          >
            {data?.type === MessageType.ERROR ? "Thử lại" : "Đóng"}
          </Button>
        </Box>
      </Box>
    );
  }
);

MessageModal.displayName = "MessageModal";

export default MessageModal;
