import { IModal } from "@/types/modal";
import { Clear, Error } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  CloseAction,
  closeModal,
} from "../../../lib/feartures/modal/modalSlice";
import { useSaveReviewMutation } from "../../../lib/feartures/review/reviewApi";
import { selectTokens } from "../../../lib/feartures/auth/authSlice";

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

export interface IReviewModalData {
  productId: number;
}

const ReviewModal: React.FC<IModal<IReviewModalData>> = React.forwardRef(
  ({ data }, ref) => {
    const dispatch = useAppDispatch();
    const tokens = useAppSelector(selectTokens);
    const [saveReview, { data: reviews, error, isLoading }] =
      useSaveReviewMutation();

    const [value, setValue] = React.useState(5);
    const [content, setContent] = React.useState("");

    const handleClose = () => {
      dispatch(closeModal({ closeAction: CloseAction.refetchData }));
    };

    const handleSubmit = async () => {
      if (tokens.accessToken) {
        await saveReview({
          token: tokens.accessToken,
          productId: data.productId,
          content: content,
          ratingStar: value,
        });
        handleClose();
      }
    };

    return (
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={handleClose}>
            <Clear />
          </IconButton>
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Đánh giá sản phẩm
        </Typography>
        <form style={{ marginTop: "1rem" }}>
          <Typography component="legend">Đánh giá số sao</Typography>
          <Rating
            sx={{ marginBottom: "1rem" }}
            size="large"
            name="rating"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue as number);
            }}
          />
          <TextField
            required
            fullWidth
            id="content"
            label="Đánh giá của bạn"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value as string)}
          />
          <Button
            fullWidth
            color="primary"
            variant="contained"
            sx={{ mt: 2, mb: 2, pt: 2, pb: 2, color: "var(--bg-white)" }}
            onClick={handleSubmit}
          >
            {isLoading && (
              <CircularProgress
                color="inherit"
                size={"1.5rem"}
                sx={{ marginRight: "1rem" }}
              />
            )}
            <Typography component="h5" variant="body1" sx={{ fontWeight: 700 }}>
              Đánh giá
            </Typography>
          </Button>
        </form>
      </Box>
    );
  }
);

ReviewModal.displayName = "ReviewModal";

export default ReviewModal;
