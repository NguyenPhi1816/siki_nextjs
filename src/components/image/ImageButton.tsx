import { Button, SxProps } from "@mui/material";
import Image from "next/image";

interface IImageButton {
  sx?: SxProps;
  url: string;
  alt: string;
  selected?: boolean;
  onClick: () => void;
}

const ImageButton: React.FC<IImageButton> = ({
  sx,
  url,
  alt,
  selected,
  onClick,
}) => {
  return (
    <Button
      sx={{
        padding: 0,
        width: "var(--product-page-slide-image)",
        height: "var(--product-page-slide-image)",
        borderRadius: 1,
        overflow: "hidden",
        border: selected ? "3px solid var(--outline-primary-pink)" : "none",
        ...sx,
      }}
      onClick={onClick}
    >
      <Image
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={url}
        alt={alt}
        width={100}
        height={100}
      />
    </Button>
  );
};

export default ImageButton;
