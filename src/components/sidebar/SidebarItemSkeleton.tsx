import { Box, Skeleton } from "@mui/material";

const SidebarItemSkeleton = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          padding: "0.5rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" width={"2rem"} height={"2rem"} />
        <Skeleton sx={{ marginLeft: "0.5rem", width: "70%" }} />
      </Box>
    </Box>
  );
};

export default SidebarItemSkeleton;
