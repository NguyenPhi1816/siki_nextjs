import { currencyFormat } from "@/lib/number";
import { LocalShipping } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ShippingItem from "./ShippingItem";
import { useAppSelector } from "../../../lib/hooks";
import { selectItems } from "../../../lib/feartures/checkout/CheckoutSlice";

const ShippingPackage = () => {
  const items = useAppSelector(selectItems);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        marginBottom: "2rem",
        padding: "1rem",
        borderRadius: 3,
        border: "1px solid var(--outline-light-grey)",
      }}
    >
      <Box
        sx={{
          maxWidth: "calc(500px - 1rem)",
        }}
      >
        <Box
          sx={{
            padding: "0 0.5rem",
            position: "absolute",
            top: "0",
            left: "1rem",
            transform: "translate(0, -50%)",
            display: "flex",
            bgcolor: "var(--bg-white)",
            color: "var(--text-success)",
          }}
        >
          <LocalShipping fontSize="small" />
          <Typography sx={{ marginLeft: "0.25rem", fontSize: "0.875rem" }}>
            Gói: Giao đúng chiều mai
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "1rem 0",
            display: "flex",
            justifyContent: "space-between",
            color: "var(--text-grey)",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.75rem",
            }}
          >
            GIAO TIẾT KIỆM
          </Typography>
          <Typography
            sx={{
              fontSize: "0.875rem",
            }}
          >
            {currencyFormat(1000)}
          </Typography>
        </Box>
        <Box>
          {items &&
            items.map((item) => (
              <ShippingItem key={item.productId} data={item} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingPackage;
