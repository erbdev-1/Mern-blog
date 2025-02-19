import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      lqip={{ active: true, quality: 20 }}
      loading="lazy"
      className={className}
      width={w}
      height={h}
      alt={alt}
    />
  );
};

export default Image;
