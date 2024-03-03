"use client";
import { Search } from "@mui/icons-material";
import { Container, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  width: "100%",
  "& fieldset": { border: "none" },
  "& input": {
    padding: "10px",
    color: "var(--white)",
  },
});

const SearchBar = () => {
  return (
    <Container
      maxWidth="sm"
      component="form"
      sx={{
        padding: "0px!important",
        bgcolor: "var(--pink-secondary)",
        display: "flex",
        borderRadius: 1,
      }}
    >
      <CustomTextField placeholder="Search..." />
      <IconButton sx={{ color: "var(--white)" }}>
        <Search />
      </IconButton>
    </Container>
  );
};

export default SearchBar;
