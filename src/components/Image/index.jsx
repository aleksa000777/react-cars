import React from "react";
import defaultCar from "../../images/defaultCar.png";

const Image = ({ alt, src, className }) => {
  const addDefaultSrc = ev => {
    const img = ev;
    img.target.src = defaultCar;
  };

  return (
    <img onError={addDefaultSrc} alt={alt} src={src} className={className} />
  );
};

export default Image;
