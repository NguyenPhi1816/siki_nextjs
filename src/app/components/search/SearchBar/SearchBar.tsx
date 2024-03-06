"use client";
import React from "react";
import { Search } from "@mui/icons-material";
import { Container, IconButton, TextField } from "@mui/material";
import { containerStyles, textFieldStyles, iconButtonStyles } from "./styles";

interface SearchBarProps {
  sx?: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ sx }) => {
  return (
    <Container component="form" sx={{ ...sx, ...containerStyles }}>
      <TextField placeholder="Search..." size="small" sx={textFieldStyles} />
      <IconButton sx={iconButtonStyles}>
        <Search />
      </IconButton>
    </Container>
  );
};

export default SearchBar;
