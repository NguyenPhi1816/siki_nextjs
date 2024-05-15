import { Box, SxProps } from "@mui/material";

interface IProductPageSection {
  children: React.ReactNode;
  sx?: SxProps;
}

const PageSection: React.FC<IProductPageSection> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        marginBottom: "1rem",
        bgcolor: "white",
        width: "100%",
        overflowY: "scroll",
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default PageSection;
