import { Button, Grid, Typography } from "@mui/material";
import React from "react";

interface IProductMoreActionItem {
  icon: React.ReactNode;
  title: string;
}

const ProductMoreActionItem: React.FC<IProductMoreActionItem> = ({
  icon,
  title,
}) => {
  return (
    <Grid item xs={12} sx={{ paddingTop: "0!important" }}>
      <Button
        sx={{
          padding: "0.75rem 0",
          width: "100%",
          color: "var(--text-grey)",
          textTransform: "unset",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {icon}
        <Typography
          variant="body1"
          sx={{ marginLeft: "1rem", color: "var(--text-black)" }}
        >
          {title}
        </Typography>
      </Button>
    </Grid>
  );
};

export default ProductMoreActionItem;
