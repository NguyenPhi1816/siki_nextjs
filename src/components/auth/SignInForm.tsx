"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const SignInForm = () => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_SIGN_IN_BACKGROUND_IMAGE_URL;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const phoneNumber = formData.get("phoneNumber");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // handle store token to cookie
      router.push("/");
    } else {
      // handle show dialog
      console.error("Login Failed");
    }
  };

  return (
    <Container
      component="section"
      sx={{
        p: 0,
        m: 0,
        position: "relative",
        maxWidth: "100vw!important",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('${url}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "var(--bg-overlay)",
        },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "var(--bg-white)",
            borderRadius: 1,
          }}
        >
          <Typography component="h1" variant="h2" sx={{ fontWeight: 700 }}>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
            <TextField
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              sx={{ mt: 2 }}
            />
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Remember Me"
            />
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              sx={{ mt: 2, mb: 2, pt: 2, pb: 2 }}
            >
              <Typography
                component="h5"
                variant="body1"
                sx={{ fontWeight: 700, color: "var(--bg-white)" }}
              >
                Sign In
              </Typography>
            </Button>
          </form>
          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item>
              <Link href="/forgot-password" variant="body2">
                Forgot your password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                Dont have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default SignInForm;
