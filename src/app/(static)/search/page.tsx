"use client";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  // This will not be logged on the server when using static rendering
  console.log(search);

  return <Container>Search: {search}</Container>;
};

export default Search;
