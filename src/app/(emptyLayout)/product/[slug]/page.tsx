"use client";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Wrapper from "@/components/wrapper/Wrapper";
import {
  IMessageModalData,
  MessageType,
} from "@/components/modal/MessageModal";
import { IBreadcrumb } from "@/types/category";
import { useGetProductsBySlugQuery } from "../../../../../lib/feartures/product/productApi";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../../../lib/feartures/ui/uiSlice";
import Topbar from "@/components/navbar/TopBar";
import ProductNavbar from "@/components/navbar/components/topbar/ProductNavbar";
import DefaultTopNavbar from "@/components/navbar/components/topbar/DefaultTopNavbar";
import Footer from "@/components/footer/Footer";
import ProductSwiper from "@/components/product/ProductSwiper";
import BreadcrumbContainer from "@/components/breadcrumb/BreadcrumbContainer";
import { Dispatch } from "@reduxjs/toolkit";
import {
  CloseAction,
  ModalType,
  openModal,
  resetCloseAction,
  selectCloseAction,
} from "../../../../../lib/feartures/modal/modalSlice";
import ProductDetail from "@/components/product/pageComponents/ProductDetail";
import ProductStore from "@/components/product/pageComponents/ProductStore";
import ProductDesc from "@/components/product/pageComponents/ProductDesc";
import ProductFeedback from "@/components/product/pageComponents/ProductFeedback";
import PageSection from "@/components/wrapper/PageSection";

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
  const dispatch: Dispatch = useAppDispatch();
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);
  const closeAction = useAppSelector(selectCloseAction);

  const {
    refetch: productRefetch,
    data: product,
    error: productError,
    isLoading: isProductLoading,
  } = useGetProductsBySlugQuery(params.slug);

  console.log(product);

  useEffect(() => {
    if (productError) {
      const messageData: IMessageModalData = {
        type: MessageType.ERROR,
        title: "Oops! Đã có lỗi xảy ra",
        message: "Có lỗi xảy ra trong quá trình tải dữ liệu. Vui lòng thử lại",
      };
      dispatch(
        openModal({ modalType: ModalType.message, modalProps: messageData })
      );
    }
  }, [productError]);

  useEffect(() => {
    if (closeAction === CloseAction.refetchData) {
      if (productError) productRefetch();
      dispatch(resetCloseAction());
    }
  }, [closeAction, productError]);

  return (
    isAppLoaded && (
      <>
        {!productError && product && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <Topbar>
              {isMobile ? <ProductNavbar /> : <DefaultTopNavbar />}
            </Topbar>
            <Wrapper disableScroll={true}>
              {/* {!isMobile && (
                <Box sx={{ margin: "0.5rem 0" }}>
                  <BreadcrumbContainer data={breadcrumb} />
                </Box>
              )} */}
              <PageSection>
                <ProductDetail
                  data={product}
                  isLoading={isProductLoading}
                  spid={searchParams.spid}
                />
              </PageSection>
              <PageSection sx={{ padding: !isMobile ? "1rem 2rem" : "1rem" }}>
                <ProductStore data={product} />
              </PageSection>
              <PageSection sx={{ padding: !isMobile ? "1rem" : "0" }}>
                <ProductSwiper
                  data={product.relatedProducts}
                  title="Các sản phẩm liên quan"
                />
              </PageSection>
              <PageSection sx={{ padding: !isMobile ? "2rem" : "1rem" }}>
                <ProductDesc content={product.description} />
              </PageSection>
              <PageSection sx={{ padding: !isMobile ? "2rem" : "1rem" }}>
                <ProductFeedback slug={params.slug} />
              </PageSection>
            </Wrapper>
            <Footer />
          </Box>
        )}
      </>
    )
  );
};

export default ProductPage;
