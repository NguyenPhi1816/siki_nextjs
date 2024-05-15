"use client";
import { Box, Grid, Typography } from "@mui/material";
import ProductDetailPrice from "../ProductDetailPrice";
import {
  IProductAttributeValue,
  IProductFull,
  IProductVariant,
} from "@/types/product";
import React, { useEffect, useState } from "react";
import ProductImageSlider from "../ProductImageSlider";
import { useRouter } from "next/navigation";
import CustomDrawer from "@/components/drawer/Drawer";
import BottomBar from "@/components/navbar/BottomBar";
import ProductBottomNavbar from "@/components/navbar/components/bottombar/ProductBottomNavbar";
import Image from "next/image";
import { currencyFormat } from "@/components/numberFormat/currency";
import ProductDetailOption from "../ProductDetailOption";

interface IProductDetail {
  spid: string;
  data: IProductFull;
  isLoading: boolean;
}

const ProductDetail: React.FC<IProductDetail> = ({ spid, data, isLoading }) => {
  const router = useRouter();
  const [selectedProductVariant, setSelectedProductVariant] =
    useState<IProductVariant | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    IProductAttributeValue[]
  >([]);
  const [slideImages, setSlideImages] = useState<string[] | null>(null);
  const [showMobileOptionDrawer, setShowMobileOptionDrawer] =
    useState<boolean>(false);

  // get variant base on spid (spid is variant id)
  useEffect(() => {
    if (data) {
      const selectedProductVariant = data.productVariants.find(
        (item) => item.id === Number.parseInt(spid)
      );
      if (selectedProductVariant) {
        setSelectedProductVariant(selectedProductVariant);
      }
    }
  }, [data, spid]);

  // get product information base on variant changes
  useEffect(() => {
    if (selectedProductVariant) {
      // get product images
      let _slideImages = [];
      const _mainImage = selectedProductVariant.image;
      const productImages = selectedProductVariant.productImages.map(
        (image) => image.url
      );
      _slideImages = [_mainImage, ...productImages];
      setSlideImages(_slideImages);

      // set selected option
      setSelectedOptions(selectedProductVariant.productAttributeValues);
    }
  }, [selectedProductVariant]);

  // handle change variant and url base on option changed
  useEffect(() => {
    // get selected variant
    const variant = data?.productVariants.find(
      (item) =>
        JSON.stringify(item.productAttributeValues) ===
        JSON.stringify(selectedOptions)
    );
    if (variant) {
      setSelectedProductVariant(variant);
      // change url base on variant changed
      router.push(`/product/${data?.slug}?spid=${variant.id}`);
    }
  }, [data, selectedOptions, router]);

  const handleChangeOption = (option: IProductAttributeValue) => {
    setSelectedOptions((prev) => {
      // get new selected options base on attribute value changed:
      // replace an item in the previous array with the new item with the same attribute id
      const newSelectedOptions = prev.map((item) => {
        if (item.attributeId === option.attributeId) {
          return option;
        }
        return item;
      });
      return newSelectedOptions;
    });
  };

  return (
    <>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Grid item xs={12} sm={12} md={5}>
          <ProductImageSlider images={slideImages} showSkeleton={isLoading} />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <ProductDetailPrice
            showSkeleton={isLoading}
            product={data}
            selectedProductVariant={selectedProductVariant}
            onChangeOption={handleChangeOption}
          />
        </Grid>
      </Grid>
      <BottomBar>
        <ProductBottomNavbar onClick={() => setShowMobileOptionDrawer(true)} />
      </BottomBar>
      <CustomDrawer
        open={showMobileOptionDrawer}
        setOpen={() => setShowMobileOptionDrawer((prev) => !prev)}
      >
        {selectedProductVariant && data && (
          <Box sx={{ padding: "1rem 1rem 0.5rem" }}>
            <Box
              sx={{
                marginBottom: "1rem",
                width: "100%",
                height: "5.625rem",
                display: "flex",
              }}
            >
              <Image
                style={{
                  width: "5.625rem",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={selectedProductVariant.image}
                alt="product image"
                width={90}
                height={90}
                priority
              />
              <Box sx={{ marginLeft: "1rem" }}>
                <Typography variant="body1">{data.name}</Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "var(--text-primary-pink)" }}
                >
                  {currencyFormat(selectedProductVariant.price)}
                </Typography>
              </Box>
            </Box>
            <Box>
              <ProductDetailOption
                productAttributes={data?.productAttributes}
                selectedProductVariant={selectedProductVariant}
                onChangeOption={handleChangeOption}
              />
            </Box>
          </Box>
        )}
      </CustomDrawer>
    </>
  );
};

export default ProductDetail;
