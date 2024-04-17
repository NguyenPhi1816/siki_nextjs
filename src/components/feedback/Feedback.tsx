import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FeedbackImages from "./FeedbackImages";

const Feedback = () => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardContent sx={{ display: "flex" }}>
        <Box>
          <Avatar alt="User Feedback" src="" />
        </Box>
        <Box sx={{ margin: "0 1rem", flex: 1 }}>
          <Box sx={{ color: "var(--text-grey)" }}>
            <Typography sx={{ fontSize: "0.75rem" }}>User name</Typography>
            <Rating name="read-only" size="small" value={5} readOnly />
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: "0.75rem" }}>
                2023-09-12 12:11
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 0.25rem" }}
              />
              <Typography sx={{ fontSize: "0.75rem" }}>
                Phân loại hàng: Lưới Vân Rồng Đen
              </Typography>
            </Box>
            <Box sx={{ margin: "1rem 0" }}>
              <Typography sx={{ fontSize: "0.875rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                natus commodi numquam repellendus alias officia, temporibus, a
                dicta voluptate praesentium, facilis earum minima recusandae
                explicabo dolorum quibusdam dolores architecto doloribus!
              </Typography>
            </Box>
            <Box>
              <FeedbackImages />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Feedback;
