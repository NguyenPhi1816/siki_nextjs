import {
  IProductAttributeValue,
  IProductFull,
  IProductVariant,
} from "@/types/product";
import { Box, Divider, Rating, Skeleton, Typography } from "@mui/material";
import React from "react";
import { currencyFormat } from "../../lib/number";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsMobile } from "../../../lib/feartures/ui/uiSlice";
import ProductDetailOption from "./ProductDetailOption";
import { AddShoppingCart } from "@mui/icons-material";

interface IProductDetailPrice {
  showSkeleton: boolean;
  product: IProductFull | undefined;
  selectedProductVariant: IProductVariant | null;
  onChangeOption: (option: IProductAttributeValue) => void;
}

const ProductDetailPrice: React.FC<IProductDetailPrice> = ({
  showSkeleton,
  product,
  selectedProductVariant,
  onChangeOption,
}) => {
  const isMobile = useAppSelector(selectIsMobile);

  return !showSkeleton ? (
    <Box sx={{ padding: isMobile ? "1rem" : "2rem", flex: 1 }}>
      <Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: isMobile ? "1rem" : "1.25rem",
            minHeight: isMobile ? "2rem" : "2.5rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            marginBottom: ".5rem",
          }}
        >
          {product?.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "var(--text-grey)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: "1rem", marginRight: "0.25rem" }}
            >
              {product?.averageRating}
            </Typography>
            <Rating
              name="read-only"
              size="small"
              value={product?.averageRating}
              readOnly
            />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ margin: "0 1rem" }} />
          <Typography variant="body2" component="p">
            {product?.numberOfReviews} Đánh giá
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ margin: "0 1rem" }} />
          <Typography variant="body2" component="p">
            {product?.numberOfPurchases} Lượt bán
          </Typography>
        </Box>
        <Box sx={{ padding: "15px 0", color: "var(--text-primary-pink)" }}>
          <Typography
            variant="body2"
            sx={{ fontSize: isMobile ? "1.5rem" : "1.875rem", fontWeight: 700 }}
          >
            {currencyFormat(selectedProductVariant?.price!)}
          </Typography>
        </Box>
        {!isMobile && (
          <ProductDetailOption
            productName={product?.name as string}
            productAttributes={product?.productAttributes}
            selectedProductVariant={selectedProductVariant}
            onChangeOption={onChangeOption}
          />
        )}
      </Box>
    </Box>
  ) : (
    <Box sx={{ padding: "2rem", flex: 1 }}>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "var(--text-grey)",
        }}
      >
        <Skeleton width={"7rem"} />
        <Divider orientation="vertical" flexItem sx={{ margin: "0 1rem" }} />
        <Skeleton width={"7rem"} />
        <Divider orientation="vertical" flexItem sx={{ margin: "0 1rem" }} />
        <Skeleton width={"7rem"} />
      </Box>
    </Box>
  );
};

export default ProductDetailPrice;
