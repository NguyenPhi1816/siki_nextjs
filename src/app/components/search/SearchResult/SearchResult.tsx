"use client";
import { Autocomplete, Chip, Typography } from "@mui/material";
import React from "react";
import SearchResultItem from "../SearchResultItem";
import { Search } from "@mui/icons-material";

// Top 5 Nigerian songs on Apple Music
const top5Songs = [
  { id: 1, label: "Organize" },
  { id: 2, label: "Joha" },
  { id: 3, label: "Terminator" },
  { id: 4, label: "Dull" },
  { id: 5, label: "Nzaza" },
];

interface SearchResultProps {
  sx?: any;
  renderInput: (params: any) => React.ReactNode;
}

const SearchResult: React.FC<SearchResultProps> = ({ sx, renderInput }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top5Songs}
      renderOption={(props, option) => (
        <SearchResultItem key={option.id} option={option} props={props} />
      )}
      sx={{ ...sx }}
      renderInput={renderInput}
    />
  );
};

export default SearchResult;
