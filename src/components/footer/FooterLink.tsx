import React from "react";
import CustomLink, { LinkColor } from "../links/CustomLink";

interface IFooterLink {
  isHeader?: boolean;
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<IFooterLink> = ({
  isHeader = false,
  href,
  children,
}) => {
  return (
    <CustomLink
      href={href}
      color={LinkColor.grey}
      sx={{
        fontSize: isHeader ? "0.875rem" : "0.75rem",
        fontWeight: isHeader ? "700" : "400",
      }}
      noUnderline
      hoverUnderline
    >
      {children}
    </CustomLink>
  );
};

export default FooterLink;
