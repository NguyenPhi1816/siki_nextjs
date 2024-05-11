import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsMobile } from "../../../lib/feartures/ui/uiSlice";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { IAdvertisement } from "@/types/advertisement";

interface IAdvertisementComponent {
  data: IAdvertisement[];
}

const Advertisement: React.FC<IAdvertisementComponent> = ({ data }) => {
  const isMobile = useAppSelector(selectIsMobile);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        marginBottom: "1rem",
        bgcolor: "var(--bg-white)",
        borderRadius: 1,
      }}
    >
      <Swiper
        slidesPerView={!isMobile ? 2 : 1}
        slidesPerGroup={!isMobile ? 2 : 1}
        spaceBetween={10}
        pagination={{
          el: ".swiper-custom-pagination",
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "var(--white)",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
              src={item.image}
              alt="feedback image"
              width={500}
              height={500}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            width: "fit-content",
          }}
          className="swiper-custom-pagination"
        />
      </Box>
    </Box>
  );
};

export default Advertisement;
