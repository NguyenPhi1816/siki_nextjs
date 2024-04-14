"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Wrapper from "@/components/wrapper/Wrapper";
import MessageModal, { MessageType } from "@/components/modal/MessageModal";
import {
  IBreadcrumb,
  IProductAttributeValue,
  IProductVariant,
} from "@/types/types";
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
import { Verified } from "@mui/icons-material";
import Footer from "@/components/footer/Footer";
import { useGetCategoriesQuery } from "../../../../lib/feartures/category/categorySlice";
import CustomLink, { LinkComponent } from "@/components/links/CustomLink";
import ProductSwiper from "@/components/product/ProductSwiper";
import BreadcrumbContainer from "@/components/breadcrumb/BreadcrumbContainer";

const breadcrumb: IBreadcrumb[] = [
  { path: "/", title: "Trang chủ" },
  {
    path: "/category/dien-thoai-may-tinh-bang",
    title: "Điện thoại - Máy tính bảng",
  },
  { path: "/category/dien-thoai-smartphone", title: "Điện thoại Smartphone" },
  {
    path: "/product/iphone-15-pro-max-12345?spid=1",
    title: "Iphone 15 Pro Max",
  },
];

const ProductPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { spid: string };
}) => {
  const HIDE_DESC = "10";
  const SHOW_DESC = "unset";

  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);

  const {
    refetch,
    data: product,
    error,
    isLoading,
  } = useGetProductsBySlugQuery(params.slug);
  const {
    refetch: categoriesRefetch,
    data: categoriesData,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery();

  const router = useRouter();
  const [slideImages, setSlideImages] = useState<string[] | null>(null);
  const [selectedProductVariant, setSelectedProductVariant] =
    useState<IProductVariant | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    IProductAttributeValue[]
  >([]);
  const [showMobileOptionDrawer, setShowMobileOptionDrawer] =
    useState<boolean>(false);
  const [showDesc, setShowDesc] = useState<string>(HIDE_DESC);

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

  const handleToggleDesc = () => {
    setShowDesc((prev) => {
      if (prev === HIDE_DESC) {
        return SHOW_DESC;
      }
      return HIDE_DESC;
    });
  };

  return (
    isAppLoaded && (
      <Container
        sx={{
          p: 0,
          m: "0 auto",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {!error && !categoriesError && product && (
          <Box sx={{ width: "100%", height: "100%", overflowY: "hidden" }}>
            <Topbar>
              {isMobile ? <ProductNavbar /> : <DefaultTopNavbar />}
            </Topbar>
            <Wrapper sx={{ overflow: "scroll" }}>
              {!isMobile && (
                <Box sx={{ margin: "0.5rem 0" }}>
                  <BreadcrumbContainer data={breadcrumb} />
                </Box>
              )}
              <Box
                sx={{
                  marginBottom: "1rem",
                  bgcolor: "white",
                  width: "100%",
                  overflowY: "scroll",
                }}
              >
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
              <Box
                sx={{
                  marginTop: "1rem",
                  padding: "2rem",
                  bgcolor: "white",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "5rem",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={product.brandDto.logo}
                      alt={product.brandDto.name}
                      width={100}
                      height={100}
                    />
                  </Box>
                  <Box sx={{ marginLeft: "1rem" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1.125rem", fontWeight: 700 }}
                    >
                      {product.brandDto.name}
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "0.25rem",
                        display: "flex",
                        color: "var(--pink-primary)",
                      }}
                    >
                      <Verified fontSize="small" />
                      <Typography
                        variant="body1"
                        sx={{
                          marginLeft: "0.25rem",
                          fontWeight: 700,
                          fontSize: "0.875rem",
                        }}
                      >
                        Offical
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <CustomLink
                    sx={{ fontSize: "0.875rem" }}
                    href="/store/1"
                    component={LinkComponent.outlinedButton}
                  >
                    Xem cửa hàng
                  </CustomLink>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "1rem",
                  padding: "1rem",
                  bgcolor: "white",
                  width: "100%",
                }}
              >
                <ProductSwiper
                  data={product.relatedProducts}
                  title="Các sản phẩm liên quan"
                />
              </Box>
              <Box
                sx={{
                  marginTop: "1rem",
                  padding: "2rem",
                  bgcolor: "white",
                  width: "100%",
                }}
              >
                <Typography
                  variant={"h4"}
                  fontSize={"1.125rem"}
                  fontWeight={700}
                >
                  Mô tả sản phẩm
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  sx={{
                    h3: { fontSize: "1rem" },
                    p: { fontSize: "0.875rem" },
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: showDesc,
                    WebkitBoxOrient: "vertical",
                  }}
                />
                <Box
                  sx={{
                    marginTop: "1rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleToggleDesc}
                    sx={{ textTransform: "unset" }}
                  >
                    {showDesc === SHOW_DESC ? "Ẩn bớt" : "Xem thêm"}
                  </Button>
                </Box>
              </Box>
              {categoriesData && <Footer data={categoriesData} />}
            </Wrapper>
            <BottomBar>
              <ProductBottomNavbar
                onClick={() => setShowMobileOptionDrawer(true)}
              />
            </BottomBar>
          </Box>
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
            categoriesRefetch();
          }}
          type={MessageType.ERROR}
          title="Oops! Đã có lỗi xảy ra"
          message="Đã có lỗi xảy ra trong quá trình tải dữ liệu. Vui lòng thử lại."
        />
      </Container>
    )
  );
};

export default ProductPage;
