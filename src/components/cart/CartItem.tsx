// components/CartItem.tsx
import React from "react";
import {
  Box,
  Checkbox,
  Typography,
  IconButton,
  TextField,
  Grid,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { Add, Remove } from "@mui/icons-material";

interface CartItemProps {
  imageSrc: string;
  description: string;
  price: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({
  imageSrc,
  description,
  price,
  quantity,
}) => {
  return (
    <Grid container padding="1rem 0" alignItems={"center"} columns={24}>
      <Grid item xs={1}>
        <Checkbox size="small" />
      </Grid>
      <Grid item xs={10}>
        <Box display={"flex"} alignItems={"center"}>
          <Image
            width={80}
            height={80}
            src={imageSrc}
            alt={description}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginRight: "16px",
            }}
          />
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
            {description}
          </Typography>
          <Box width={"100px"} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" fontSize={"0.875rem"} fontWeight={700}>
          {price}
        </Typography>
      </Grid>
      <Grid item xs={4}>
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
          <IconButton size="small">
            <Remove fontSize="small" />
          </IconButton>
          <Divider flexItem orientation="vertical" />
          <TextField
            value={quantity}
            variant="standard"
            size="small"
            inputProps={{
              style: { padding: "5px", textAlign: "center" },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <Divider flexItem orientation="vertical" />
          <IconButton size="small">
            <Add fontSize="small" />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          fontSize={"0.875rem"}
          fontWeight={700}
          color={"var(--text-primary-pink)"}
        >
          {price}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton size="small">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;
