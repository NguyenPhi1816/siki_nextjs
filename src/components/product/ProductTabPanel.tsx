"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ProductList from "./ProductList";
import { useAppSelector } from "../../../lib/hooks";
import { Button, Skeleton } from "@mui/material";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";
import { IProduct, IHome } from "@/types/product";

interface ICustomLabel {
  imageUrl: string | StaticImport;
  title: string;
}

const CustomLabel: React.FC<ICustomLabel> = ({ imageUrl, title }) => {
  return (
    <Box>
      <Image
        style={{
          marginBottom: "0.5rem",
          width: "2rem",
          height: "2rem",
          objectFit: "contain",
        }}
        src={imageUrl}
        alt="tab label"
        height={100}
        width={100}
      />
      <Typography
        sx={{ textTransform: "none", fontSize: "0.75rem!important" }}
        variant="body1"
      >
        {title}
      </Typography>
    </Box>
  );
};

interface ICustomTabPanel {
  index: number;
  value: number;
  data: IProduct[];
}

const CustomTabPanel: React.FC<ICustomTabPanel> = ({ index, value, data }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <ProductList data={data} sx={{ padding: "0.5rem 0" }} />
    </Box>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface IProductTabPanel {
  sx?: SxProps;
  data: IHome[];
}

const ProductTabPanel: React.FC<IProductTabPanel> = ({ sx, data }) => {
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    isAppLoaded && (
      <Box
        padding={2}
        sx={{
          ...sx,
          width: "100%",
          bgcolor: "var(--bg-white)",
          borderRadius: 1,
        }}
      >
        <Typography
          variant={"h4"}
          sx={{ marginBottom: 1, fontSize: "1.125rem", fontWeight: "700" }}
        >
          Today recommendations
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="basic tabs example"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "var(--bg-secondary-pink-opacity-20)",
              },
            }}
          >
            {data.map((item: IHome) => (
              <Tab
                key={item.id}
                sx={{ width: "16.6%" }}
                label={<CustomLabel imageUrl={item.image} title={item.name} />}
                {...a11yProps(item.id)}
              />
            ))}
          </Tabs>
        </Box>
        <>
          {data?.map((item: IHome) => {
            return (
              <CustomTabPanel
                key={item.id}
                value={value}
                index={item.id}
                data={item.products}
              />
            );
          })}
          <Box
            sx={{
              marginTop: "1rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="outlined">Xem thêm</Button>
          </Box>
        </>
      </Box>
    )
  );
};

export default ProductTabPanel;
