import { IBreadcrumb } from "@/types/types";
import React from "react";
import CustomLink, { LinkColor } from "../links/CustomLink";

interface IBreadcrumbItem {
  data: IBreadcrumb;
}

const BreadcrumbItem: React.FC<IBreadcrumbItem> = ({ data }) => {
  return (
    <CustomLink
      href={data.path}
      color={LinkColor.grey}
      noUnderline
      hoverUnderline
      fontSize="0.875rem"
    >
      {data.title}
    </CustomLink>
  );
};

export default BreadcrumbItem;
