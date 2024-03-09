import { Clear, Search } from "@mui/icons-material";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { button, icon, leftSide, link, wrapper } from "./styles";
import { searchTypes } from "../SearchResult/SearchResult";
import { default as NextLink } from "next/link";

interface SearchResultItemProps {
  props: any;
  option: any;
  onRemoveItem: (id: number) => void;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  props,
  option,
  onRemoveItem,
}) => {
  const { key, ...restProps } = props;

  const handleRemoveItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    e.preventDefault();
    onRemoveItem(id);
  };

  return (
    <li key={key} {...restProps}>
      <Link
        component={NextLink}
        href={`search?q=${option.label}`}
        underline="none"
        sx={link}
      >
        <Box component="div" sx={wrapper}>
          <Box component="div" sx={leftSide}>
            <Search sx={{ mr: 1, ...icon }} />
            <Typography variant="body1">{option.label}</Typography>
          </Box>
          {option.type === searchTypes.SEARCH_HISTORY ? (
            <IconButton
              sx={button}
              onClick={(e) => handleRemoveItem(e, option.id)}
            >
              <Clear sx={icon} fontSize="small" />
            </IconButton>
          ) : (
            <Box sx={button} />
          )}
        </Box>
      </Link>
    </li>
  );
};

export default SearchResultItem;
