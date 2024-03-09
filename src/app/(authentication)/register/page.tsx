"use client";
import SignUpForm from "@/components/auth/SignUpForm";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { useAppSelector } from "../../../../lib/hooks";
import { selectIsMobileScreen } from "../../../../lib/feartures/ui/uiSlice";

const SignUp = () => {
  const url = process.env.NEXT_PUBLIC_SIGN_UP_BACKGROUND_IMAGE_URL;

  const isMobileScreen = useAppSelector(selectIsMobileScreen);

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
        alignItems: isMobileScreen ? "flex-start" : "center",
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
                padding: isMobileScreen ? "0" : "20px",
                backgroundImage: isMobileScreen ? "" : `url(${url})`,
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
                variant={isMobileScreen ? "h4" : "h2"}
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
                <Link href="/login" variant="body2">
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
