import ProductItem from "@/components/product/ProductItem";
import { Grid } from "@mui/material";

const ProductList = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
      <Grid item xs={2}>
        <ProductItem />
      </Grid>
    </Grid>
  );
};

export default ProductList;
