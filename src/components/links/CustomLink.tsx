import { Link, SxProps, styled } from "@mui/material";
import React from "react";

export enum LinkColor {
  primaryPink = "var(--pink-primary)",
  white = "var(--white)",
  black = "var(--black)",
  grey = "var(--text-grey)",
}

export enum LinkComponent {
  button,
  roundedButton,
}

interface ICustomLink {
  href: string;
  color?: LinkColor;
  fontSize?: string;
  component?: LinkComponent;
  noUnderline?: boolean;
  hoverUnderline?: boolean;
  children: React.ReactNode;
  sx?: SxProps;
  hoverBgColor?: string;
}

const ButtonLink = styled(Link)({
  padding: "0.5rem!important",
  backgroundColor: "transparent",
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
  hoverUnderline,
  color,
  fontSize,
  sx,
  hoverBgColor = "",
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

  if (hoverBgColor.trim().length !== 0) {
    sx = {
      ...sx,
      ":hover": {
        backgroundColor: hoverBgColor,
      },
    };
  }
  ComponentProps.sx = { ...sx };

  if (color) {
    ComponentProps.sx = { ...ComponentProps.sx, color: color };
  }
  if (noUnderline) {
    ComponentProps.underline = "none";
  }
  if (hoverUnderline) {
    ComponentProps.sx = {
      ...ComponentProps.sx,
      ":hover": {
        textDecoration: "underline",
      },
    };
  }
  if (component === LinkComponent.button) {
    ComponentProps.borderRadius = "0.25rem";
  } else if (component === LinkComponent.roundedButton) {
    ComponentProps.borderRadius = "5rem";
  }
  if (fontSize?.length !== 0) {
    ComponentProps.fontSize = fontSize;
  }

  return <Component {...ComponentProps}>{children}</Component>;
};

export default CustomLink;
