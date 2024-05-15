import { Check } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

interface IFilterItem {
  content: string;
  selected: boolean;
  onClick: () => void;
}

const FilterItem: React.FC<IFilterItem> = ({ content, selected, onClick }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        marginTop: "0.5rem",
        marginRight: "0.5rem",
        borderRadius: 10,
        borderColor: selected
          ? "var(--outline-primary-pink)"
          : "var(--outline-dark-grey)",
        color: selected ? "var(--text-primary-pink)" : "var(--text-grey)",
        ":hover": {
          borderColor: "var(--outline-primary-pink)",
          color: "var(--text-primary-pink)",
        },
      }}
      onClick={onClick}
    >
      {selected && <Check fontSize="small" sx={{ marginRight: 1 }} />}
      <Typography variant="body1" fontSize={"0.875rem"} textTransform={"none"}>
        {content}
      </Typography>
    </Button>
  );
};

export default FilterItem;
