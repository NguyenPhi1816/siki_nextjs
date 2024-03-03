import { Link, styled } from "@mui/material";
import React from "react";

export enum LinkColor {
  primaryPink = "var(--pink-primary)",
  white = "var(--white)",
}

export enum LinkComponent {
  button,
}

interface ICustomLink {
  href: string;
  color?: LinkColor;
  component?: LinkComponent;
  noUnderline?: boolean;
  children: React.ReactNode;
}

const ButtonLink = styled(Link)({
  padding: "10px 12px",
  backgroundColor: "transparent",
  borderRadius: "4px",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "var(--pink-secondary)",
  },
});

const CustomLink: React.FC<ICustomLink> = ({
  href,
  children,
  component,
  noUnderline,
  color,
}) => {
  let Component: any = Link;
  if (component === LinkComponent.button) {
    Component = ButtonLink;
  }

  const ComponentProps: Record<string, any> = {};
  ComponentProps.href = href;
  if (color) {
    ComponentProps.sx = { color: color };
  }
  if (noUnderline) {
    ComponentProps.underline = "none";
  }

  return <Component {...ComponentProps}>{children}</Component>;
};

export default CustomLink;
