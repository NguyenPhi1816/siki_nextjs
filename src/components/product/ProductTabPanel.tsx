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
import { IProduct } from "./products";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectAppleCategory,
  selectOppoCategory,
  selectProduct,
  selectProductLabel,
  selectSamsungCategory,
  selectXiaomiCategory,
} from "../../../lib/feartures/product/productSlice";
import { Button, Grid, Skeleton } from "@mui/material";
import ProductItemSkeleton from "./ProductItemSkeleton";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";

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

const CustomLabelSkeleton = () => {
  return (
    <Box
      sx={{
        width: "16.6%",
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Skeleton variant="rectangular" width={"2rem"} height={"2rem"} />
      <Skeleton width={"4rem"} />
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
}

const ProductTabPanel: React.FC<IProductTabPanel> = ({ sx }) => {
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const productLabel = useAppSelector(selectProductLabel);

  const data = [
    { storeName: "AllProduct", product: useAppSelector(selectProduct) },
    { storeName: "Apple", product: useAppSelector(selectAppleCategory) },
    { storeName: "Samsung", product: useAppSelector(selectSamsungCategory) },
    { storeName: "Xiaomi", product: useAppSelector(selectXiaomiCategory) },
    { storeName: "OPPO", product: useAppSelector(selectOppoCategory) },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    isAppLoaded && (
      <Box
        padding={2}
        sx={{ ...sx, width: "100%", bgcolor: "var(--white)", borderRadius: 1 }}
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
                backgroundColor: "var(--pink-secondary-opacity-20)",
              },
            }}
          >
            {productLabel.length !== 0
              ? productLabel.map((item) => (
                  <Tab
                    key={item.id}
                    sx={{ width: "16.6%" }}
                    label={
                      <CustomLabel
                        imageUrl={item.imageUrl}
                        title={item.title}
                      />
                    }
                    {...a11yProps(item.id)}
                  />
                ))
              : new Array(6)
                  .fill(0)
                  .map((item, i) => <CustomLabelSkeleton key={i} />)}
          </Tabs>
        </Box>
        {productLabel.length !== 0 ? (
          <>
            {productLabel.map((item) => {
              const dataItem = data.find((i) => i.storeName === item.storeName);
              if (dataItem) {
                return (
                  <CustomTabPanel
                    key={item.id}
                    value={value}
                    index={item.id}
                    data={dataItem.product}
                  />
                );
              }
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
        ) : (
          <Grid
            container
            spacing={2}
            paddingTop={"0.5rem"}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {new Array(25).fill(0).map((item, i) => (
              <Grid item xs={2} key={i}>
                <ProductItemSkeleton key={i} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    )
  );
};

export default ProductTabPanel;
