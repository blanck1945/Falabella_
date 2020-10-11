import * as React from "react";
import { photoArr, Photo } from "../../../utils/photoArr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Carrousel_Page.scss";
import { Link } from "react-router-dom";

const Carrousel_Page = () => {
  const [photo, setPhoto] = React.useState<number>(0);
  const [value, setValue] = React.useState<number>(0);

  const changeImg = (e: any) => {
    setValue(e);
  };

  return (
    <>
      <Carousel
        arrows={true}
        infinite
        autoPlay={7000}
        slides={[
          <LazyLoadImage
            defaultValue={1}
            src={photoArr[0].default}
            alt="img"
            className="carrousel_img"
          />,
          <Link to="/mobile_app">
            <LazyLoadImage
              defaultValue={2}
              src={photoArr[1].default}
              alt="img"
              className="carrousel_img"
            />
            ,
          </Link>,
        ]}
        value={value}
        onChange={(e) => changeImg(e)}
        animationSpeed={2500}
        stopAutoPlayOnHover
      />
      <div className="photo_index">
        <BsCircle
          className={value === 0 ? "photo_icon fala" : "photo_icon"}
          onClick={() => setValue(0)}
        />
        <BsCircle
          className={value === 1 ? "photo_icon fala" : "photo_icon"}
          onClick={() => setValue(1)}
        />
        <BsCircle
          className={value === 2 ? "photo_icon fala" : "photo_icon"}
          onClick={() => setValue(2)}
        />
        <BsCircle
          className={value === 3 ? "photo_icon fala" : "photo_icon"}
          onClick={() => setValue(3)}
        />
        <BsCircle className="photo_icon" />
      </div>
    </>
  );
};

export default Carrousel_Page;

/*
  <IoIosArrowBack className="arrow_icon" />
        {photoArr.map((el: Photo) => (
          <LazyLoadImage
            src={el.default}
            alt="Carrousel"
            key={el.default}
            className="carrousel_img"
          />
        ))}
        <IoIosArrowForward className="arrow_icon_right" />
         arrowLeft={<IoIosArrowBack className="arrow_icon" name="arrow-left" />}
        */
