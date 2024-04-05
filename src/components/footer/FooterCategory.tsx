import { Box, Typography } from "@mui/material";
import FooterLink from "./FooterLink";
import { ICategory } from "@/types/types";
import React from "react";
import { display } from "@mui/system";

interface IFooterCategory {
  data: ICategory;
}

const FooterCategory: React.FC<IFooterCategory> = ({ data }) => {
  return (
    <Box marginBottom={"1rem"}>
      <Box marginBottom={"0.25rem"}>
        <FooterLink href={`/category/${data.id}`} isHeader>
          {data?.parent}
        </FooterLink>
      </Box>
      <Box>
        <Typography
          variant="body1"
          color={"var(--text-grey)"}
          fontSize={"0.75rem"}
        >
          {data?.children.map((item, index) => (
            <React.Fragment key={item}>
              <FooterLink href={`/category/${data.id}`}>{item}</FooterLink>
              {index !== data.children.length - 1 && <>&nbsp;/&nbsp;</>}
            </React.Fragment>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterCategory;
