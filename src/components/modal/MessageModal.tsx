import { Error } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--white)",
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

interface IMessageModal {
  type: MessageType;
  title: string;
  message: string;
  open: boolean;
  onClose: () => void;
}

const MessageModal: React.FC<IMessageModal> = ({
  type,
  title,
  message,
  open,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            p: "2rem 0",
            width: "100%",
            bgcolor:
              type === MessageType.ERROR
                ? "var(--error)"
                : type === MessageType.SUCCESS
                ? "var(--success)"
                : "var(--grey)",
            color: "var(--white)",
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
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ m: "1rem 0" }}>
            {message}
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              bgcolor:
                type === MessageType.ERROR
                  ? "var(--error)"
                  : type === MessageType.SUCCESS
                  ? "var(--success)"
                  : "var(--grey)",
              color: "var(--white)",
              boxShadow: 0,
            }}
          >
            {type === MessageType.ERROR ? "Thử lại" : "Đóng"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MessageModal;
