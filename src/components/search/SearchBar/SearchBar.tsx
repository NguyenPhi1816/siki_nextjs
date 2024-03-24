"use client";
import React from "react";
import { Search } from "@mui/icons-material";
import { Container, IconButton, SxProps, TextField } from "@mui/material";
import { textFieldStyles, iconButtonStyles } from "./styles";

interface SearchBarProps {
  autoCompleteParams?: any;
  sx?: SxProps;
}

const SearchBar: React.FC<SearchBarProps> = ({ autoCompleteParams, sx }) => {
  const containerSx: SxProps = {
    ...sx,
    position: "relative",
    margin: "0!important",
    padding: "0!important",
    display: "flex",
    borderRadius: 1,
  };

  return (
    <Container component="form" sx={containerSx}>
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
