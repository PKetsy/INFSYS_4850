import React from "react";
import MenuImage from "../../components/MenuImage/MenuImage";
import bgImage from "../../assets/MenuBg.jpg";
import OurMostPopular from "./OurMostPopular/OurMostPopular";
import Fruits from "./Fruits/Fruits";
import Vegetables from "./Vegetables/Vegetables";
import Seafood from "./Seafood/Seafood";
import Kenricks from "./Kenricks/Kenricks";
import Misc from "./Misc/Misc";
import Beverages from "./Beverages/Beverages";

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
      <Kenricks />
      <Misc />
      <Beverages />
    </div>
  );
};

export default Menu;
