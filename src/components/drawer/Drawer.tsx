"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Link, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import Image from "next/image";

interface ICustomDrawer {
  open: boolean;
  setOpen: () => void;
}

const CustomDrawer: React.FC<ICustomDrawer> = ({ open, setOpen }) => {
  const noUserImage = process.env.NEXT_PUBLIC_NO_USER_IMAGE;

  const toggleDrawer = () => () => {
    setOpen();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer()}>
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
                User's Name
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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer()}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
