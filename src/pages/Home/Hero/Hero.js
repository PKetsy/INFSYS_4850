import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-img container">
      <div className="hero-content">
        <h1 className="heading-primary">
          <span>The Fruit Stand & Seafood</span>
        </h1>
        <p className="text-white">Fresh produce and seafood! </p>
        <p className="text-white">
          Check out our amazing products!{" "}
          <span className="special-word">(636)-386-5050</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
