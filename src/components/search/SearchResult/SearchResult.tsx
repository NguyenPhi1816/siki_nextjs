"use client";
import { Autocomplete, Paper } from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import SearchResultItem from "../SearchResultItem";
import { useAppSelector } from "../../../../lib/hooks";
import { selectIsMobileScreen } from "../../../../lib/feartures/ui/uiSlice";

export enum searchTypes {
  SEARCH_KEYWORD,
  SEARCH_HISTORY,
}

const searchKeywords = [
  { id: 1, label: "điện thoại", type: searchTypes.SEARCH_KEYWORD },
  { id: 2, label: "áo sơ mi", type: searchTypes.SEARCH_KEYWORD },
  { id: 3, label: "đồ chơi trẻ em", type: searchTypes.SEARCH_KEYWORD },
  { id: 4, label: "máy ảnh", type: searchTypes.SEARCH_KEYWORD },
  { id: 5, label: "đèn trang trí", type: searchTypes.SEARCH_KEYWORD },
  { id: 6, label: "quần áo", type: searchTypes.SEARCH_KEYWORD },
  { id: 7, label: "giày thể thao", type: searchTypes.SEARCH_KEYWORD },
  { id: 8, label: "đồng hồ", type: searchTypes.SEARCH_KEYWORD },
  { id: 9, label: "túi xách", type: searchTypes.SEARCH_KEYWORD },
  { id: 10, label: "laptop", type: searchTypes.SEARCH_KEYWORD },
  { id: 11, label: "đèn ngủ", type: searchTypes.SEARCH_KEYWORD },
  { id: 12, label: "mũ bảo hiểm", type: searchTypes.SEARCH_KEYWORD },
  { id: 13, label: "máy giặt", type: searchTypes.SEARCH_KEYWORD },
  { id: 14, label: "bàn làm việc", type: searchTypes.SEARCH_KEYWORD },
  { id: 15, label: "máy sưởi", type: searchTypes.SEARCH_KEYWORD },
  { id: 16, label: "tủ lạnh", type: searchTypes.SEARCH_KEYWORD },
  { id: 17, label: "dép", type: searchTypes.SEARCH_KEYWORD },
  { id: 18, label: "áo khoác", type: searchTypes.SEARCH_KEYWORD },
  { id: 19, label: "đồ trang điểm", type: searchTypes.SEARCH_KEYWORD },
  { id: 20, label: "đèn led", type: searchTypes.SEARCH_KEYWORD },
  { id: 21, label: "tivi", type: searchTypes.SEARCH_KEYWORD },
  { id: 22, label: "máy làm sữa hạt", type: searchTypes.SEARCH_KEYWORD },
  { id: 23, label: "gối ôm", type: searchTypes.SEARCH_KEYWORD },
  { id: 24, label: "balo du lịch", type: searchTypes.SEARCH_KEYWORD },
  { id: 25, label: "máy xay sinh tố", type: searchTypes.SEARCH_KEYWORD },
  { id: 26, label: "bàn ăn", type: searchTypes.SEARCH_KEYWORD },
  { id: 27, label: "nồi cơm điện", type: searchTypes.SEARCH_KEYWORD },
  { id: 28, label: "túi du lịch", type: searchTypes.SEARCH_KEYWORD },
  { id: 29, label: "đồ chơi người lớn", type: searchTypes.SEARCH_KEYWORD },
  { id: 30, label: "bộ ga giường", type: searchTypes.SEARCH_KEYWORD },
  { id: 31, label: "áo len", type: searchTypes.SEARCH_KEYWORD },
  { id: 32, label: "váy đầm", type: searchTypes.SEARCH_KEYWORD },
  { id: 33, label: "tủ quần áo", type: searchTypes.SEARCH_KEYWORD },
  { id: 34, label: "máy lọc không khí", type: searchTypes.SEARCH_KEYWORD },
  { id: 35, label: "máy sấy tóc", type: searchTypes.SEARCH_KEYWORD },
  { id: 36, label: "đèn pin", type: searchTypes.SEARCH_KEYWORD },
  { id: 37, label: "quần áo thể thao", type: searchTypes.SEARCH_KEYWORD },
  { id: 38, label: "mũ len", type: searchTypes.SEARCH_KEYWORD },
  { id: 39, label: "loa bluetooth", type: searchTypes.SEARCH_KEYWORD },
  { id: 40, label: "ví nam", type: searchTypes.SEARCH_KEYWORD },
];

const _searchHistory = [
  { id: 41, label: "đèn nến", type: searchTypes.SEARCH_HISTORY },
  { id: 42, label: "bàn phím cơ", type: searchTypes.SEARCH_HISTORY },
  { id: 43, label: "máy chiếu", type: searchTypes.SEARCH_HISTORY },
  { id: 44, label: "gương trang điểm", type: searchTypes.SEARCH_HISTORY },
  { id: 45, label: "máy đánh bóng", type: searchTypes.SEARCH_HISTORY },
  { id: 46, label: "đồ trang sức", type: searchTypes.SEARCH_HISTORY },
  { id: 47, label: "nón bảo hiểm", type: searchTypes.SEARCH_HISTORY },
  { id: 48, label: "tấm lót chuột", type: searchTypes.SEARCH_HISTORY },
  { id: 49, label: "đồng hồ treo tường", type: searchTypes.SEARCH_HISTORY },
  { id: 50, label: "máy hút bụi", type: searchTypes.SEARCH_HISTORY },
];

interface SearchResultProps {
  sx?: any;
  renderInput: (params: any) => React.ReactNode;
}

const SearchResult: React.FC<SearchResultProps> = ({ sx, renderInput }) => {
  const [searchHistory, setSearchHistory] = useState(_searchHistory);
  const isMobileScreen = useAppSelector(selectIsMobileScreen);

  const ref = useRef<HTMLDivElement>();
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  useLayoutEffect(() => {
    const rect = ref?.current?.getBoundingClientRect();
    if (rect) {
      setTop(rect.top);
      setLeft(rect.left);
    }
  });

  const removeSearchHistoryItem = (id: number) => {
    setSearchHistory(searchHistory.filter((item) => item.id !== id));
  };

  return (
    <Autocomplete
      ref={ref}
      disablePortal
      id="combo-box-demo"
      options={[...searchHistory.slice(0, 5), ...searchKeywords.slice(0, 20)]}
      renderOption={(props, option) => (
        <SearchResultItem
          key={option.id}
          option={option}
          props={props}
          onRemoveItem={removeSearchHistoryItem}
        />
      )}
      PaperComponent={(props) => (
        <Paper
          sx={
            isMobileScreen
              ? {
                  width: "100vw",
                  height: "calc(100vh - 56px)",
                  transform: `translate(-${left}px, ${top}px)`,
                  "& ul": {
                    height: "100%!important",
                    maxHeight: "100%!important",
                  },
                }
              : {
                  height: "70vh",
                  "& ul": {
                    height: "100%!important",
                    maxHeight: "100%!important",
                  },
                }
          }
          {...props}
        />
      )}
      sx={{ ...sx }}
      renderInput={renderInput}
    />
  );
};

export default SearchResult;
