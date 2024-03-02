"use client";
import SignUpForm from "@/app/components/auth/SignUpForm";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

const SignUp = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const url = process.env.NEXT_PUBLIC_SIGN_UP_BACKGROUND_IMAGE_URL;

  return (
    <Container
      component="section"
      maxWidth="md"
      sx={{
        pt: 10,
        pb: 3,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: isSmScreen ? "flex-start" : "center",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          height: "fit-content",
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                padding: isSmScreen ? "0" : "20px",
                backgroundImage: isSmScreen ? "" : `url(${url})`,
                backgroundPosition: "bottom",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 1,
              }}
            >
              <Typography
                component="h1"
                variant={isSmScreen ? "h4" : "h2"}
                sx={{ fontWeight: 700 }}
              >
                Sign up
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignUpForm />
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUp;
