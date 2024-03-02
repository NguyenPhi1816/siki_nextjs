import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ color: "var(--white)" }}>
      <Toolbar variant="regular">
        <Link href="/" underline="none" color="inherit">
          <Typography
            sx={{ fontFamily: luckiestGuy.style.fontFamily }}
            variant="h4"
            component="h1"
          >
            SIKI
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
