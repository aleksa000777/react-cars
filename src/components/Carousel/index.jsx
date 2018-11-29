import React from "react";
import Slider from "react-slick";
import defaultCar from "../../images/defaultCar.png";

const Carousel = ({ imageLocationList = [], make, model }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const getImgKey = url => {
    const arr = url.split(".");
    return arr[arr.length - 2];
  };

  const addDefaultSrc = ev => {
    const img = ev;
    img.target.src = defaultCar;
  };

  return (
    <Slider {...settings}>
      {imageLocationList.map(url => (
        <div
          className="selectImage"
          key={getImgKey(url)}
          role="menuitem"
          tabIndex={0}
        >
          <img onError={addDefaultSrc} alt={`${make} ${model}`} src={url} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;