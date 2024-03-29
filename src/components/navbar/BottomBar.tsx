"use client";
import { Category, Home, Notifications, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Box } from "@mui/system";
import { SyntheticEvent, useState } from "react";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import { useRouter } from "next/navigation";
import CustomDrawer from "../drawer/Drawer";

const BottomBar = () => {
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);
  const router = useRouter();
  const [value, setValue] = useState<string>("/");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    if (newValue === "") {
      setOpenDrawer((prev) => !prev);
    } else {
      setOpenDrawer(false);
      router.push(newValue);
    }

    setValue(newValue);
  };

  return (
    isStatesInitialized &&
    isMobile && (
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Trang Chủ"
            icon={<Home />}
            value={"/"}
          />
          <BottomNavigationAction
            label="Danh mục"
            icon={<Category />}
            value={""}
          />
          <BottomNavigationAction
            label="Thông báo"
            icon={<Notifications />}
            value={"/notification"}
          />
          <BottomNavigationAction
            label="Cá nhân"
            icon={<Person />}
            value={"/account"}
          />
        </BottomNavigation>
        <CustomDrawer
          open={openDrawer}
          setOpen={() => setOpenDrawer((prev) => !prev)}
        />
      </Box>
    )
  );
};

export default BottomBar;
