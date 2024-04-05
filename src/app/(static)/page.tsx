"use client";
import ProductSwiper from "@/components/product/ProductSwiper";
import ProductTabPanel from "@/components/product/ProductTabPanel";
import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import ProductSwiperSkeleton from "@/components/product/ProductSwiperSkeleton";
import ProductTabPanelSkeleton from "@/components/product/ProductTabPanelSkeleton";
import MessageModal, { MessageType } from "@/components/modal/MessageModal";
import Wrapper from "@/components/wrapper/Wrapper";
import { useGetRecommendationsQuery } from "../../../lib/feartures/product/productSlice";
import { useGetCategoriesQuery } from "../../../lib/feartures/category/categorySlice";
import SidebarSkeleton from "@/components/sidebar/SidebarSkeleton";

export default function Home() {
  const {
    refetch: recommendationsRefetch,
    data: recommendationsData,
    error: recommendationsError,
    isLoading: isRecommendationsLoading,
  } = useGetRecommendationsQuery();

  const {
    refetch: categoriesRefetch,
    data: categoriesData,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery();

  !isRecommendationsLoading && console.log(recommendationsData);

  return (
    <>
      {!categoriesError && !recommendationsError && (
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
            {!isRecommendationsLoading ? (
              !!recommendationsData && (
                <>
                  {recommendationsData
                    .slice(1, recommendationsData.length)
                    .map((item) => (
                      <ProductSwiper
                        key={item.id}
                        title={item.storeName}
                        data={item.products}
                        sx={{ marginBottom: 2 }}
                      />
                    ))}
                  <ProductTabPanel
                    data={recommendationsData}
                    sx={{ marginBottom: 2 }}
                  />
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
            {categoriesData && <Footer data={categoriesData} />}
          </Box>
        </Wrapper>
      )}
      <MessageModal
        type={MessageType.ERROR}
        title="Oops! Đã có lỗi xảy ra"
        message="Có lỗi xảy ra trong quá trình tải dữ liệu. Vui lòng thử lại"
        open={!!categoriesError || !!recommendationsError}
        onClose={() => {
          if (!!recommendationsError) recommendationsRefetch();
          if (!!categoriesError) categoriesRefetch();
        }}
      />
    </>
  );
}
