import { IBreadcrumb } from "@/types/types";
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
            <>
              <ChevronRight sx={{ color: "var(--text-grey)" }} />
              <BreadcrumbItem key={item.title} data={item} />
            </>
          );
        }
        return <BreadcrumbItem key={item.title} data={item} />;
      })}
    </Box>
  );
};

export default BreadcrumbContainer;
