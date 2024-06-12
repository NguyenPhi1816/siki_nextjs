import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PageSection from "../wrapper/PageSection";
import { useState } from "react";
import ShippingPackage from "./ShippingPackage";
import { useAppSelector } from "../../../lib/hooks";
import { selectItems } from "../../../lib/feartures/checkout/CheckoutSlice";

const DELIVERY_METHODS = [
  { id: "standard", label: "Giao hàng tiêu chuẩn", price: 14000 },
  { id: "economy", label: "Giao hàng tiết kiệm", price: 12000 },
  { id: "superfast", label: "Giao hàng siêu tốc", price: 28000 },
];

const DeliveryMethod = () => {
  const [selectedItem, setSelectedItem] = useState(DELIVERY_METHODS[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem((event.target as HTMLInputElement).value);
  };

  return (
    <PageSection sx={{ padding: "1rem" }}>
      <Typography sx={{ marginBottom: "1rem", fontWeight: 700 }}>
        Chọn hình thức giao hàng
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          value={selectedItem}
          onChange={handleChange}
          name="radio-buttons-group"
        >
          {DELIVERY_METHODS.map((item) => (
            <Box key={item.id}>
              <FormControlLabel
                value={item.id}
                control={<Radio />}
                label={
                  <Box sx={{ display: "flex" }}>
                    <Typography fontSize={"0.875rem"}>{item.label}</Typography>
                    <sup
                      style={{
                        marginLeft: "0.25rem",
                        color: "var(--text-success)",
                        fontSize: "0.75rem",
                      }}
                    >
                      +{item.price / 1000}K
                    </sup>
                  </Box>
                }
                sx={{
                  margin: 0,
                  marginBottom: "1rem",
                  padding: "1rem",
                  width: "100%",
                  maxWidth: "500px",
                  bgcolor:
                    selectedItem === item.id
                      ? "var(--bg-secondary-pink)"
                      : "var(--bg-white)",
                  border: `1px solid ${
                    selectedItem === item.id
                      ? "var(--outline-primary-pink)"
                      : "var(--outline-light-grey)"
                  }`,
                  borderRadius: 2,
                }}
              />
              {selectedItem === item.id && (
                <Box sx={{ marginTop: "1rem" }}>
                  <ShippingPackage />
                </Box>
              )}
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
    </PageSection>
  );
};

export default DeliveryMethod;
