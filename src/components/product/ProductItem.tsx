import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { IProduct } from "./products";

interface IProductItem {
  data: IProduct;
}

const ProductItem: React.FC<IProductItem> = ({ data }) => {
  return (
    data && (
      <Card
        sx={{
          margin: "0.125rem 0",
          boxShadow: "0",
          border: "1px solid var(--main-grey)",
        }}
      >
        <CardMedia
          sx={{ paddingTop: "80%", backgroundSize: "contain" }}
          image={data.imageUrl}
          title={data.name}
        />
        <CardContent>
          <Typography variant="h3" fontSize="0.75rem">
            {data.name}
          </Typography>

          <Typography variant="body2" component="p">
            <Rating
              name="read-only"
              value={data.rating}
              readOnly
              sx={{ fontSize: "0.75rem" }}
            />
          </Typography>

          <Typography variant="h2" sx={{ fontSize: "1rem", fontWeight: "700" }}>
            {data.price}
            <sup>đ</sup>
          </Typography>
        </CardContent>
      </Card>
    )
  );
};

export default ProductItem;
