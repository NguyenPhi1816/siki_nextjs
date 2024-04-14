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
import React, { ChangeEvent, SyntheticEvent, useState } from "react";

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
  const [quantity, setQuantity] = useState<string>("1");

  const increaseQuantity = () => {
    if (selectedProductVariant) {
      setQuantity((prev) => {
        let newValue = Number.parseInt(prev) + 1;
        if (newValue > selectedProductVariant.quantity) {
          newValue = selectedProductVariant.quantity;
        }
        return newValue.toString();
      });
    }
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      let newValue = Number.parseInt(prev) - 1;
      if (newValue <= 0) {
        newValue = 1;
      }
      return newValue.toString();
    });
  };

  const isNumeric = (str: string) => /^[+-]?\d+(\.\d+)?$/.test(str);

  const handleQuantityChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (selectedProductVariant) {
      let value = e.target.value;
      if (value.trim().length === 0) {
        setQuantity("");
      } else if (!isNumeric(value)) {
        return;
      } else {
        let newValue = Number.parseInt(value);
        if (newValue > selectedProductVariant.quantity) {
          newValue = selectedProductVariant.quantity;
        } else if (newValue <= 0) {
          newValue = 1;
        }
        setQuantity(newValue.toString());
      }
    }
  };

  const handleQuantifyUnfocused = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const value = e.target.value;
    if (value.trim().length === 0) {
      setQuantity("1");
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
                  borderRadius: 1,
                }}
                onClick={decreaseQuantity}
              >
                <Remove />
              </IconButton>
              <TextField
                sx={{
                  margin: "0 0.25rem",
                  "& input": {
                    p: 0,
                    width: "3.125rem",
                    height: "2rem",
                    textAlign: "center",
                    borderRadius: 1,
                  },
                  "& fieldset": {
                    borderRadius: 1,
                  },
                }}
                value={quantity}
                onChange={(e) => handleQuantityChange(e)}
                onBlur={(e) => handleQuantifyUnfocused(e)}
              />
              <IconButton
                sx={{
                  width: "2rem",
                  height: "2rem",
                  border: "1px solid var(--grey)",
                  borderRadius: 1,
                }}
                onClick={increaseQuantity}
              >
                <Add />
              </IconButton>
            </Box>
            <Typography variant="body2" component="p">
              {selectedProductVariant?.quantity} sản phẩm có sẵn
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
