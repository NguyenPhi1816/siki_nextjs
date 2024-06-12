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
import {
  useGetHomeQuery,
  useGetProductsByCategoryIdQuery,
} from "../../../lib/feartures/product/productApi";
import {
  useGetByNameQuery,
  useGetCategoriesQuery,
} from "../../../lib/feartures/category/categoryApi";
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
import { useGetAdvertisementQuery } from "../../../lib/feartures/advertisement/advertisementApi";
import Advertisement from "@/components/advertisement/Advertisement";
import AdvertisementSkeleton from "@/components/advertisement/AdvertisementSkeleton";
import { selectTokens } from "../../../lib/feartures/auth/authSlice";
import ProductList from "../product/ProductList";

interface ICategoryPage {
  slug: string;
  id: string;
}

const Category: React.FC<ICategoryPage> = ({ slug, id }) => {
  const {
    refetch: categoriesRefetch,
    data: categoriesData,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useGetByNameQuery(slug);

  //   const dispatch: Dispatch = useAppDispatch();
  //   const closeAction = useAppSelector(selectCloseAction);

  const {
    refetch: productsRefetch,
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsByCategoryIdQuery(id);

  console.log(id, productsData);

  const {
    refetch: advertisementRefetch,
    data: advertisementData,
    error: advertisementError,
    isLoading: isAdvertisementLoading,
  } = useGetAdvertisementQuery();

  //   useEffect(() => {
  //     if (categoriesError || homeError || advertisementError) {
  //       const messageData: IMessageModalData = {
  //         type: MessageType.ERROR,
  //         title: "Oops! Đã có lỗi xảy ra",
  //         message: "Có lỗi xảy ra trong quá trình tải dữ liệu. Vui lòng thử lại",
  //       };
  //       dispatch(
  //         openModal({ modalType: ModalType.message, modalProps: messageData })
  //       );
  //     }
  //   }, [categoriesError, homeError, advertisementError]);

  //   useEffect(() => {
  //     if (closeAction === CloseAction.refetchData) {
  //       if (homeError) homeRefetch();
  //       if (categoriesError) categoriesRefetch();
  //       if (advertisementError) advertisementRefetch();
  //       dispatch(resetCloseAction());
  //     }
  //   }, [closeAction, categoriesError, homeError, advertisementError]);

  return (
    <>
      {/* {!categoriesError && !homeError && !advertisementError && ( */}
      <Wrapper
        sx={{
          display: "flex",
        }}
      >
        {!isCategoriesLoading ? (
          !!categoriesData && (
            <Sidebar data={categoriesData.categoryChildrens} />
          )
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
          {!isAdvertisementLoading ? (
            advertisementData && <Advertisement data={advertisementData.data} />
          ) : (
            <AdvertisementSkeleton />
          )}

          {productsData && productsData.length > 0 && (
            <ProductList data={productsData} />
          )}
          <Footer />
        </Box>
      </Wrapper>
    </>
  );
};

export default Category;
