import ProductItem from "@/components/product/ProductItem";
import { IProduct } from "@/types/product";
import { Box, Grid, SxProps } from "@mui/material";
import React from "react";

interface IProductList {
  data: IProduct[];
  sx?: SxProps;
}

const ProductList: React.FC<IProductList> = ({ data, sx }) => {
  return (
    data && (
      <Box
        padding={2}
        sx={{ ...sx, bgcolor: "var(--bg-white)", borderRadius: 1 }}
      >
        <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 12 }}>
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
