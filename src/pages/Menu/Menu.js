import React from "react";
import MenuImage from "../../components/MenuImage/MenuImage";
import bgImage from "../../assets/MenuBg.jpg";
import OurMostPopular from "./OurMostPopular/OurMostPopular";
import Fruits from "./Fruits/Fruits";
import Vegetables from "./Vegetables/Vegetables";
import Seafood from "./Seafood/Seafood";
import Other from "./Other/Other";

const Menu = () => {
  return (
    <div>
      <MenuImage
        bgImage={bgImage}
        heading={["Our", <span> Products</span>]}
        text="Everything we have to offer at one glance!"
      />
      <OurMostPopular />
      <Fruits />
      <Vegetables />
      <Seafood />
      <Other />
    </div>
  );
};

export default Menu;
