import { Box } from "@mui/material";
import Image from "next/image";

const FeedbackImage = () => {
  return (
    <Box
      sx={{
        margin: "0.5rem",
        width: "var(--product-page-slide-image)",
        height: "var(--product-page-slide-image)",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Image
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="https://salt.tikicdn.com/cache/w200/ts/review/f6/91/0e/21dad5859e0db9eb6fb9fd5544915595.jpg"
        alt="feedback image"
        width={100}
        height={100}
      />
    </Box>
  );
};

const FeedbackImages = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        {new Array(6).fill(0).map((item, index) => (
          <FeedbackImage key={index} />
        ))}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default FeedbackImages;
