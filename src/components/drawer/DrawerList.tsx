import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import {
  AccountCircle,
  ChevronRight,
  FormatListBulleted,
  Home,
  Notifications,
} from "@mui/icons-material";
import Image from "next/image";
import DrawerListItem from "./DrawerListItem";
import { useAppSelector } from "../../../lib/hooks";
import { selectCategory } from "../../../lib/feartures/category/categorySlice";

const items = [
  { icon: <Home />, title: "Home" },
  { icon: <FormatListBulleted />, title: "Categories" },
  { icon: <AccountCircle />, title: "Account" },
  { icon: <Notifications />, title: "Notifications" },
];

const DrawerList = () => {
  const category = useAppSelector(selectCategory);

  return (
    category && (
      <Box
        sx={{
          padding: "1rem",
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Grid container spacing={2}>
          {category.map((item) => (
            <Grid item xs={4} key={item.id}>
              <DrawerListItem data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
};

export default DrawerList;
