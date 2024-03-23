import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

const ProductItem = () => {
  const url = process.env.NEXT_PUBLIC_SIGN_IN_BACKGROUND_IMAGE_URL;

  return (
    <Card
      sx={{
        margin: "0.125rem 0",
        boxShadow: "0",
        border: "1px solid var(--main-grey)",
      }}
    >
      <CardMedia sx={{ paddingTop: "80%" }} image={url} title={"Hello world"} />
      <CardContent>
        <Typography variant="h3" fontSize="0.75rem">
          iPhone 15 Pro Max
        </Typography>
        <Typography variant="body2" component="p">
          <Rating
            name="read-only"
            value={5}
            readOnly
            sx={{ fontSize: "0.75rem" }}
          />
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1rem", fontWeight: "700" }}>
          30.990.000
          <sup>đ</sup>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
