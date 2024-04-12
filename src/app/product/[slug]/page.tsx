"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Wrapper from "@/components/wrapper/Wrapper";
import MessageModal, { MessageType } from "@/components/modal/MessageModal";
import { IProductAttributeValue, IProductVariant } from "@/types/types";
import { useRouter } from "next/navigation";
import { useGetProductsBySlugQuery } from "../../../../lib/feartures/product/productSlice";
import ProductImageSlider from "@/components/product/ProductDetailSlider";
import { useAppSelector } from "../../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../../lib/feartures/ui/uiSlice";
import ProductDetailPrice from "@/components/product/ProductDetailPrice";
import Topbar from "@/components/navbar/TopBar";
import ProductNavbar from "@/components/navbar/components/topbar/ProductNavbar";
import DefaultTopNavbar from "@/components/navbar/components/topbar/DefaultTopNavbar";
import BottomBar from "@/components/navbar/BottomBar";
import ProductBottomNavbar from "@/components/navbar/components/bottombar/ProductBottomNavbar";
import CustomDrawer from "@/components/drawer/Drawer";
import ProductDetailOption from "@/components/product/ProductDetailOption";
import Image from "next/image";
import { currencyFormat } from "@/components/numberFormat/currency";

const ProductPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { spid: string };
}) => {
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);
  const router = useRouter();
  const {
    refetch,
    data: product,
    error,
    isLoading,
  } = useGetProductsBySlugQuery(params.slug);
  const [slideImages, setSlideImages] = useState<string[] | null>(null);
  const [selectedProductVariant, setSelectedProductVariant] =
    useState<IProductVariant | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    IProductAttributeValue[]
  >([]);
  const [showMobileOptionDrawer, setShowMobileOptionDrawer] =
    useState<boolean>(false);

  useEffect(() => {
    if (product) {
      const selectedProductVariant = product.productVariants.find(
        (item) => item.id === Number.parseInt(searchParams.spid)
      );
      if (selectedProductVariant) {
        setSelectedProductVariant(selectedProductVariant);
      }
    }
  }, [product, searchParams.spid]);

  useEffect(() => {
    if (selectedProductVariant) {
      let _slideImages = [];
      const _mainImage = selectedProductVariant.image;
      const productImages = selectedProductVariant.productImages.map(
        (image) => image.url
      );
      _slideImages = [_mainImage, ...productImages];
      setSlideImages(_slideImages);
      setSelectedOptions(selectedProductVariant.productAttributeValues);
    }
  }, [selectedProductVariant]);

  const handleChangeOption = (option: IProductAttributeValue) => {
    setSelectedOptions((prev) => {
      const newSelectedOption = prev.map((item) => {
        if (item.attributeId === option.attributeId) {
          return option;
        }
        return item;
      });
      return newSelectedOption;
    });
  };

  useEffect(() => {
    const variant = product?.productVariants.find(
      (item) =>
        JSON.stringify(item.productAttributeValues) ===
        JSON.stringify(selectedOptions)
    );
    if (variant) {
      setSelectedProductVariant(variant);
      router.push(`/product/${product?.slug}?spid=${variant.id}`);
    }
  }, [product, selectedOptions, router]);

  return (
    isAppLoaded && (
      <>
        {!error && (
          <>
            <Topbar>
              {isMobile ? <ProductNavbar /> : <DefaultTopNavbar />}
            </Topbar>
            <Wrapper sx={{ bgcolor: "white" }}>
              <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
                <Grid
                  container
                  direction="row"
                  sx={{
                    justifyContent: "center",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Grid item xs={12} sm={12} md={5}>
                    <ProductImageSlider
                      images={slideImages}
                      showSkeleton={isLoading}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={7}>
                    <ProductDetailPrice
                      showSkeleton={isLoading}
                      product={product}
                      selectedProductVariant={selectedProductVariant}
                      onChangeOption={handleChangeOption}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Wrapper>
            <BottomBar>
              <ProductBottomNavbar
                onClick={() => setShowMobileOptionDrawer(true)}
              />
            </BottomBar>
          </>
        )}
        <CustomDrawer
          open={showMobileOptionDrawer}
          setOpen={() => setShowMobileOptionDrawer((prev) => !prev)}
        >
          {selectedProductVariant && product && (
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
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "var(--pink-primary)" }}
                  >
                    {currencyFormat(selectedProductVariant.price)}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <ProductDetailOption
                  productAttributes={product?.productAttributes}
                  selectedProductVariant={selectedProductVariant}
                  onChangeOption={handleChangeOption}
                />
              </Box>
            </Box>
          )}
        </CustomDrawer>
        <MessageModal
          open={!!error}
          onClose={() => {
            refetch();
          }}
          type={MessageType.ERROR}
          title="Oops! Đã có lỗi xảy ra"
          message="Đã có lỗi xảy ra trong quá trình tải dữ liệu. Vui lòng thử lại."
        />
      </>
    )
  );
};

export default ProductPage;
