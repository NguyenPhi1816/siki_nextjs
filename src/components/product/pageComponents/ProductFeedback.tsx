"use client";
import Feedback from "@/components/feedback/Feedback";
import FilterItem from "@/components/feedback/FilterItem";
import { IReview } from "@/types/review";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useGetReviewsQuery } from "../../../../lib/feartures/review/reviewApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface IFeedbackFilterItem {
  id: number;
  content: string;
  value: string;
}

const FEEDBACK_FILTER_LIST: IFeedbackFilterItem[] = [
  { id: 1, content: "5 Sao", value: "ratingStars=5" },
  { id: 2, content: "4 Sao", value: "ratingStars=4" },
  { id: 3, content: "3 Sao", value: "ratingStars=3" },
  { id: 4, content: "2 Sao", value: "ratingStars=2" },
  { id: 5, content: "1 Sao", value: "ratingStars=1" },
  { id: 6, content: "Mới nhất", value: "sortfield=createdAt" },
  { id: 7, content: "Tăng dần", value: "sortDir=asc" },
  { id: 8, content: "Giảm dần", value: "sortDir=desc" },
];

interface IPageButton {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

const PageButton: React.FC<IPageButton> = ({
  children,
  selected = false,
  onClick,
}) => {
  return (
    <Button
      variant="text"
      sx={{
        minWidth: "2.25rem",
        width: "2.25rem",
        height: "2.25rem",
        padding: "0.5rem",
        color: selected ? "var(--text-white)" : "var(--text-black)",
        bgcolor: selected ? "var(--bg-primary-pink)" : "transparent",
        borderRadius: 10,
        ":hover": {
          bgcolor: selected
            ? "var(--bg-primary-pink)"
            : "var(--bg-secondary-pink)",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

interface IProductFeedback {
  slug: string;
}

const ProductFeedback: React.FC<IProductFeedback> = ({ slug }) => {
  const swiperRef = useRef<any>(null);
  const [feedbackFilter, setFeedbackFilter] = useState<IFeedbackFilterItem[]>(
    []
  );
  const [filterTag, setFilterTag] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { refetch, data, error, isLoading } = useGetReviewsQuery({
    slug: slug,
    filterTag: filterTag,
  });

  const handleChangeFilter = (item: IFeedbackFilterItem) => {
    setFeedbackFilter((prev) => {
      const isExist = prev.find((i) => i.id === item.id);
      if (isExist) {
        const newValue = prev.filter((i) => i.id !== item.id);
        return newValue;
      }
      return [...prev, item];
    });
  };

  const handleChangePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (data) {
      setCurrentPage(data.pageNum);
    }
  }, [data]);

  useEffect(() => {
    const initialValue: string[] = [];
    const filter = feedbackFilter.reduce(
      (prevValue, currValue) => [...prevValue, currValue.value],
      initialValue
    );
    const filterTag = filter.join("&");
    setFilterTag(filterTag);
    console.log(filterTag);
  }, [feedbackFilter]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentPage - 2);
    }
    setFeedbackFilter((prev) => {
      const newValue = prev.filter((item) => item.content !== "Page Number");
      const pageNumber: IFeedbackFilterItem = {
        id: 9999,
        content: "Page Number",
        value: `pageNum=${currentPage}`,
      };
      return [...newValue, pageNumber];
    });
  }, [currentPage]);

  return (
    <Box>
      <Typography
        variant={"h4"}
        fontSize={"1.125rem"}
        fontWeight={700}
        paddingBottom={"1rem"}
      >
        Đánh giá sản phẩm
      </Typography>
      <Divider />
      <Box sx={{ p: "1rem 0" }}>
        <Typography variant="body1" fontSize={"0.875rem"}>
          Lọc theo
        </Typography>
        {FEEDBACK_FILTER_LIST.map((item) => (
          <FilterItem
            selected={!!feedbackFilter.find((i) => i.id === item.id)}
            content={item.content}
            key={item.id}
            onClick={() => handleChangeFilter(item)}
          />
        ))}
      </Box>
      <Divider />
      <Box sx={{ marginTop: "1rem" }}>
        {data?.data.map((item) => (
          <Feedback data={item} key={item.id} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <PageButton
          onClick={() => {
            let newPageIndex = currentPage - 1;
            if (newPageIndex < 0) {
              newPageIndex = 0;
            }
            handleChangePageNumber(newPageIndex);
          }}
        >
          <ChevronLeft />
        </PageButton>
        <Box sx={{ margin: "0 0.5rem", width: "13.25rem" }}>
          <Swiper
            slidesPerView={5}
            modules={[Navigation]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {new Array(data?.totalPages).fill(0).map((item, index) => (
              <SwiperSlide key={index}>
                <PageButton
                  selected={index === currentPage}
                  onClick={() => handleChangePageNumber(index)}
                >
                  {index}
                </PageButton>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <PageButton
          onClick={() => {
            const totalPages = data?.totalPages;
            if (totalPages) {
              let newPageIndex = currentPage + 1;
              if (newPageIndex >= data?.totalPages) {
                newPageIndex = data?.totalPages - 1;
              }
              setCurrentPage(newPageIndex);
            }
          }}
        >
          <ChevronRight />
        </PageButton>
      </Box>
    </Box>
  );
};

export default ProductFeedback;
