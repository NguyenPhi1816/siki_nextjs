import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { currencyFormat } from "../numberFormat/currency";
import { IProduct } from "@/types/types";

interface IProductItem {
  data: IProduct;
}

const ProductItem: React.FC<IProductItem> = ({ data }) => {
  console.log(data);

  return (
    data && (
      <Link href={`/product/${data.slug}?spid=${data.id}`} underline="none">
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
            <Typography
              variant="h3"
              fontSize="0.75rem"
              sx={{
                minHeight: "1.75rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
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

            <Typography
              variant="h2"
              sx={{ fontSize: "1rem", fontWeight: "700" }}
            >
              {currencyFormat(data.price)}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  );
};

export default ProductItem;
