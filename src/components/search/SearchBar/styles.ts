export const containerStyles = {
  position: "relative",
  margin: "0!important",
  padding: "0!important",
  display: "flex",
  borderRadius: 1,
};

export const textFieldStyles = {
  width: "100%",
  "& fieldset": {
    border: "none",
  },
  "& div": {
    paddingRight: "2.5rem",
  },
  "& input": {
    width: "100%",
    color: "var(--white)",

    "& div": {
      bgcolor: "red",
    },
  },
};

export const iconButtonStyles = {
  position: "absolute",
  right: "0",
  top: "0",
  color: "var(--white)",
};
