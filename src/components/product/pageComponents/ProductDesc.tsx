"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

interface IProductDesc {
  content: string;
}

const ProductDesc: React.FC<IProductDesc> = ({ content }) => {
  const HIDE_DESC = "10";
  const SHOW_DESC = "unset";
  const [showDesc, setShowDesc] = useState<string>(HIDE_DESC);

  const handleToggleDesc = () => {
    setShowDesc((prev) => {
      if (prev === HIDE_DESC) {
        return SHOW_DESC;
      }
      return HIDE_DESC;
    });
  };

  return (
    <Box>
      <Typography variant={"h4"} fontSize={"1.125rem"} fontWeight={700}>
        Mô tả sản phẩm
      </Typography>
      <Box
        dangerouslySetInnerHTML={{ __html: content }}
        sx={{
          h3: { fontSize: "1rem" },
          p: { fontSize: "0.875rem" },
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: showDesc,
          WebkitBoxOrient: "vertical",
        }}
      />
      <Box
        sx={{
          marginTop: "1rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleToggleDesc}
          sx={{ textTransform: "unset" }}
        >
          {showDesc === SHOW_DESC ? "Ẩn bớt" : "Xem thêm"}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDesc;
