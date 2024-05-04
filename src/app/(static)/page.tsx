"use client";
import ProductSwiper from "@/components/product/ProductSwiper";
import ProductTabPanel from "@/components/product/ProductTabPanel";
import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import ProductSwiperSkeleton from "@/components/product/ProductSwiperSkeleton";
import ProductTabPanelSkeleton from "@/components/product/ProductTabPanelSkeleton";
import {
  IMessageModalData,
  MessageType,
} from "@/components/modal/MessageModal";
import Wrapper from "@/components/wrapper/Wrapper";
import { useGetHomeQuery } from "../../../lib/feartures/product/productSlice";
import { useGetCategoriesQuery } from "../../../lib/feartures/category/categorySlice";
import SidebarSkeleton from "@/components/sidebar/SidebarSkeleton";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  CloseAction,
  ModalType,
  openModal,
  resetCloseAction,
  selectCloseAction,
} from "../../../lib/feartures/modal/modalSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { useGetPromotionsQuery } from "../../../lib/feartures/promotion/promotionSlice";
import Promotion from "@/components/promotion/Promotion";

export default function Home() {
  const dispatch: Dispatch = useAppDispatch();
  const closeAction = useAppSelector(selectCloseAction);

  const {
    refetch: homeRefetch,
    data: homeData,
    error: homeError,
    isLoading: isHomeLoading,
  } = useGetHomeQuery();

  const {
    refetch: categoriesRefetch,
    data: categoriesData,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery();

  const {
    refetch: promotionRefetch,
    data: promotionData,
    error: promotionError,
    isLoading: isPromotionLoading,
  } = useGetPromotionsQuery();

  useEffect(() => {
    if (categoriesError || homeError) {
      const messageData: IMessageModalData = {
        type: MessageType.ERROR,
        title: "Oops! Đã có lỗi xảy ra",
        message: "Có lỗi xảy ra trong quá trình tải dữ liệu. Vui lòng thử lại",
      };
      dispatch(
        openModal({ modalType: ModalType.message, modalProps: messageData })
      );
    }
  }, [categoriesError, homeError]);

  useEffect(() => {
    if (closeAction === CloseAction.refetchData) {
      if (homeError) homeRefetch();
      if (categoriesError) categoriesRefetch();
      dispatch(resetCloseAction());
    }
  }, [closeAction, categoriesError, homeError]);

  return (
    <>
      {!categoriesError && !homeError && (
        <Wrapper
          sx={{
            display: "flex",
            overflow: "hidden",
          }}
        >
          {!isCategoriesLoading ? (
            !!categoriesData && <Sidebar data={categoriesData} />
          ) : (
            <SidebarSkeleton />
          )}
          <Box
            sx={{
              marginTop: "1rem",
              flex: 1,
              height: "100%",
              overflowY: "scroll",
            }}
          >
            {!isPromotionLoading && !!promotionData && (
              <Promotion data={promotionData.data} />
            )}
            {!isHomeLoading ? (
              !!homeData && (
                <>
                  {homeData.slice(1, homeData.length).map((item) => (
                    <ProductSwiper
                      key={item.id}
                      title={item.name}
                      data={item.products}
                      sx={{ marginBottom: 2 }}
                    />
                  ))}
                  <ProductTabPanel data={homeData} sx={{ marginBottom: 2 }} />
                </>
              )
            ) : (
              <>
                {[0, 1, 2, 3].map((item) => (
                  <ProductSwiperSkeleton key={item} />
                ))}
                <ProductTabPanelSkeleton />
              </>
            )}
            <Footer />
          </Box>
        </Wrapper>
      )}
    </>
  );
}
