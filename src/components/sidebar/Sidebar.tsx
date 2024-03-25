import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import CustomLink, { LinkColor, LinkComponent } from "../links/CustomLink";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";

const Sidebar = () => {
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);

  return (
    isStatesInitialized && (
      <Box sx={{ bgcolor: "var(--white)", borderRadius: 1 }}>
        <List>
          <ListItem>
            <Typography fontWeight={700}>Categories</Typography>
          </ListItem>
          {new Array(20).fill(0).map((item, i) => {
            return (
              <ListItem key={i}>
                <CustomLink
                  sx={{ width: "100%" }}
                  href="/"
                  noUnderline
                  component={LinkComponent.button}
                  hoverBgColor="var(--grey)"
                  color={LinkColor.black}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
                      alt="item image"
                      width={32}
                      height={32}
                    />
                    <Typography sx={{ marginLeft: "0.5rem" }} variant="body1">
                      Nhà sách Siki
                    </Typography>
                  </Box>
                </CustomLink>
              </ListItem>
            );
          })}
        </List>
      </Box>
    )
  );
};

export default Sidebar;
