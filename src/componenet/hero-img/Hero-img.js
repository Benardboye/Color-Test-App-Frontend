import React from "react";
import "./Hero-img.css";

import { images } from "../../images/index";

export const HeroImg = () => {
  return (
    <div className="hero-img">
      <img src={images.heroImg} alt="" />
    </div>
  );
};
