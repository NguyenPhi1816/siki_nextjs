import { IModal } from "@/types/modal";
import { Error } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../lib/hooks";
import {
  CloseAction,
  closeModal,
} from "../../../lib/feartures/modal/modalSlice";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "1rem",
  width: "100%",
  maxWidth: "300px",
  bgcolor: "var(--bg-white)",
  boxShadow: 1,
  borderRadius: 1,
  textAlign: "center",
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

    const getTypeColor: () => string = () => {
      switch (data.type) {
        case MessageType.ERROR:
          return "error";
        case MessageType.SUCCESS:
          return "success";
        case MessageType.INFORMATION:
          return "information";
        default:
          return "";
      }
    };

    return (
      <Box sx={style}>
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            fontSize: "5rem",
            bgcolor: "var(--bg-white)",
            color: `var(--text-${getTypeColor()})`,
            borderRadius: "10rem",
          }}
        >
          <Error fontSize="inherit" />
        </Box>
        <Box
          sx={{
            paddingTop: "3rem",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data?.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ m: "2rem 0", padding: "0 1rem", fontSize: "0.875rem" }}
          >
            {data?.message}
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              padding: "0.5rem 0!important",
              width: "100%",
              bgcolor: `var(--bg-${getTypeColor()})`,
              color: "var(--text-white)",
              boxShadow: 0,
              textTransform: "none",
              ":hover": {
                bgcolor: `var(--bg-${getTypeColor()})`,
                opacity: 0.9,
              },
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
