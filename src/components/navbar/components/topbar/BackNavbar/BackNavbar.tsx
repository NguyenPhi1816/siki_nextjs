import { ChevronLeft } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const IconButtonStyle = { color: "var(--text-primary-pink)" };

interface IBackNavbar {
  title: string;
}

const BackNavbar: React.FC<IBackNavbar> = ({ title }) => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <Container
      sx={{
        p: "0.5rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <IconButton sx={IconButtonStyle} onClick={goBack}>
          <ChevronLeft />
        </IconButton>
      </Box>
      <Box>
        <Typography fontSize={"1.0625rem"} sx={IconButtonStyle}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ width: "2.5rem", height: "2.5rem" }}></Box>
    </Container>
  );
};

export default BackNavbar;
