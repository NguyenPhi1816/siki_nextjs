"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Typography,
  IconButton,
  TextField,
  Grid,
  Divider,
  Snackbar,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { Add, Close, Remove } from "@mui/icons-material";
import { currencyFormat } from "../../lib/number";
import { ICart } from "@/types/cart";

interface CartItemProps {
  data: ICart;
  isSelected: boolean;
  onSelect: () => void;
  isMobile: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  data,
  isSelected,
  onSelect,
  isMobile,
}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    if (data) {
      setQuantity(data.quantity);
    }
  }, [data]);

  useEffect(() => {
    if (quantity > 0) {
      setTotalPrice(data.product.price * quantity);
    }
  }, [quantity]);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      let newValue = prev + 1;
      if (newValue > data.product.quantity) {
        handleShowToast(
          `Số lượng tồn kho của sản phẩm này là ${data.product.quantity}`
        );
        return data.product.quantity;
      }
      return newValue;
    });
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      let newValue = prev - 1;
      if (newValue < 1) {
        handleShowToast("Bạn có muốn xóa sản phẩm này?");
        return 1;
      }
      return newValue;
    });
  };

  const handleShowToast = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };
  return (
    <>
      <Grid
        container
        padding={isMobile ? "0.5rem" : "1rem 0"}
        alignItems={"center"}
        columns={24}
      >
        <Grid item xs={2} md={1}>
          <Checkbox size="small" checked={isSelected} onClick={onSelect} />
        </Grid>
        <Grid item xs={20} md={22}>
          <Grid
            container
            columns={!isMobile ? 22 : 12}
            alignItems={isMobile ? "flex-start" : "center"}
          >
            <Grid item xs={4} md={3}>
              <Image
                width={80}
                height={80}
                priority
                src={data.product.image}
                alt={data.product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Grid>
            <Grid item xs={8} md={19}>
              <Grid
                container
                direction={isMobile ? "column" : "row"}
                columns={19}
                alignItems={isMobile ? "flex-start" : "center"}
              >
                <Grid item xs md={7}>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        minHeight: "1.75rem",
                        fontSize: "0.875rem",
                        color: "var(--text-black)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {data.product.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        minHeight: "1.5rem",
                        fontSize: "0.75rem",
                        color: "var(--text-grey)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {data.product.productAttributeValues}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs md={4}>
                  <Typography
                    variant="h6"
                    color={
                      isMobile
                        ? "var(--text-primary-pink)"
                        : "var(--text-black)"
                    }
                    fontSize={isMobile ? "0.9375rem" : "0.875rem"}
                    fontWeight={700}
                  >
                    {currencyFormat(data.product.price)}
                  </Typography>
                </Grid>
                <Grid item xs md={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginRight="16px"
                    sx={{
                      maxWidth: "100px",
                      border: "1px solid var(--outline-grey)",
                      borderRadius: 1,
                    }}
                  >
                    <IconButton size="small" onClick={handleDecreaseQuantity}>
                      <Remove fontSize="small" />
                    </IconButton>
                    <Divider flexItem orientation="vertical" />
                    <TextField
                      value={quantity}
                      variant="standard"
                      size="small"
                      inputProps={{
                        style: {
                          padding: isMobile ? "3.5px" : "5px",
                          textAlign: "center",
                        },
                      }}
                      InputProps={{ disableUnderline: true }}
                    />
                    <Divider flexItem orientation="vertical" />
                    <IconButton size="small" onClick={handleIncreaseQuantity}>
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>
                {!isMobile && (
                  <Grid item md={4}>
                    <Typography
                      variant="h6"
                      fontSize={"0.875rem"}
                      fontWeight={700}
                      color={"var(--text-primary-pink)"}
                    >
                      {currencyFormat(totalPrice)}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} md={1}>
          <IconButton size="small">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </>
  );
};

export default CartItem;
