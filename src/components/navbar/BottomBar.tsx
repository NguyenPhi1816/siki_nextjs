"use client";
import { Category, Home, Notifications, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";

const BottomBar = () => {
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);
  const [value, setValue] = useState(0);

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
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Trang Chủ" icon={<Home />} />
          <BottomNavigationAction label="Danh mục" icon={<Category />} />
          <BottomNavigationAction label="Thông báo" icon={<Notifications />} />
          <BottomNavigationAction label="Cá nhân" icon={<Person />} />
        </BottomNavigation>
      </Box>
    )
  );
};

export default BottomBar;
