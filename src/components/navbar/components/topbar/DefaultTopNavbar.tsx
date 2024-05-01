"use client";
import { selectIsMobile } from "../../../../../lib/feartures/ui/uiSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileScreenNavbar from "./MobileScreenNavbar";

const DefaultTopNavbar: React.FC = () => {
  const isMobile: boolean = useAppSelector(selectIsMobile);
  return isMobile ? <MobileScreenNavbar /> : <LargeScreenNavbar />;
};

export default DefaultTopNavbar;
