"use client";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  // This will not be logged on the server when using static rendering
  console.log(search);

  return (
    <Suspense>
      <Container>Search: {search}</Container>
    </Suspense>
  );
};

export default Search;
