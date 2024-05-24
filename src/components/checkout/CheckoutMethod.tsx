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
import Image from "next/image";

const CHECKOUT_METHODS = [
  {
    id: "cash",
    label: "Thanh toán bằng tiền mặt",
    image:
      "https://salt.tikicdn.com/ts/upload/92/b2/78/1b3b9cda5208b323eb9ec56b84c7eb87.png",
  },
  {
    id: "vnpay",
    label: "Ví VNPay",
    image:
      "https://salt.tikicdn.com/ts/upload/77/6a/df/a35cb9c62b9215dbc6d334a77cda4327.png",
  },
];

const CheckoutMethod = () => {
  const [selectedItem, setSelectedItem] = useState(CHECKOUT_METHODS[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem((event.target as HTMLInputElement).value);
  };

  return (
    <PageSection sx={{ padding: "1rem" }}>
      <Typography sx={{ marginBottom: "1rem", fontWeight: 700 }}>
        Phương thức thanh toán
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          value={selectedItem}
          onChange={handleChange}
          name="radio-buttons-group"
        >
          {CHECKOUT_METHODS.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      marginRight: "0.5rem",
                      height: "2rem",
                      width: "2rem",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.id}
                      width={50}
                      height={50}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography fontSize={"0.875rem"}>{item.label}</Typography>
                </Box>
              }
              sx={{
                margin: 0,
                marginBottom: "1rem",
                padding: "1rem",
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
          ))}
        </RadioGroup>
      </FormControl>
    </PageSection>
  );
};

export default CheckoutMethod;
