import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Link, Typography } from "@mui/material";
import {
  AccountCircle,
  ChevronRight,
  FormatListBulleted,
  Home,
  Notifications,
} from "@mui/icons-material";
import Image from "next/image";

const items = [
  { icon: <Home />, title: "Home" },
  { icon: <FormatListBulleted />, title: "Categories" },
  { icon: <AccountCircle />, title: "Account" },
  { icon: <Notifications />, title: "Notifications" },
];

const DrawerList = () => {
  const noUserImage = process.env.NEXT_PUBLIC_NO_USER_IMAGE;
  return (
    <>
      <List sx={{ p: 0 }}>
        <ListItem
          disablePadding
          sx={{ width: "100%", bgcolor: "var(--pink-primary)" }}
        >
          <Link underline="none" sx={{ width: "100%", color: "var(--white)" }}>
            <Box
              sx={{
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                {noUserImage && (
                  <Image
                    height={40}
                    width={40}
                    alt="User Avatar"
                    src={noUserImage}
                  />
                )}
              </Box>
              <Box>
                <Typography variant="body1" fontSize="13px">
                  User Name
                </Typography>
                <Typography variant="body1" fontSize="11px">
                  useremail@gmail.com
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <ChevronRight sx={{ color: "var(--white)" }} />
                </IconButton>
              </Box>
            </Box>
          </Link>
        </ListItem>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerList;
