import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Img_Row.scss";

interface ImgRowProps {
  img1: string;
  img2: string;
  img3: string;
}

const Img_Row = ({ img1, img2, img3 }: ImgRowProps) => {
  return (
    <div className="img_row_box">
      <LazyLoadImage
        src={img1}
        alt="img_row"
        effect="blur"
        className="img_row"
      />
      <LazyLoadImage
        src={img2}
        alt="img_row"
        effect="blur"
        className="img_row"
      />
      <LazyLoadImage
        src={img3}
        alt="img_row"
        effect="blur"
        className="img_row"
      />
    </div>
  );
};

export default Img_Row;
