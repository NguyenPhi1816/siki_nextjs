"use client";
import CustomDrawer from "@/components/drawer/Drawer";
import CategoryDrawer from "@/components/drawer/components/category";
import { Category, Home, Notifications, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const DefaultBottomNavbar = () => {
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
    <>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction label="Trang Chủ" icon={<Home />} value={"/"} />
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
      >
        <CategoryDrawer onClose={() => setOpenDrawer(false)} />
      </CustomDrawer>
    </>
  );
};

export default DefaultBottomNavbar;
