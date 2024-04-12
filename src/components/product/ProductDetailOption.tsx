"use client";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ProductOptionPanel from "./ProductOptionPanel";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import {
  IProductAttribute,
  IProductAttributeValue,
  IProductVariant,
} from "@/types/types";
import React, { useState } from "react";

interface IProductDetailOption {
  productAttributes: IProductAttribute[] | undefined;
  selectedProductVariant: IProductVariant | null;
  onChangeOption: (option: IProductAttributeValue) => void;
}

const ProductDetailOption: React.FC<IProductDetailOption> = ({
  productAttributes,
  selectedProductVariant,
  onChangeOption,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    if (selectedProductVariant) {
      setQuantity((prev) => {
        let newValue = prev + 1;
        if (newValue > selectedProductVariant.quantity) {
          newValue = selectedProductVariant.quantity;
        }
        return newValue;
      });
    }
  };

  return (
    <>
      {productAttributes?.map((item) => (
        <ProductOptionPanel
          key={item.id}
          name={item.name}
          productOptions={item.productAttributeValues}
          defaultValue={
            selectedProductVariant?.productAttributeValues.find(
              (value) => value.attributeId === item.id
            )!
          }
          sx={{ marginBottom: "0.5rem" }}
          onOptionChange={onChangeOption}
        />
      ))}
      <Grid container sx={{ margin: "1rem 0", color: "var(--text-grey)" }}>
        <Grid item xs={3} sm={2}>
          <Typography variant="body2" component="p">
            Số lượng
          </Typography>
        </Grid>
        <Grid item xs={9} sm={10}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                marginRight: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  width: "2rem",
                  height: "2rem",
                  border: "1px solid var(--grey)",
                  borderRadius: 0,
                }}
              >
                <Remove />
              </IconButton>
              <TextField
                sx={{
                  "& input": {
                    p: 0,
                    width: "3.125rem",
                    height: "2rem",
                    textAlign: "center",
                    borderRadius: 0,
                  },
                  "& fieldset": {
                    borderRadius: 0,
                  },
                }}
                value={quantity}
              />
              <IconButton
                sx={{
                  width: "2rem",
                  height: "2rem",
                  border: "1px solid var(--grey)",
                  borderRadius: 0,
                }}
              >
                <Add />
              </IconButton>
            </Box>
            <Typography variant="body2" component="p">
              6520 sản phẩm có sẵn
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "2rem", maxWidth: "600px", display: "flex" }}>
        <Button
          variant="outlined"
          sx={{
            marginRight: "0.5rem",
            height: "3rem",
            width: "50%",
            padding: "0.75rem 1.5rem",
          }}
          onClick={() => {}}
        >
          <AddShoppingCart />
          <Typography
            variant="body2"
            component="p"
            sx={{ textTransform: "none" }}
          >
            Thêm vào giỏ hàng
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ height: "3rem", width: "50%", padding: "0.75rem 1.5rem" }}
          onClick={() => {}}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{
              textTransform: "none",
              color: "var(--white)",
              boxShadow: 0,
            }}
          >
            Mua ngay
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default ProductDetailOption;
