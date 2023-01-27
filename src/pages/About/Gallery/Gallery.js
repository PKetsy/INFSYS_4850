import React from "react";
import "./Gallery.css";

import galleryImage1 from "../../../assets/galleryImage1.jpg";
import galleryImage2 from "../../../assets/galleryImage2.jpg";
import galleryImage3 from "../../../assets/galleryImage3.jpg";
import galleryImage4 from "../../../assets/galleryImage4.jpg";
import galleryImage5 from "../../../assets/galleryImage5.jpg";
import galleryImage6 from "../../../assets/galleryImage6.jpg";
import galleryImage7 from "../../../assets/galleryImage7.jpg";
import galleryImage8 from "../../../assets/galleryImage8.jpg";
import galleryImage9 from "../../../assets/galleryImage9.jpg";
import galleryImage10 from "../../../assets/galleryImage10.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery__item-gallery__item-1">
        <img
          src={galleryImage1}
          alt="fishing trip 1"
          className="gallery__img"
        />
      </figure>

      <figure className="gallery__item-gallery__item-2">
        <img src={galleryImage2} alt="products" className="gallery__img" />
      </figure>

      <figure className="gallery__item-gallery__item-3">
        <img src={galleryImage3} alt="stone statues" className="gallery__img" />
      </figure>

      <figure className="gallery__item-gallery__item-4">
        <img
          src={galleryImage4}
          alt="chocolate strawberries"
          className="gallery__img"
        />
      </figure>

      <figure className="gallery__item-gallery__item-5">
        <img
          src={galleryImage5}
          alt="farm fresh eggs"
          className="gallery__img"
        />
      </figure>

      <figure className="gallery__item-gallery__item-6">
        <img src={galleryImage6} alt="fazios bread" className="gallery__img" />
      </figure>

      <figure className="gallery__item-gallery__item-7">
        <img src={galleryImage7} alt="seasonings" className="gallery__img" />
      </figure>

      <figure className="gallery__item-gallery__item-8">
        <img src={galleryImage8} alt="firewood" className="gallery__img" />
      </figure>

      <figure className="gallery__item-gallery__item-9">
        <img
          src={galleryImage9}
          alt="freezer products"
          className="gallery__img"
        />
      </figure>

      <figure className="gallery__item-gallery__item-10">
        <img
          src={galleryImage10}
          alt="fresh oysters"
          className="gallery__img"
        />
      </figure>
    </div>
  );
};

export default Gallery;
