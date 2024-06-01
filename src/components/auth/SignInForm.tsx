"use client";
import { doLogin, doSocialLogin } from "@/actions/auth";
import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";

const SignInForm = () => {
  const url = process.env.NEXT_PUBLIC_SIGN_IN_BACKGROUND_IMAGE_URL;
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setIsLoading(true);
    try {
      await doLogin(formData);
    } catch (error) {
      setErrorMessage("Tài khoản hoặc mật khẩu không chính xác.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearMessage = () => {
    setErrorMessage("");
  };

  return (
    isAppLoaded && (
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
              Đăng nhập
            </Typography>
            <form onSubmit={handleLogin} style={{ marginTop: "2rem" }}>
              <TextField
                error={errorMessage !== ""}
                required
                fullWidth
                id="phoneNumber"
                label="Số điện thoại"
                name="phoneNumber"
                onFocus={handleClearMessage}
              />
              <TextField
                error={errorMessage !== ""}
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                onFocus={handleClearMessage}
                sx={{ mt: 2 }}
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Ghi nhớ đăng nhập"
              />
              {errorMessage !== "" && (
                <Typography fontSize={"0.875rem"} color="var(--text-error)">
                  {errorMessage}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                sx={{ mt: 2, mb: 2, pt: 2, pb: 2, color: "var(--bg-white)" }}
              >
                {isLoading && (
                  <CircularProgress
                    color="inherit"
                    size={"1.5rem"}
                    sx={{ marginRight: "1rem" }}
                  />
                )}
                <Typography
                  component="h5"
                  variant="body1"
                  sx={{ fontWeight: 700 }}
                >
                  Đăng nhập
                </Typography>
              </Button>
            </form>
            <Grid container justifyContent="space-between" spacing={1}>
              <Grid item>
                <Link href="/forgot-password" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  Chưa có tài khoản? Đăng ký ngay
                </Link>
              </Grid>
            </Grid>
            <Box sx={{ padding: "2rem 0 1rem" }}>
              <Typography>Hoặc đăng nhập với</Typography>
            </Box>
            <Box sx={{ marginBottom: "2rem" }}>
              <form action={doSocialLogin}>
                <IconButton
                  sx={{
                    bgcolor: "var(--bg-google)",
                    color: "var(--text-white)",
                    marginRight: "1rem",
                    ":hover": {
                      bgcolor: "var(--bg-google)",
                      opacity: 0.8,
                    },
                  }}
                  type="submit"
                  name="action"
                  value="google"
                >
                  <Google />
                </IconButton>
              </form>
            </Box>
          </Box>
        </Container>
      </Container>
    )
  );
};

export default SignInForm;
