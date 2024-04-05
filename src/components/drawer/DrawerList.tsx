import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import {
  AccountCircle,
  FormatListBulleted,
  Home,
  Notifications,
} from "@mui/icons-material";
import DrawerListItem from "./DrawerListItem";
import { useGetCategoriesQuery } from "../../../lib/feartures/category/categorySlice";

const DrawerList = () => {
  const { data: category } = useGetCategoriesQuery();

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
