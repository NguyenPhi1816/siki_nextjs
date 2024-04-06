"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Rating,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../lib/hooks";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectIsMobile } from "../../../../../lib/feartures/ui/uiSlice";
import { Navigation } from "swiper/modules";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import { currencyFormat } from "@/components/numberFormat/currency";
import ProductOptionPanel from "@/components/product/ProductOptionPanel";
import Wrapper from "@/components/wrapper/Wrapper";
import MessageModal, { MessageType } from "@/components/modal/MessageModal";
import {
  IProductAttributeValue,
  IProductImage,
  IProductVariant,
} from "@/types/types";
import { useRouter } from "next/navigation";
import { useGetProductsBySlugQuery } from "../../../../../lib/feartures/product/productSlice";

const ProductPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { spid: string };
}) => {
  const router = useRouter();
  const isMobile = useAppSelector(selectIsMobile);
  const {
    refetch,
    data: product,
    error,
    isLoading,
  } = useGetProductsBySlugQuery(params.slug);
  const [mainImage, setMainImage] = useState<IProductImage | null>(null);
  const [selectedProductVariant, setSelectedProductVariant] =
    useState<IProductVariant | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    IProductAttributeValue[]
  >([]);

  useEffect(() => {
    if (product) {
      const selectedProductVariant = product.productVariants.find(
        (item) => item.id === Number.parseInt(searchParams.spid)
      );
      if (selectedProductVariant) {
        setSelectedProductVariant(selectedProductVariant);
      }
    }
  }, [product]);

  useEffect(() => {
    if (selectedProductVariant) {
      const mainImage = selectedProductVariant.productImages.find(
        (image) => image.isDefault
      );
      if (mainImage) setMainImage(mainImage);
      setSelectedOptions(selectedProductVariant.productAttributeValues);
    }
  }, [selectedProductVariant]);

  const handleChangeImage = (image: IProductImage) => {
    setMainImage(image);
  };

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
  }, [product, selectedOptions]);

  return (
    <>
      {!error && (
        <Wrapper sx={{ bgcolor: "white", display: "flex" }}>
          {!isLoading ? (
            <Box
              sx={{
                padding: "2rem",
              }}
            >
              <Box
                sx={{
                  marginBottom: "0.5rem",
                  width: "var(--product-page-main-image)",
                  height: "var(--product-page-main-image)",
                }}
              >
                {mainImage && (
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={mainImage.url}
                    alt="image product"
                    width={500}
                    height={500}
                    priority
                  />
                )}
              </Box>
              <Box sx={{ width: "var(--product-page-main-image)" }}>
                <Swiper
                  slidesPerGroup={4}
                  slidesPerView={4}
                  spaceBetween={10}
                  navigation={!isMobile}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {selectedProductVariant?.productImages.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Button
                        onClick={() => handleChangeImage(item)}
                        sx={{
                          width: "var(--product-page-slide-image)",
                          height: "var(--product-page-slide-image)",
                        }}
                      >
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={item.url}
                          alt="image product"
                          width={200}
                          height={200}
                        />
                      </Button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                padding: "2rem 0",
                width: "var(--product-page-main-image)",
              }}
            >
              <Skeleton
                variant="rectangular"
                sx={{
                  marginBottom: "0.5rem",
                  width: "var(--product-page-main-image)",
                  height: "var(--product-page-main-image)",
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {new Array(4).fill(0).map((item, i) => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    sx={{
                      width: "var(--product-page-slide-image)",
                      height: "var(--product-page-slide-image)",
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
          {!isLoading ? (
            <Box sx={{ padding: "2rem", flex: 1 }}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1.25rem",
                    minHeight: "2.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    marginBottom: ".5rem",
                  }}
                >
                  {product?.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "var(--text-grey)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ fontSize: "1rem", marginRight: "0.25rem" }}
                    >
                      {product?.rating}
                    </Typography>
                    <Rating
                      name="read-only"
                      size="small"
                      value={product?.rating}
                      readOnly
                    />
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ margin: "0 1rem" }}
                  />
                  <Typography variant="body2" component="p">
                    {product?.numberOfReviews} Đánh giá
                  </Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ margin: "0 1rem" }}
                  />
                  <Typography variant="body2" component="p">
                    {product?.numberOfPurchases} Lượt bán
                  </Typography>
                </Box>
                <Box sx={{ padding: "15px 0", color: "var(--pink-primary)" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "1.875rem", fontWeight: 700 }}
                  >
                    {currencyFormat(selectedProductVariant?.price!)}
                  </Typography>
                </Box>
                {product?.productAttributeSet.productAttributes.map((item) => (
                  <ProductOptionPanel
                    key={item.id}
                    name={item.name}
                    productOptions={item.productAttributeValues}
                    defaultValue={
                      selectedProductVariant?.productAttributeValues.find(
                        (value) => value.attributeId === item.id
                      )!
                    }
                    sx={{ marginBottom: "0.5rem" }}
                    onOptionChange={handleChangeOption}
                  />
                ))}
                <Grid
                  container
                  sx={{ margin: "1rem 0", color: "var(--text-grey)" }}
                >
                  <Grid item xs={2}>
                    <Typography variant="body2" component="p">
                      Số lượng
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          marginRight: "1rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <IconButton
                          sx={{
                            width: "2rem",
                            height: "2rem",
                            border: "1px solid var(--grey)",
                            borderRadius: 0,
                          }}
                        >
                          <Remove />
                        </IconButton>
                        <TextField
                          sx={{
                            "& input": {
                              p: 0,
                              width: "3.125rem",
                              height: "2rem",
                              textAlign: "center",
                              borderRadius: 0,
                            },
                            "& fieldset": {
                              borderRadius: 0,
                            },
                          }}
                          value={1}
                        />
                        <IconButton
                          sx={{
                            width: "2rem",
                            height: "2rem",
                            border: "1px solid var(--grey)",
                            borderRadius: 0,
                          }}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                      <Typography variant="body2" component="p">
                        6520 sản phẩm có sẵn
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  <Button
                    variant="outlined"
                    sx={{
                      marginRight: "1rem",
                      height: "3rem",
                      padding: "0.75rem 1.5rem",
                    }}
                  >
                    <AddShoppingCart />
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ textTransform: "none" }}
                    >
                      Thêm vào giỏ hàng
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ height: "3rem", padding: "0.75rem 1.5rem" }}
                  >
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        textTransform: "none",
                        color: "var(--white)",
                        boxShadow: 0,
                      }}
                    >
                      Mua ngay
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={{ padding: "2rem", flex: 1 }}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "var(--text-grey)",
                }}
              >
                <Skeleton width={"7rem"} />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "0 1rem" }}
                />
                <Skeleton width={"7rem"} />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "0 1rem" }}
                />
                <Skeleton width={"7rem"} />
              </Box>
            </Box>
          )}
        </Wrapper>
      )}
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
  );
};

export default ProductPage;
