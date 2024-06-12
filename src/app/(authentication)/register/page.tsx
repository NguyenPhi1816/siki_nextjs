"use client";
import SignUpForm from "@/components/auth/SignUpForm";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { useAppSelector } from "../../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../../lib/feartures/ui/uiSlice";

const SignUp = () => {
  const url = process.env.NEXT_PUBLIC_SIGN_UP_BACKGROUND_IMAGE_URL;

  const isMobile = useAppSelector(selectIsMobile);
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);

  return (
    isStatesInitialized && (
      <Container
        component="section"
        maxWidth="lg"
        sx={{
          pt: 10,
          pb: 3,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <Box
          sx={{
            padding: "1.25rem",
            height: "fit-content",
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  padding: isMobile ? "0" : "1.25rem",
                  backgroundImage: isMobile ? "" : `url(${url})`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 1,
                }}
              >
                <Typography
                  component="h1"
                  variant={isMobile ? "h4" : "h2"}
                  sx={{ fontWeight: 700 }}
                >
                  Đăng ký
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <SignUpForm />
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Đã có tài khoản? Đăng nhập
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  );
};

export default SignUp;
