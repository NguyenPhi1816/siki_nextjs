import { Box } from "@mui/material";

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  return <Box>{params.slug}</Box>;
};

export default CategoryPage;
