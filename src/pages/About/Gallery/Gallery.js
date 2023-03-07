import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';

import Slider from 'react-slick';

import galleryImage1 from '../../../assets/galleryImage1.jpg';
import galleryImage2 from '../../../assets/galleryImage2.jpg';
import galleryImage3 from '../../../assets/galleryImage3.jpg';
import galleryImage4 from '../../../assets/galleryImage4.jpg';
import galleryImage5 from '../../../assets/galleryImage5.jpg';
import galleryImage6 from '../../../assets/galleryImage6.jpg';
import galleryImage7 from '../../../assets/galleryImage7.jpg';
import galleryImage8 from '../../../assets/galleryImage8.jpg';
import galleryImage9 from '../../../assets/galleryImage9.jpg';
import galleryImage10 from '../../../assets/galleryImage10.jpg';

const Gallery = () => {
  const [items, setItems] = useState([
    { id: 1, url: galleryImage1 },
    { id: 1, url: galleryImage2 },
    { id: 1, url: galleryImage3 },
    { id: 1, url: galleryImage4 },
    { id: 1, url: galleryImage5 },
    { id: 1, url: galleryImage6 },
    { id: 1, url: galleryImage7 },
    { id: 1, url: galleryImage8 },
    { id: 1, url: galleryImage9 },
    { id: 1, url: galleryImage10 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="about-section">
      <div className="container">
        <div className="fresh-container">
          <div className="fresh-carousel">
            <div>
              <Slider {...settings}>
                {items.map((items) => (
                  <div key={items.id}>
                    <img src={items.url} alt="carousel-pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
