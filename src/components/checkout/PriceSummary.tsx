import { currencyFormat } from "@/lib/number";
import { Box, Divider, SxProps, Typography } from "@mui/material";
import PageSection from "../wrapper/PageSection";
import React from "react";

interface IPriceSummary {}

const PriceSummary: React.FC<IPriceSummary> = ({}) => {
  return (
    <PageSection sx={{ padding: "1rem" }}>
      <Box
        sx={{
          marginBottom: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "var(--text-grey)", fontSize: "0.875rem" }}>
          Tạm tính
        </Typography>
        <Typography
          sx={{
            color: "var(--text-black)",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          {currencyFormat(1000)}
        </Typography>
      </Box>
      <Box
        sx={{
          marginBottom: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "var(--text-grey)", fontSize: "0.875rem" }}>
          Phí vận chuyển
        </Typography>
        <Typography
          sx={{
            color: "var(--text-black)",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          {currencyFormat(1000)}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          marginTop: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "var(--text-grey)", fontSize: "0.875rem" }}>
          Tổng tiền
        </Typography>
        <Typography
          sx={{
            color: "var(--text-black)",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          {currencyFormat(1000)}
        </Typography>
      </Box>
    </PageSection>
  );
};

export default PriceSummary;
