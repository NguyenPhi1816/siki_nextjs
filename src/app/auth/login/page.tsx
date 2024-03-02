import SignInForm from "@/app/components/auth/SignInForm";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const SignIn = () => {
  const url = process.env.NEXT_PUBLIC_SIGN_IN_BACKGROUND_IMAGE_URL;

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
          backgroundColor: "var(--overlay)",
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
            backgroundColor: "var(--white)",
            borderRadius: 1,
          }}
        >
          <Typography component="h1" variant="h2" sx={{ fontWeight: 700 }}>
            Sign In
          </Typography>
          <SignInForm />
          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item>
              <Link href="/auth/forgot-password" variant="body2">
                Forgot your password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/auth/register" variant="body2">
                Dont have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default SignIn;
