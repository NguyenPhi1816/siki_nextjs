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
        borderColor: selected ? "var(--pink-primary)" : "var(--text-grey)",
        color: selected ? "var(--pink-primary)" : "var(--text-grey)",
        ":hover": {
          borderColor: "var(--pink-primary)",
          color: "var(--pink-primary)",
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
