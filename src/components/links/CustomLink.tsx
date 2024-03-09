import { Link, styled } from "@mui/material";
import React from "react";

export enum LinkColor {
  primaryPink = "var(--pink-primary)",
  white = "var(--white)",
}

export enum LinkComponent {
  button,
  roundedButton,
}

interface ICustomLink {
  href: string;
  color?: LinkColor;
  component?: LinkComponent;
  noUnderline?: boolean;
  children: React.ReactNode;
  sx?: {};
}

const ButtonLink = styled(Link)({
  padding: "8px!important",
  backgroundColor: "transparent",
  // borderRadius: "4px",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "var(--pink-secondary)",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CustomLink: React.FC<ICustomLink> = ({
  href,
  children,
  component,
  noUnderline,
  color,
  sx,
}) => {
  let Component: any = Link;
  if (
    component === LinkComponent.button ||
    component === LinkComponent.roundedButton
  ) {
    Component = ButtonLink;
  }

  const ComponentProps: Record<string, any> = {};
  ComponentProps.href = href;
  ComponentProps.sx = { ...sx };
  if (color) {
    ComponentProps.sx = { ...ComponentProps.sx, color: color };
  }
  if (noUnderline) {
    ComponentProps.underline = "none";
  }
  if (component === LinkComponent.button) {
    ComponentProps.borderRadius = "4px";
  } else if (component === LinkComponent.roundedButton) {
    ComponentProps.borderRadius = "5rem";
  }

  return <Component {...ComponentProps}>{children}</Component>;
};

export default CustomLink;
