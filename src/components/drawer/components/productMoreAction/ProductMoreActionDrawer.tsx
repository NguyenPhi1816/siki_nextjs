import React from "react";
import CustomDrawer from "../../Drawer";
import DrawerList from "../../DrawerList";
import ProductMoreActionItem from "./ProductMoreActionItem";
import { FavoriteBorder, Link, Share } from "@mui/icons-material";

interface IProductMoreActionDrawer {
  open: boolean;
  setOpen: () => void;
}

interface IProductAction {
  icon: React.ReactNode;
  title: string;
  action: () => void;
}

const actions: IProductAction[] = [
  { icon: <Link />, title: "Sao chép liên kết", action: () => {} },
  { icon: <Share />, title: "Chia sẻ", action: () => {} },
  { icon: <FavoriteBorder />, title: "Yêu thích", action: () => {} },
];

const ProductMoreActionDrawer: React.FC<IProductMoreActionDrawer> = ({
  open,
  setOpen,
}) => {
  return (
    <CustomDrawer open={open} setOpen={setOpen}>
      <DrawerList>
        {actions.map((item) => (
          <ProductMoreActionItem icon={item.icon} title={item.title} />
        ))}
      </DrawerList>
    </CustomDrawer>
  );
};

export default ProductMoreActionDrawer;
