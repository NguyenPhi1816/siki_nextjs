import ProductItem from "@/components/product/ProductItem";
import { Box, Grid, SxProps } from "@mui/material";
import React from "react";
import { IProduct } from "./products";

interface IProductList {
  data: IProduct[];
  sx?: SxProps;
}

const ProductList: React.FC<IProductList> = ({ data, sx }) => {
  return (
    data && (
      <Box padding={2} sx={{ ...sx, bgcolor: "var(--white)", borderRadius: 1 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((item) => (
            <Grid item xs={2} key={item.id}>
              <ProductItem data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
};

export default ProductList;
