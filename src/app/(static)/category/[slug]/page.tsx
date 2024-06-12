import Category from "@/components/pages/Category";
import { Box } from "@mui/material";

const CategoryPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { categoryId: string };
}) => {
  return <Category slug={params.slug} id={searchParams.categoryId} />;
};

export default CategoryPage;
