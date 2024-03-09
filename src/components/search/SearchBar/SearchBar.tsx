"use client";
import React from "react";
import { Search } from "@mui/icons-material";
import { Container, IconButton, TextField } from "@mui/material";
import { containerStyles, textFieldStyles, iconButtonStyles } from "./styles";

interface SearchBarProps {
  autoCompleteParams?: any;
  sx?: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ autoCompleteParams, sx }) => {
  return (
    <Container component="form" sx={{ ...sx, ...containerStyles }}>
      <TextField
        {...autoCompleteParams}
        placeholder="Search..."
        size="small"
        sx={textFieldStyles}
      />
      <IconButton sx={iconButtonStyles}>
        <Search />
      </IconButton>
    </Container>
  );
};

export default SearchBar;
