"use client";
import { Box, Grid, SxProps, Typography } from "@mui/material";
import ProductOption from "./ProductOption";
import React, { useEffect, useState } from "react";
import { IProductAttributeValue } from "@/types/types";

interface IProductOptionPanel {
  name: string;
  productOptions: IProductAttributeValue[];
  defaultValue: IProductAttributeValue;
  sx?: SxProps;
  onOptionChange: (option: IProductAttributeValue) => void;
}

const ProductOptionPanel: React.FC<IProductOptionPanel> = ({
  name,
  productOptions,
  defaultValue,
  sx,
  onOptionChange,
}) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (defaultValue) setSelectedItem(defaultValue.id);
  }, [defaultValue]);

  const handleSelect = (option: IProductAttributeValue) => {
    setSelectedItem(option.id);
    onOptionChange(option);
  };

  return (
    <Grid container sx={{ ...sx, display: "flex", color: "var(--text-grey)" }}>
      <Grid item xs={2}>
        <Typography
          variant="body2"
          component="p"
          sx={{ fontSize: "0.875rem", marginTop: "0.5rem" }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ display: "flex", maxWidth: "515px", flexWrap: "wrap" }}>
          {productOptions?.map((item) => {
            return (
              <ProductOption
                key={item.id}
                data={item}
                selected={item.id === selectedItem}
                onClick={() => handleSelect(item)}
              />
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductOptionPanel;
