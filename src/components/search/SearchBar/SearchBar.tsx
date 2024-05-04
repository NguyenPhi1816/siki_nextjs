"use client";
import React from "react";
import { Button, Container, SxProps, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export enum ButtonStyle {
  text,
  icon,
}

interface SearchBarProps {
  autoCompleteParams?: any;
  buttonStyle?: ButtonStyle;
  sx?: SxProps;
}

const SearchBar: React.FC<SearchBarProps> = ({
  autoCompleteParams,
  sx,
  buttonStyle = ButtonStyle.text,
}) => {
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
        sx={{
          width: "100%",
          border: "1px solid var(--outline-grey)",
          borderRadius: 1,
          "& fieldset": {
            border: "none",
          },
          "& div": {
            paddingRight: buttonStyle === ButtonStyle.text ? "5rem" : "2.5rem",
          },
          "& input": {
            paddingRight:
              buttonStyle === ButtonStyle.text
                ? "80px!important"
                : "40px!important",
            width: "100%",
            fontSize: "0.875rem",
            color: "var(--text-grey)",

            "& div": {
              bgcolor: "red",
            },
          },
        }}
      />
      <Button
        sx={{
          position: "absolute",
          right: "0",
          top: "0",
          minWidth: "2.5rem",
          height: "100%",
          color: "var(--text-primary-pink)",
          textTransform: "none",
        }}
      >
        {buttonStyle === ButtonStyle.text ? "Tìm kiếm" : <Search />}
      </Button>
    </Container>
  );
};

export default SearchBar;
