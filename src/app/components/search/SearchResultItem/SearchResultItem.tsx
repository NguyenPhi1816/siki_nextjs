import { Search } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface SearchResultItemProps {
  props: any;
  option: any;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  props,
  option,
}) => {
  const { key, ...restProps } = { ...props };
  return (
    <li key={key} {...restProps}>
      <Search />
      <Typography variant="body1">{option.label}</Typography>
    </li>
  );
};

export default SearchResultItem;
