import { IModal } from "@/types/types";
import { Box, Modal } from "@mui/material";
import React from "react";

export interface IImageModalData {
  images: string[];
}

const ImageModal: React.FC<IModal<IImageModalData>> = React.forwardRef(
  ({ data }, ref) => {
    return (
      <Modal open={true}>
        <Box></Box>
      </Modal>
    );
  }
);

export default ImageModal;
