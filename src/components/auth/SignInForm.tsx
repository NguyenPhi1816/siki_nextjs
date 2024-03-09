import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const SignInForm = () => {
  return (
    <Box component="form" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Remember Me"
          />
        </Grid>
      </Grid>
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
          sx={{ fontWeight: 700, color: "var(--white)" }}
        >
          Sign In
        </Typography>
      </Button>
    </Box>
  );
};

export default SignInForm;
