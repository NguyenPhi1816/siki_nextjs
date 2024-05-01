import { IBreadcrumb } from "@/types/category";
import { Box } from "@mui/material";
import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import { ChevronRight } from "@mui/icons-material";

interface IBreadcrumbContainer {
  data: IBreadcrumb[];
}

const BreadcrumbContainer: React.FC<IBreadcrumbContainer> = ({ data }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {data?.map((item, index) => {
        if (index > 0 && index <= data.length - 1) {
          return (
            <Box
              key={item.title}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ChevronRight sx={{ color: "var(--text-grey)" }} />
              <BreadcrumbItem key={item.title} data={item} />
            </Box>
          );
        }
        return <BreadcrumbItem key={item.title} data={item} />;
      })}
    </Box>
  );
};

export default BreadcrumbContainer;
