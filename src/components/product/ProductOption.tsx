import { IProductAttributeValue } from "@/types/product";
import { Check } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export interface IProductOptionComponent {
  data: IProductAttributeValue;
  selected: boolean;
  onClick: () => void;
}

const ProductOption: React.FC<IProductOptionComponent> = ({
  data,
  selected,
  onClick,
}) => {
  const handleClick = () => onClick();
  return (
    <Button
      onClick={handleClick}
      sx={{
        position: "relative",
        marginTop: "0.5rem",
        marginRight: "0.5rem",
        padding: "0.5rem",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        color: "var(--text-grey)",
        textTransform: "none",
        border: selected
          ? "1px solid var(--pink-primary)"
          : "1px solid var(--grey)",
      }}
    >
      {data && data.image && (
        <Box
          sx={{
            marginRight: "0.25rem",
            width: "1.5rem",
            height: "1.5rem",
          }}
        >
          <Image
            src={data.image}
            alt={data.value}
            width={50}
            height={50}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      )}
      <Typography variant="body2" component="p">
        {data.value}
      </Typography>
      {selected && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 0,
            height: 0,
            borderTop: "0.5rem solid transparent",
            borderLeft: "0.5rem solid transparent",
            borderRight: "0.5rem solid var(--pink-primary)",
            borderBottom: "0.5rem solid var(--pink-primary)",
          }}
        >
          <Check
            sx={{
              fontSize: "0.75rem",
              color: "var(--white)",
              transform: "translate(-20%, -80%)",
            }}
          />
        </Box>
      )}
    </Button>
  );
};

export default ProductOption;
